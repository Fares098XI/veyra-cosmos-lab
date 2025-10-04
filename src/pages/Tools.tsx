"use client";

import { useState } from "react";
import { Rocket, Search } from "lucide-react";

export default function NasaTools() {
  const categories = ["Earth", "Space", "Biology", "Communication"];
  const allTags = [
    "data",
    "climate",
    "satellites",
    "real-time",
    "disasters",
    "imagery",
    "monitoring",
    "solar system",
    "missions",
    "planets",
    "exploration",
    "asteroids",
    "comets",
    "trajectories",
    "planetary defense",
    "CO₂",
    "temperature",
    "sea level",
    "exoplanets",
    "stars",
    "galaxies",
    "astronomy",
    "ISS",
    "tracking",
    "genomics",
    "health",
    "space medicine",
    "deep space",
    "network",
    "communication",
    "signals",
  ];

  const nasaTools = [
    {
      title: "NASA Earthdata",
      description:
        "A comprehensive open data portal providing access to satellite observations, Earth science datasets, and services used by researchers worldwide.",
      category: "Earth",
      tags: ["data", "climate", "satellites"],
      url: "https://earthdata.nasa.gov",
    },
    {
      title: "NASA Worldview",
      description:
        "An interactive visualization tool to explore near real-time satellite imagery. Useful for tracking wildfires, dust storms, and hurricanes.",
      category: "Earth",
      tags: ["real-time", "disasters", "imagery", "monitoring"],
      url: "https://worldview.earthdata.nasa.gov",
    },
    {
      title: "Eyes on the Solar System",
      description:
        "A 3D interactive platform to explore planets, moons, asteroids, and NASA spacecraft. Provides simulated real-time views of missions and orbits.",
      category: "Space",
      tags: ["solar system", "missions", "planets", "exploration"],
      url: "https://eyes.nasa.gov",
    },
    {
      title: "Eyes on Asteroids",
      description:
        "Track asteroids and comets that pass close to Earth. See orbits, sizes, and trajectories of Near-Earth Objects.",
      category: "Space",
      tags: ["asteroids", "comets", "trajectories", "planetary defense"],
      url: "https://eyes.nasa.gov/apps/asteroids",
    },
    {
      title: "Eyes on the Earth",
      description:
        "Explore how NASA satellites monitor our planet. Visualize CO₂ levels, temperature, and sea level rise.",
      category: "Earth",
      tags: ["CO₂", "temperature", "sea level", "climate"],
      url: "https://eyes.nasa.gov/apps/earth",
    },
    {
      title: "Eyes on Exoplanets",
      description:
        "Discover planets beyond our solar system. Explore thousands of confirmed exoplanets, their sizes, orbits, and host stars.",
      category: "Space",
      tags: ["exoplanets", "stars", "galaxies", "astronomy"],
      url: "https://exoplanets.nasa.gov/eyes-on-exoplanets",
    },
    {
      title: "ISS Tracker (Spot the Station)",
      description:
        "Track the ISS in real time and see when and where it will be visible from your location.",
      category: "Space",
      tags: ["ISS", "tracking", "satellites", "real-time"],
      url: "https://spotthestation.nasa.gov",
    },
    {
      title: "NASA GeneLab",
      description:
        "An open-access space biology data system hosting omics data from spaceflight and ground-based experiments.",
      category: "Biology",
      tags: ["genomics", "health", "space medicine"],
      url: "https://genelab.nasa.gov",
    },
    {
      title: "DSN Now (Deep Space Network)",
      description:
        "See live data of NASA’s Deep Space Network, which communicates with spacecraft across the solar system.",
      category: "Communication",
      tags: ["deep space", "network", "communication", "signals"],
      url: "https://eyes.nasa.gov/dsn",
    },
  ];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredTools = nasaTools.filter((tool) => {
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(tool.category);
    const matchesTag =
      selectedTags.length === 0 || tool.tags.some((t) => selectedTags.includes(t));
    const matchesSearch =
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesTag && matchesSearch;
  });

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium mb-6">
          <Rocket className="w-4 h-4 text-accent" />
          <span>NASA Toolkit</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
          Powerful <span className="gradient-text">NASA Tools</span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore NASA’s most powerful open-access tools, used by scientists, educators,
          and space enthusiasts to study Earth, track missions, and explore the universe
          in real time.
        </p>
      </section>

      {/* Search Bar */}
      <div className="max-w-5xl mx-auto px-4 mb-8">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 text-muted-foreground w-5 h-5" />
          <input
            type="text"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card/60 text-base focus:ring-2 focus:ring-accent"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => toggleCategory(cat)}
              className={`px-6 py-3 rounded-full text-lg font-semibold transition ${
                selectedCategories.includes(cat)
                  ? "bg-accent text-white shadow-lg"
                  : "bg-card/60 text-muted-foreground hover:bg-card"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tags Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {allTags.map((tag, i) => (
            <button
              key={i}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-2 rounded-full text-sm font-medium transition ${
                selectedTags.includes(tag)
                  ? "bg-accent text-white"
                  : "bg-card/60 text-muted-foreground hover:bg-card"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="font-display text-4xl font-bold mb-8 text-center">
          Explore <span className="gradient-text">NASA Resources</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTools.map((tool, index) => (
            <div
              key={index}
              className="glass-panel p-8 space-y-4 animate-fade-in hover:bg-card/60 transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-card/60 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold">{tool.title}</h3>
              <p className="text-muted-foreground text-sm">{tool.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {tool.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-card/40 text-accent text-xs font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 text-sm font-medium rounded-lg bg-accent text-white hover:opacity-90 transition"
              >
                Visit Tool →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
