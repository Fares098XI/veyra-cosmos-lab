// src/pages/MapPage.tsx
import { useState, useEffect } from "react";
import { Map as MapIcon, Layers, Clock, Info, AlertTriangle } from "lucide-react";
import MapMega, { Mode } from "../components/MapMega";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import forestBefore from "../assets/forest-before.jpg";
import forestAfter from "../assets/forest-after.jpg";
import antarcticBefore from "../assets/antarctic-before.jpg";
import antarcticAfter from "../assets/antarctic-after.jpg";
import stormBefore from "../assets/storm-before.jpg";
import stormAfter from "../assets/storm-after.jpg";

export default function MapPage() {
  const [activeLayer, setActiveLayer] = useState<Mode>("all");

  useEffect(() => {
    const saved = localStorage.getItem("veyra_activeLayer") as Mode | null;
    if (saved) setActiveLayer(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("veyra_activeLayer", activeLayer);
  }, [activeLayer]);

  const layers: { id: Mode; name: string; icon: string }[] = [
    { id: "all", name: "All", icon: "✨" },
    { id: "disasters", name: "Disasters", icon: "❌" },
    { id: "risks", name: "Risks", icon: "⚠️" },
    { id: "safe", name: "Safe", icon: "🟢" },
  ];

  return (
    <div className="page-container">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium mb-6">
          <MapIcon className="w-4 h-4 text-accent" />
          <span>Earth Intelligence Platform</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
          Is Our World <span className="gradient-text">Safe?</span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore real-time Earth data with AI-powered insights from space
        </p>
      </section>

      {/* Map Interface */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="glass-panel p-4 space-y-4">
          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-accent" />
              <span className="font-display font-bold">Data Layers</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {layers.map((layer) => (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    activeLayer === layer.id
                      ? "bg-accent/20 text-accent border border-accent/30"
                      : "bg-card/40 hover:bg-card/60"
                  }`}
                >
                  <span className="mr-2">{layer.icon}</span>
                  {layer.name}
                </button>
              ))}
            </div>

            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg glass-panel hover:bg-card/60 transition-colors"
              onClick={() => alert("Timelapse coming soon 🚀")}
            >
              <Clock className="w-4 h-4" />
              <span className="text-sm">Timelapse</span>
            </button>
          </div>

          {/* Globe */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-border/50 bg-black">
            <MapMega mode={activeLayer} />

            <div className="absolute top-4 left-4 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 backdrop-blur text-xs font-bold text-white">
                <span className="opacity-80">Layer:</span>
                <span className="uppercase tracking-wide">{layers.find((l) => l.id === activeLayer)?.name}</span>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 z-10">
              <div className="bg-black/60 border border-white/10 rounded-xl p-3 backdrop-blur text-sm text-white">
                <div className="font-bold mb-2">Status Legend</div>
                <div className="space-y-1">
                  <LegendRow color="#2ecc71" label="Safe" />
                  <LegendRow color="#f1c40f" label="At Risk" />
                  <LegendRow color="#e74c3c" label="Disaster" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attribution */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="glass-panel p-6 flex items-start gap-4">
          <Info className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
          <div className="text-sm text-muted-foreground">
            <p className="font-bold mb-2">Data Sources & Attribution</p>
            <p>
              NASA EONET (Natural Events), NASA FIRMS, MODIS &amp; Landsat, Copernicus EMS, NOAA Sea Level.
            </p>
          </div>
        </div>
      </section>

      {/* Epic Message Section */}
      <section className="max-w-7xl mx-auto px-4 mt-20 mb-20">
        <div className="relative glass-panel p-12 text-center overflow-hidden border-2 border-destructive/30">
          <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-transparent to-destructive/10"></div>
          <div className="relative z-10">
            <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-6 animate-pulse" />
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Almost all red dots?
            </h2>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
              That's because <span className="text-destructive font-bold">nothing is truly safe</span>
            </p>
            <p className="text-xl md:text-2xl font-display font-bold text-foreground">
              That's why we MUST take action. Now.
            </p>
            <div className="mt-8 h-1 w-32 bg-gradient-to-r from-transparent via-destructive to-transparent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Before & After Comparison Scenes */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            The Evidence Is <span className="text-destructive">Undeniable</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Satellite imagery reveals the devastating impact of climate change
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          <BeforeAfterSlider
            beforeImage={forestBefore}
            afterImage={forestAfter}
            title="Wildfire Devastation"
            beforeLabel="HEALTHY FOREST"
            afterLabel="AFTER WILDFIRE"
          />

          <BeforeAfterSlider
            beforeImage={antarcticBefore}
            afterImage={antarcticAfter}
            title="Antarctic Ice Melt"
            beforeLabel="2000"
            afterLabel="2024"
          />

          <BeforeAfterSlider
            beforeImage={stormBefore}
            afterImage={stormAfter}
            title="Storm Destruction"
            beforeLabel="BEFORE HURRICANE"
            afterLabel="AFTER HURRICANE"
          />
        </div>
      </section>
    </div>
  );
}

function LegendRow({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-block w-3 h-3 rounded-full border border-white" style={{ background: color }} />
      <span className="text-white">{label}</span>
    </div>
  );
}
