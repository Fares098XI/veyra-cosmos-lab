import { useState } from "react";
import { Camera, BookOpen, Play, Info } from "lucide-react";
import cupolaInterior from "@/assets/cupola-interior.jpg";
import earthFromISS from "@/assets/earth-from-iss.jpg";

export default function Cupola() {
  const [selectedHotspot, setSelectedHotspot] = useState<number | null>(null);

  const lessons = [
    {
      title: "Earth Observation Fundamentals",
      description: "Learn how astronauts use the Cupola for scientific observation and Earth monitoring",
      duration: "5 min",
    },
    {
      title: "Disaster Relief Applications",
      description: "Discover how ISS observations help coordinate emergency response efforts",
      duration: "8 min",
    },
    {
      title: "Agriculture & Climate Monitoring",
      description: "Explore space-based agricultural monitoring and climate change research",
      duration: "10 min",
    },
  ];

  const hotspots = [
    {
      id: 1,
      title: "Amazon Rainforest",
      description: "Monitor deforestation patterns and biodiversity changes in real-time",
      status: "ACTIVE",
    },
    {
      id: 2,
      title: "Mediterranean Sea",
      description: "Track sea temperatures and algae blooms affecting marine ecosystems",
      status: "STABLE",
    },
    {
      id: 3,
      title: "Himalayan Glaciers",
      description: "Observe glacial retreat and its impact on regional water supplies",
      status: "AT RISK",
    },
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center mb-20 animate-fade-in">
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
          <img
            src={cupolaInterior}
            alt="ISS Cupola Interior"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
        </div>

        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium mb-4">
            <Camera className="w-4 h-4 text-accent" />
            <span>VR Concept Demo</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold">
            <span className="gradient-text">Cupola</span> VR Simulation
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience Earth observation from the International Space Station's iconic seven-window observatory module
          </p>
        </div>
      </section>

      {/* 360 Viewer Section */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="glass-panel p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-3xl font-bold">Interactive Earth View</h2>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/20 text-accent hover:bg-accent/30 transition-colors">
              <Play className="w-5 h-5" />
              <span className="font-medium">Start 360° Tour</span>
            </button>
          </div>

          {/* Viewer Container */}
          <div className="relative aspect-video bg-card rounded-xl overflow-hidden border border-border/50">
            <img
              src={earthFromISS}
              alt="Earth from Cupola"
              className="w-full h-full object-cover"
            />

            {/* Interactive Hotspots */}
            {hotspots.map((hotspot, index) => (
              <button
                key={hotspot.id}
                onClick={() => setSelectedHotspot(hotspot.id)}
                className="absolute animate-glow-pulse"
                style={{
                  top: `${30 + index * 20}%`,
                  left: `${25 + index * 20}%`,
                }}
              >
                <div className="w-8 h-8 rounded-full bg-accent/80 flex items-center justify-center hover:scale-125 transition-transform">
                  <Info className="w-4 h-4 text-white" />
                </div>
              </button>
            ))}

            {/* Hotspot Info Card */}
            {selectedHotspot && (
              <div className="absolute bottom-4 left-4 right-4 glass-panel p-6 animate-slide-in-right">
                {hotspots
                  .filter((h) => h.id === selectedHotspot)
                  .map((hotspot) => (
                    <div key={hotspot.id} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-xl font-bold">{hotspot.title}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            hotspot.status === "ACTIVE"
                              ? "bg-destructive/20 text-destructive"
                              : hotspot.status === "STABLE"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-orange-500/20 text-orange-400"
                          }`}
                        >
                          {hotspot.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{hotspot.description}</p>
                      <button className="text-accent font-medium text-sm hover:underline">
                        View Full Analysis →
                      </button>
                    </div>
                  ))}
              </div>
            )}
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Click on the glowing markers to explore different Earth observation points
          </p>
        </div>
      </section>

      {/* Lesson Modules */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <h2 className="font-display text-4xl font-bold mb-8">
          Learning <span className="gradient-text">Modules</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <div
              key={index}
              className="glass-panel p-6 hover:bg-card/60 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm text-muted-foreground">{lesson.duration}</span>
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{lesson.title}</h3>
              <p className="text-muted-foreground mb-4">{lesson.description}</p>
              <button className="text-accent font-medium text-sm hover:underline">
                Start Lesson →
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
