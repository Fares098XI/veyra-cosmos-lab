// src/components/MapMega.tsx
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// load the CSP-safe worker module in a compatibility-friendly way
import * as MapboxWorkerModule from "mapbox-gl/dist/mapbox-gl-csp-worker.js";
const MapboxWorker: any = (MapboxWorkerModule as any).default ?? MapboxWorkerModule;
// assign worker class (works whether the module exports default or named)
(mapboxgl as any).workerClass = MapboxWorker;

// optional bundled fallback safe points — keep or remove; if missing set to []
import localList from "../lib/locations.json";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN as string || "";

export type Mode = "all" | "disasters" | "risks" | "safe";

type Counts = { hazards: number; disasters: number; risks: number; safe: number };

const EONET_URL = "https://eonet.gsfc.nasa.gov/api/v3/events?status=open&limit=5000";
const MAX_SAFE_POINTS = 200;

function deriveStatusFromTitles(titles: string[]): "disaster" | "risk" {
  const lower = titles.map((t) => (t || "").toLowerCase());
  if (lower.some((t) => t.includes("wildfire") || t.includes("hurricane") || t.includes("cyclone") || t.includes("volcano"))) {
    return "disaster";
  }
  return "risk";
}

function buildSafeFeatures() {
  const arr = Array.isArray(localList) ? localList : [];
  const valid = arr.filter((p: any) => p && Number.isFinite(Number(p.lng)) && Number.isFinite(Number(p.lat)));
  const sample = valid.slice(0, MAX_SAFE_POINTS);
  const features = sample.map((p: any) => ({
    type: "Feature" as const,
    geometry: { type: "Point" as const, coordinates: [Number(p.lng), Number(p.lat)] },
    properties: {
      name: p.name ?? "Location",
      description: p.description ?? "",
      status: "safe",
      source: "json",
    },
  }));
  return { type: "FeatureCollection" as const, features };
}

// Helper: try to apply a filter using two styles for maximum compatibility
function setStatusFilter(map: mapboxgl.Map, layerId: string, value: string | null) {
  if (value === null) {
    try { map.setFilter(layerId, null); console.log(`[MapMega] cleared filter for ${layerId} via null`); return; } catch(_) {}
    try { (map as any).setFilter(layerId, true); console.log(`[MapMega] cleared filter for ${layerId} via true fallback`); return; } catch(_) {}
    return;
  }

  const exprStyle = ["==", ["get", "status"], value];
  const legacyStyle = ["==", "status", value];
  try {
    map.setFilter(layerId, exprStyle as any);
    console.log(`[MapMega] applied filter (expr) on ${layerId}:`, exprStyle);
    return;
  } catch (e) {
    console.warn(`[MapMega] expr filter failed for ${layerId}`, e);
  }
  try {
    (map as any).setFilter(layerId, legacyStyle);
    console.log(`[MapMega] applied filter (legacy) on ${layerId}:`, legacyStyle);
    return;
  } catch (e) {
    console.warn(`[MapMega] legacy filter failed for ${layerId}`, e);
  }
}

export default function MapMega({ mode = "all" as Mode }: { mode?: Mode }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [counts, setCounts] = useState<Counts>({ hazards: 0, disasters: 0, risks: 0, safe: 0 });
  const [lastError, setLastError] = useState<string | null>(null);

  // INIT MAP + LAYERS
  useEffect(() => {
    if (mapRef.current || !containerRef.current) return;

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [10, 20],
      zoom: 1.5,
      projection: { name: "globe" },
    });
    mapRef.current = map;

    map.on("style.load", () => {
      // intentionally no fog

      const placeholder = {
        type: "FeatureCollection" as const,
        features: [
          {
            type: "Feature" as const,
            geometry: { type: "Point" as const, coordinates: [0, 0] },
            properties: { name: "TEST POINT (0,0)", status: "disaster", source: "test", description: "fallback" },
          },
        ],
      };

      // hazard source & layer
      if (!map.getSource("hazard-src")) {
        map.addSource("hazard-src", { type: "geojson", data: placeholder });
      }
      if (!map.getLayer("hazard-dots")) {
        map.addLayer({
          id: "hazard-dots",
          type: "circle",
          source: "hazard-src",
          paint: {
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 1, 4, 6, 6, 8, 8],
            "circle-color": ["match", ["get", "status"], "disaster", "#e74c3c", "risk", "#f1c40f", "#ffffff"],
            "circle-stroke-color": "#000000",
            "circle-stroke-width": 0.8,
            "circle-opacity": 0.95,
          },
        });
      }

      // safe source & layer (fallback)
      const safeFC = buildSafeFeatures();
      if (!map.getSource("safe-src")) {
        map.addSource("safe-src", { type: "geojson", data: safeFC });
      } else {
        (map.getSource("safe-src") as mapboxgl.GeoJSONSource).setData(safeFC);
      }
      if (!map.getLayer("safe-dots")) {
        map.addLayer({
          id: "safe-dots",
          type: "circle",
          source: "safe-src",
          paint: {
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 1, 3, 4, 5, 6, 6],
            "circle-color": "#2ecc71",
            "circle-stroke-color": "#ffffff",
            "circle-stroke-width": 0.8,
          },
        });
      }

      // POPUPS
      const popup = new mapboxgl.Popup({ closeButton: true, closeOnClick: true });
      const showPopup = (feature: any) => {
        if (!feature) return;
        const props = feature.properties || {};
        const coords = feature.geometry?.coordinates ?? [0, 0];
        const catList = props.categories ? (Array.isArray(props.categories) ? props.categories.join(", ") : String(props.categories)) : "";
        const statusLabel = props.status === "safe" ? "🟢 SAFE" : props.status === "disaster" ? "❌ DISASTER" : "⚠️ RISK";
        const html = `<div style="min-width:220px">
          <h3 style="margin:0 0 6px 0;font-weight:700">${props.name ?? props.title ?? "Event"}</h3>
          <div style="font-size:12px;opacity:.9;margin-bottom:6px"><strong>Status:</strong> ${statusLabel}<br/><strong>Source:</strong> ${props.source ?? ""}${catList ? "<br/><strong>Categories:</strong> " + catList : ""}</div>
          <div style="font-size:13px;opacity:.9">${props.description ?? ""}</div>
        </div>`;
        popup.setLngLat([coords[0], coords[1]]).setHTML(html).addTo(map);
      };

      map.on("click", "hazard-dots", (e) => showPopup(e.features?.[0]));
      map.on("click", "safe-dots", (e) => showPopup(e.features?.[0]));
      map.on("mouseenter", "hazard-dots", () => (map.getCanvas().style.cursor = "pointer"));
      map.on("mouseleave", "hazard-dots", () => (map.getCanvas().style.cursor = ""));
      map.on("mouseenter", "safe-dots", () => (map.getCanvas().style.cursor = "pointer"));
      map.on("mouseleave", "safe-dots", () => (map.getCanvas().style.cursor = ""));

      // EONET loader (resilient)
      let mounted = true;
      async function loadEonet() {
        try {
          const r = await fetch(EONET_URL, { cache: "no-store" });
          if (!r.ok) throw new Error("EONET HTTP " + r.status);
          const dj = await r.json();
          const events = Array.isArray(dj.events) ? dj.events : [];
          const features = events
            .map((ev: any) => {
              const geoms = ev.geometry || [];
              if (!geoms.length) return null;
              const last = geoms[geoms.length - 1];
              const coords = last?.coordinates;
              if (!coords || coords.length < 2) return null;
              const catTitles = (ev.categories || []).map((c: any) => String(c?.title || ""));
              const status = deriveStatusFromTitles(catTitles);
              return {
                type: "Feature" as const,
                geometry: { type: "Point" as const, coordinates: [Number(coords[0]), Number(coords[1])] },
                properties: {
                  name: String(ev.title ?? "EONET Event"),
                  description: String(ev.description ?? ""),
                  status,
                  categories: catTitles,
                  source: "eonet",
                },
              };
            })
            .filter(Boolean);
          if (!mounted) return;
          (map.getSource("hazard-src") as mapboxgl.GeoJSONSource).setData({ type: "FeatureCollection", features });
          const disasters = features.filter((f: any) => f.properties.status === "disaster").length;
          const risks = features.filter((f: any) => f.properties.status === "risk").length;
          setCounts({ hazards: features.length, disasters, risks, safe: safeFC.features.length });
          setLastError(null);
          console.log("EONET loaded:", features.length, "disasters:", disasters, "risks:", risks);
        } catch (err: any) {
          console.error("EONET load failed:", err);
          setLastError(String(err?.message || err));
          // preserve previously loaded hazard data on error
        }
      }

      // kick off
      loadEonet();
      const id = setInterval(loadEonet, 5 * 60 * 1000);

      map.once("remove", () => {
        mounted = false;
        clearInterval(id);
      });
    });

    return () => {
      try {
        mapRef.current?.remove();
      } catch (e) {}
      mapRef.current = null;
    };
  }, []);

  // FILTER APPLICATION — retry until layers exist
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    function applyFilterNow(): boolean {
      if (!map.getLayer("hazard-dots") || !map.getLayer("safe-dots")) {
        // layers not ready yet
        return false;
      }

      if (mode === "all") {
        map.setLayoutProperty("hazard-dots", "visibility", "visible");
        map.setLayoutProperty("safe-dots", "visibility", "visible");
        // clear hazard filter defensively
        setStatusFilter(map, "hazard-dots", null);
        setStatusFilter(map, "safe-dots", null);
        console.log("[MapMega] Filter: ALL");
      } else if (mode === "disasters") {
        map.setLayoutProperty("hazard-dots", "visibility", "visible");
        map.setLayoutProperty("safe-dots", "visibility", "none");
        setStatusFilter(map, "hazard-dots", "disaster");
        console.log("[MapMega] Filter: DISASTERS");
      } else if (mode === "risks") {
        map.setLayoutProperty("hazard-dots", "visibility", "visible");
        map.setLayoutProperty("safe-dots", "visibility", "none");
        setStatusFilter(map, "hazard-dots", "risk");
        console.log("[MapMega] Filter: RISKS");
      } else if (mode === "safe") {
        map.setLayoutProperty("hazard-dots", "visibility", "none");
        map.setLayoutProperty("safe-dots", "visibility", "visible");
        setStatusFilter(map, "safe-dots", null);
        console.log("[MapMega] Filter: SAFE (hazards hidden)");
      }
      return true;
    }

    let attempts = 0;
    const iv = setInterval(() => {
      attempts++;
      const ok = applyFilterNow();
      if (ok || attempts >= 12) clearInterval(iv);
    }, 250);

    return () => clearInterval(iv);
  }, [mode]);

  // small debug overlay is rendered inside this component
  return (
    <div className="relative">
      <div ref={containerRef} className="w-full h-[640px] rounded-xl overflow-hidden border border-gray-700" />
      <div style={{ position: "absolute", left: 12, top: 12, background: "rgba(0,0,0,0.78)", color: "white", padding: 10, borderRadius: 8, fontSize: 12 }}>
        <div><strong>Mapbox token:</strong> {Boolean(mapboxgl.accessToken) ? "✅" : "❌ (set VITE_MAPBOX_TOKEN)"}</div>
        <div style={{ marginTop: 6 }}><strong>Hazards:</strong> {counts.hazards}</div>
        <div><strong>Disasters:</strong> {counts.disasters} &nbsp; <strong>Risks:</strong> {counts.risks}</div>
        <div><strong>Safe (fallback):</strong> {counts.safe}</div>
        {lastError && <div style={{ marginTop: 6, color: "#ff9b9b" }}><strong>Error:</strong> {lastError}</div>}
      </div>
    </div>
  );
}
