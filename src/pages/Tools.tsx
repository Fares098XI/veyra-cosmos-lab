"use client";

import { useState } from "react";
import { Rocket, Search } from "lucide-react";

export default function NasaTools() {
  const filters = [
    "All",
    "Earth",
    "Space",
    "Biology",
    "Communication",
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
        "A comprehensive open data portal that provides access to satellite observations, Earth science datasets, and services used by researchers worldwide.",
      filters: ["Earth", "data", "climate", "satellites"],
      url: "https://earthdata.nasa.gov",
    },
    {
      title: "NASA Worldview",
      description:
        "An interactive visualization tool that allows users to explore near real-time satellite imagery. Track natural events like wildfires, dust storms, and hurricanes.",
      filters: ["Earth", "real-time", "disasters", "imagery", "monitoring"],
      url: "https://worldview.earthdata.nasa.gov",
    },
    {
      title: "Eyes on the Solar System",
      description:
        "A 3D interactive platform to explore planets, moons, asteroids, and NASA spacecraft. Provides simulated real-time views of missions and orbits.",
      filters: ["Space", "solar system", "missions", "planets", "exploration"],
      url: "https://eyes.nasa.gov",
    },
    {
      title: "Eyes on Asteroids",
      description:
        "Track asteroids and comets that pass close to Earth. See orbits, sizes, and trajectories of Near-Earth Objects.",
      filters: ["Space", "asteroids", "comets", "trajectories", "planetary defense"],
      url: "https://eyes.nasa.gov/apps/asteroids",
    },
    {
      title: "Eyes on the Earth",
      description:
        "Explore how NASA satellites monitor our planet. Visualize measurements like CO₂ levels, temperature, and sea level rise.",
      filters: ["Earth", "CO₂", "temperature", "sea level", "climate"],
      url: "https://eyes.nasa.gov/apps/earth",
    },
    {
      title: "Eyes on Exoplanets",
      description:
        "Discover planets beyond our solar system. Explore thousands of confirmed exoplanets, showing sizes, orbits, and host stars.",
      filters: ["Space", "exoplanets", "stars", "galaxies", "astronomy"],
      url: "https://exoplanets.nasa.gov/eyes-on-exoplanets",
    },
    {
      title: "ISS Tracker (Spot the Station)",
      description:
        "Track the ISS in real time and see when and where it will be visible from your location.",
      filters: ["Space", "ISS", "tracking", "satellites", "real-time"],
      url: "https://spotthestation.nasa.gov",
    },
    {
      title: "NASA GeneLab",
      description:
        "An open-access space biology data system hosting omics data from spaceflight and ground-based experiments.",
      filters: ["Biology", "genomics", "health", "space medicine"],
      url: "https://genelab.nasa.gov",
    },
    {
      title: "DSN Now (Deep Space Network)",
      description:
        "See live data of NASA’s Deep Space Network, which communicates with spacecraft across the solar system.",
      filters: ["Communication", "deep space", "network", "communication", "signals"],
      url: "https://eyes.nasa.gov/dsn",
    },
  ];

  const [selectedFilters, setSelectedFilters] = useState<string[]>(["All"]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFilter = (filter: string) => {
    if (filter === "All") {
      setSelectedFilters(["All"]);
    } else {
      let updatedFilters = selectedFilters.includes(filter)
        ? selectedFilters.filter((f) => f !== filter)
        : [...selectedFilters.filter((f) => f !== "All"), filter];
      if (updatedFilters.length === 0) updatedFilters = ["All"];
      setSelectedFilters(updatedFilters);
    }
  };

  const filteredTools = nasaTools.filter((tool) => {
    const matchesFilter =
      selectedFilters.includes("All") ||
      tool.filters.some((f) => selectedFilters.includes(f));
    const matchesSearch =
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.filters.some((f) =>
        f.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesFilter && matchesSearch;
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

      {/* Unified Multi-Select Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 px-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => toggleFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedFilters.includes(filter)
                ? "bg-accent text-white"
                : "bg-card/60 text-muted-foreground hover:bg-accent/20"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-10 px-4">
        <div className="relative w-full max-w-xl">
          <Search className="absolute left-3 top-3 text-muted-foreground w-5 h-5" />
          <input
            type="text"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card/60 text-base focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>

      {/* Tools Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTools.map((tool, index) => (
            <div
              key={index}
              className="glass-panel p-8 space-y-4 animate-fade-in text-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-card/60 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold">{tool.title}</h3>
              <p className="text-muted-foreground text-sm">{tool.description}</p>

              {/* Tags as separate boxes */}
              <div className="flex flex-wrap gap-2 mt-3">
                {tool.filters.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <a
