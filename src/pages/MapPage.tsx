import { useState } from "react";
import { Map as MapIcon, Layers, Clock, AlertTriangle, CheckCircle, Info } from "lucide-react";
import MapComponent from "@/components/MapComponent";

export default function MapPage() {
  const [activeLayer, setActiveLayer] = useState("fires");

  const layers = [
    { id: "fires", name: "Active Fires", icon: "🔥", color: "text-destructive" },
    { id: "floods", name: "Flood Risk", icon: "🌊", color: "text-cyan-400" },
    { id: "deforestation", name: "Deforestation", icon: "🌳", color: "text-green-400" },
    { id: "sealevel", name: "Sea Level", icon: "🌊", color: "text-blue-400" },
  ];

  const hotspots = [
    {
      location: "Amazon Rainforest",
      coordinates: [-60.0, -3.0] as [number, number],
      status: "AT RISK",
      summary: "Deforestation rates increased 15% this month. Satellites show 200km² of forest loss.",
      impact: "Critical biodiversity loss and carbon release",
      action: "Monitor updates; support conservation initiatives",
      color: "orange",
    },
    {
      location: "Great Barrier Reef",
      coordinates: [147.0, -18.0] as [number, number],
      status: "ACTIVE INCIDENT",
      summary: "Coral bleaching event detected. Sea temperatures 2°C above normal.",
      impact: "Severe damage to coral ecosystems",
      action: "Track temperature changes; consult marine advisories",
      color: "red",
    },
    {
      location: "Sahel Region",
      coordinates: [15.0, 15.0] as [number, number],
      status: "STABLE",
      summary: "Vegetation recovery observed. Rainfall patterns normalizing.",
      impact: "Positive agricultural outlook",
      action: "Continue long-term monitoring",
      color: "green",
    },
    {
      location: "California Wildfires",
      coordinates: [-120.0, 37.0] as [number, number],
      status: "ACTIVE INCIDENT",
      summary: "Multiple active fire zones detected. Over 50,000 acres affected.",
      impact: "Air quality degradation and habitat destruction",
      action: "Evacuate affected areas; monitor fire spread",
      color: "red",
    },
    {
      location: "Arctic Ice Shelf",
      coordinates: [0.0, 85.0] as [number, number],
      status: "AT RISK",
      summary: "Ice loss accelerating. 12% reduction in coverage this year.",
      impact: "Sea level rise and polar habitat loss",
      action: "Track ice extent; study climate patterns",
      color: "orange",
    },
    {
      location: "Ganges Delta",
      coordinates: [90.0, 22.0] as [number, number],
      status: "AT RISK",
      summary: "Rising sea levels threatening coastal communities. Erosion increasing.",
      impact: "Displacement of millions and agricultural loss",
      action: "Implement flood defenses; relocate vulnerable populations",
      color: "orange",
    },
    {
      location: "Lake Chad",
      coordinates: [14.0, 13.0] as [number, number],
      status: "AT RISK",
      summary: "Water levels at historic lows. 90% shrinkage since 1960s.",
      impact: "Water scarcity affecting 30 million people",
      action: "Water conservation; regional cooperation needed",
      color: "orange",
    },
    {
      location: "Borneo Forests",
      coordinates: [114.0, 0.0] as [number, number],
      status: "ACTIVE INCIDENT",
      summary: "Palm oil expansion causing rapid deforestation. Orangutan habitat threatened.",
      impact: "Species extinction risk and carbon emissions",
      action: "Support sustainable agriculture; protect reserves",
      color: "red",
    },
    {
      location: "Antarctic Peninsula",
      coordinates: [-60.0, -65.0] as [number, number],
      status: "AT RISK",
      summary: "Warming faster than global average. Ice shelf collapse detected.",
      impact: "Accelerated global sea level rise",
      action: "Monitor glacier movement; climate research",
      color: "orange",
    },
    {
      location: "Mediterranean Sea",
      coordinates: [15.0, 38.0] as [number, number],
      status: "STABLE",
      summary: "Temperature stabilizing. Marine protected areas showing recovery.",
      impact: "Positive biodiversity indicators",
      action: "Maintain conservation efforts",
      color: "green",
    },
    {
      location: "Himalayan Glaciers",
      coordinates: [85.0, 28.0] as [number, number],
      status: "AT RISK",
      summary: "Glacial retreat accelerating. Water supply for 1.9 billion at risk.",
      impact: "Regional water crisis and flooding",
      action: "Climate action; water management planning",
      color: "orange",
    },
    {
      location: "Australian Outback",
      coordinates: [133.0, -25.0] as [number, number],
      status: "ACTIVE INCIDENT",
      summary: "Extreme drought conditions. Record-breaking temperatures detected.",
      impact: "Agricultural collapse and water shortages",
      action: "Drought relief measures; water restrictions",
      color: "red",
    },
    {
      location: "Congo Basin",
      coordinates: [22.0, 0.0] as [number, number],
      status: "STABLE",
      summary: "Forest cover maintained. Conservation efforts successful.",
      impact: "Carbon sequestration and biodiversity preserved",
      action: "Continue protection programs",
      color: "green",
    },
    {
      location: "Maldives Islands",
      coordinates: [73.0, 3.2] as [number, number],
      status: "ACTIVE INCIDENT",
      summary: "Sea levels rising faster than predicted. Islands face submersion.",
      impact: "Nation-level displacement threat",
      action: "Emergency adaptation measures; international support",
      color: "red",
    },
    {
      location: "Yellowstone Region",
      coordinates: [-110.0, 44.5] as [number, number],
      status: "STABLE",
      summary: "Ecosystem health indicators positive. Wildlife populations recovering.",
      impact: "Successful conservation model",
      action: "Maintain current management",
      color: "green",
    },
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
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

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg glass-panel hover:bg-card/60 transition-colors">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Timelapse</span>
            </button>
          </div>

          {/* Interactive Map */}
          <MapComponent hotspots={hotspots} />
        </div>
      </section>

      {/* AI Insights Cards */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="font-display text-4xl font-bold mb-8">
          AI-Powered <span className="gradient-text">Insights</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotspots.map((hotspot, index) => (
            <div
              key={index}
              className="glass-panel p-6 space-y-4 hover:bg-card/60 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold">{hotspot.location}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
                    hotspot.color === "red"
                      ? "bg-destructive/20 text-destructive"
                      : hotspot.color === "orange"
                      ? "bg-orange-500/20 text-orange-400"
                      : "bg-green-500/20 text-green-400"
                  }`}
                >
                  {hotspot.color === "red" ? (
                    <AlertTriangle className="w-3 h-3" />
                  ) : (
                    <CheckCircle className="w-3 h-3" />
                  )}
                  {hotspot.status}
                </span>
              </div>

              {/* AI Summary */}
              <p className="text-sm text-foreground/90">{hotspot.summary}</p>

              {/* Impact */}
              <div className="space-y-1">
                <div className="text-xs font-bold text-muted-foreground">IMPACT</div>
                <p className="text-sm text-foreground/80">{hotspot.impact}</p>
              </div>

              {/* Action */}
              <div className="space-y-1">
                <div className="text-xs font-bold text-muted-foreground">SUGGESTED ACTION</div>
                <p className="text-sm text-foreground/80">{hotspot.action}</p>
              </div>

              <button className="w-full py-2 rounded-lg bg-accent/20 text-accent hover:bg-accent/30 transition-colors font-medium text-sm">
                View Full Analysis →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Data Attribution */}
      <section className="max-w-7xl mx-auto px-4 mt-20">
        <div className="glass-panel p-6 flex items-start gap-4">
          <Info className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
          <div className="text-sm text-muted-foreground">
            <p className="font-bold mb-2">Data Sources & Attribution</p>
            <p>
              NASA FIRMS (Fire Information), MODIS & Landsat (Earth Observation), Copernicus
              Emergency Management Service, NOAA Sea Level Data. All imagery and data courtesy of
              NASA Earth Observatory and ESA Sentinel missions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
