import { useState, useEffect } from "react";
import { Waves, Info, Play, Award, Droplet, Gauge, Wind, BookOpen } from "lucide-react";
import nblTraining from "@/assets/nbl-training.jpg";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export default function NBL() {
  const [weightValue, setWeightValue] = useState(50);
  const [isTraining, setIsTraining] = useState(false);
  const [oxygenLevel, setOxygenLevel] = useState(100);

  // Scientific calculations based on Archimedes' principle
  const targetDepth = 12; // meters (NBL pool depth)
  const actualDepth = ((100 - weightValue) / 100) * targetDepth;
  const buoyancyForce = (50 - weightValue) * 0.98; // Newtons (simplified)
  const waterPressure = (actualDepth * 0.098).toFixed(2); // atmospheres
  const neutralZoneMin = 45;
  const neutralZoneMax = 55;
  const isNeutral = weightValue >= neutralZoneMin && weightValue <= neutralZoneMax;

  // Simulate oxygen consumption during training
  useEffect(() => {
    if (isTraining && oxygenLevel > 0) {
      const interval = setInterval(() => {
        setOxygenLevel(prev => Math.max(0, prev - 0.5));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isTraining, oxygenLevel]);

  const tasks = [
    { id: 1, title: "Panel Alignment", duration: "3 min", difficulty: "Easy" },
    { id: 2, title: "Rail Navigation", duration: "5 min", difficulty: "Medium" },
    { id: 3, title: "Tool Handling", duration: "8 min", difficulty: "Hard" },
  ];

  // === ADDED: Lessons 6-10 (NBL) ===
  const lessons = [
    {
      id: 6,
      title: "Introduction to the Neutral Buoyancy Lab",
      description:
        "Discover NASA’s massive underwater training facility and its role in astronaut preparation.",
    },
    {
      id: 7,
      title: "The Physics of Neutral Buoyancy",
      description:
        "Understand Archimedes’ principle and how it creates microgravity-like conditions on Earth.",
    },
    {
      id: 8,
      title: "EVA Training in the NBL (Step-by-Step Simulation)",
      description:
        "Explore how astronauts rehearse spacewalks underwater with tools, tethers, and practice modules.",
    },
    {
      id: 9,
      title: "Challenges & Problem-Solving in the NBL",
      description:
        "Learn how astronauts adapt to visibility, mobility, and communication challenges in the pool.",
    },
    {
      id: 10,
      title: "Earth Applications of NBL Training",
      description:
        "See how neutral buoyancy techniques are applied in underwater robotics, medicine, and exploration.",
    },
  ];
  // === end added lessons ===

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center mb-20 animate-fade-in">
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
          <img
            src={nblTraining}
            alt="Neutral Buoyancy Lab Training"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
        </div>

        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium mb-4">
            <Waves className="w-4 h-4 text-accent" />
            <span>Weightlessness Simulation</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold">
            <span className="gradient-text">NBL</span> Training Lab
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience neutral buoyancy training like real astronauts preparing for spacewalks
          </p>
        </div>
      </section>

      {/* Interactive Training Module */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="glass-panel p-8 space-y-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2 className="font-display text-3xl font-bold">Buoyancy Control Simulator</h2>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass-panel">
              <Info className="w-4 h-4 text-accent" />
              <span className="text-sm">Based on Archimedes' Principle</span>
            </div>
          </div>

          {/* Scientific Metrics Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-panel p-4 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400">
                <Gauge className="w-4 h-4" />
                <span className="text-xs font-medium">Depth</span>
              </div>
              <p className="text-2xl font-bold">{actualDepth.toFixed(1)}m</p>
              <p className="text-xs text-muted-foreground">Target: {targetDepth}m</p>
            </div>

            <div className="glass-panel p-4 space-y-2">
              <div className="flex items-center gap-2 text-blue-400">
                <Droplet className="w-4 h-4" />
                <span className="text-xs font-medium">Pressure</span>
              </div>
              <p className="text-2xl font-bold">{waterPressure} atm</p>
              <p className="text-xs text-muted-foreground">Water pressure</p>
            </div>

            <div className="glass-panel p-4 space-y-2">
              <div className="flex items-center gap-2 text-green-400">
                <Wind className="w-4 h-4" />
                <span className="text-xs font-medium">O₂ Level</span>
              </div>
              <p className="text-2xl font-bold">{oxygenLevel.toFixed(0)}%</p>
              <p className="text-xs text-muted-foreground">
                {oxygenLevel < 20 ? "Critical!" : "Nominal"}
              </p>
            </div>

            <div className="glass-panel p-4 space-y-2">
              <div className="flex items-center gap-2 text-purple-400">
                <Award className="w-4 h-4" />
                <span className="text-xs font-medium">Buoyancy</span>
              </div>
              <p className="text-2xl font-bold">{buoyancyForce.toFixed(1)}N</p>
              <p className="text-xs text-muted-foreground">
                {isNeutral ? "Neutral ✓" : "Unstable"}
              </p>
            </div>
          </div>

          {/* Simulation Area */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Visual Simulation */}
            <div className="relative aspect-square bg-gradient-to-b from-cyan-950/40 via-cyan-900/30 to-cyan-800/20 rounded-xl border border-cyan-500/30 overflow-hidden shadow-2xl shadow-cyan-500/20">
              {/* Water layers with depth gradient */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-cyan-600/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_70%)]" />
              </div>

              {/* Depth markers */}
              <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-between text-xs text-cyan-300/60 py-4">
                {[0, 3, 6, 9, 12].map(depth => (
                  <div key={depth} className="flex items-center gap-1">
                    <div className="w-3 h-px bg-cyan-400/40" />
                    <span>{depth}m</span>
                  </div>
                ))}
              </div>

              {/* Neutral zone indicator */}
              <div
                className="absolute left-0 right-0 bg-green-500/10 border-y border-green-500/30"
                style={{
                  top: `${neutralZoneMin}%`,
                  height: `${neutralZoneMax - neutralZoneMin}%`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-xs text-green-400/60 font-medium">
                  Neutral Zone
                </div>
              </div>

              {/* Astronaut Avatar with improved physics */}
              <div
                className="absolute w-28 h-36 left-1/2 -translate-x-1/2 transition-all duration-1000 ease-out"
                style={{
                  top: `${Math.max(5, Math.min(90, 100 - weightValue))}%`,
                  transform: `translateX(-50%) rotate(${(50 - weightValue) * 0.2}deg)`,
                }}
              >
                {/* Spacesuit body */}
                <div className="w-full h-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-xl relative shadow-lg border-2 border-gray-400/50">
                  <div className="absolute inset-3 bg-gradient-to-br from-gray-50 to-gray-200 rounded-lg" />

                  {/* Life support pack */}
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-16 h-20 bg-gradient-to-b from-gray-300 to-gray-400 rounded-md border border-gray-500/30" />

                  {/* Helmet with visor reflection */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-radial from-cyan-300/40 via-cyan-400/30 to-transparent rounded-full border-4 border-cyan-400/60 shadow-lg shadow-cyan-400/40">
                    <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
                  </div>

                  {/* Arms */}
                  <div className="absolute top-1/3 -left-2 w-3 h-16 bg-gray-200 rounded-full rotate-12" />
                  <div className="absolute top-1/3 -right-2 w-3 h-16 bg-gray-200 rounded-full -rotate-12" />

                  {/* Status indicator light */}
                  <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${isNeutral ? 'bg-green-400' : 'bg-red-400'} animate-pulse shadow-lg ${isNeutral ? 'shadow-green-400' : 'shadow-red-400'}`} />
                </div>

                {/* Bubbles with physics */}
                {isTraining &&
                  [...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute bg-white/60 rounded-full animate-float shadow-lg shadow-white/20"
                      style={{
                        width: `${4 + Math.random() * 6}px`,
                        height: `${4 + Math.random() * 6}px`,
                        left: `${10 + i * 12}%`,
                        bottom: "100%",
                        animationDelay: `${i * 0.4}s`,
                        animationDuration: `${2 + Math.random() * 2}s`,
                      }}
                    />
                  ))}
              </div>

              {/* Zone Labels */}
              <div className="absolute top-4 left-4 right-4 flex justify-between text-xs font-medium">
                <span className="text-red-400 flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                  Surface (0m)
                </span>
                <span className="text-blue-400 flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  Bottom ({targetDepth}m)
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="font-display font-bold text-lg">
                    Weight Configuration
                  </label>
                  <span className="text-2xl font-bold text-accent">{weightValue} kg</span>
                </div>

                <Slider
                  value={[weightValue]}
                  onValueChange={(value) => setWeightValue(value[0])}
                  min={0}
                  max={100}
                  step={1}
                  className="w-full"
                />

                <div className="flex justify-between text-sm text-muted-foreground">
                  <span className="flex flex-col items-start">
                    <span className="font-medium">0 kg</span>
                    <span className="text-xs">Positive buoyancy</span>
                  </span>
                  <span className="flex flex-col items-center">
                    <span className="font-medium text-green-400">50 kg</span>
                    <span className="text-xs">Neutral buoyancy</span>
                  </span>
                  <span className="flex flex-col items-end">
                    <span className="font-medium">100 kg</span>
                    <span className="text-xs">Negative buoyancy</span>
                  </span>
                </div>
              </div>

              {/* Scientific Feedback */}
              <div className="glass-panel p-6 space-y-4 border-l-4 border-accent">
                <h3 className="font-display font-bold text-lg flex items-center gap-2">
                  <Info className="w-5 h-5 text-accent" />
                  Physics Analysis
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground leading-relaxed">
                    {weightValue < neutralZoneMin
                      ? `⬆️ Positive buoyancy detected. Upward force: ${Math.abs(buoyancyForce).toFixed(1)}N. The spacesuit's weight is insufficient to counteract the buoyant force. Add ${(neutralZoneMin - weightValue).toFixed(0)}kg to achieve neutral buoyancy.`
                      : weightValue > neutralZoneMax
                      ? `⬇️ Negative buoyancy detected. Downward force: ${Math.abs(buoyancyForce).toFixed(1)}N. The spacesuit exceeds neutral weight threshold. Remove ${(weightValue - neutralZoneMax).toFixed(0)}kg to stabilize.`
                      : `✓ Neutral buoyancy achieved! Forces balanced: Weight force (Fg) ≈ Buoyant force (Fb). The astronaut will maintain constant depth without external forces, perfectly simulating microgravity conditions in space.`}
                  </p>
                </div>

                {isNeutral && (
                  <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <Award className="w-5 h-5 text-green-400" />
                    <div className="flex-1">
                      <span className="font-bold text-green-400">Mission Success!</span>
                      <p className="text-xs text-green-400/80 mt-1">
                        Archimedes' Principle mastered: ρ_fluid × V × g = m × g
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Training Control Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setIsTraining(!isTraining);
                    if (!isTraining) setOxygenLevel(100);
                  }}
                  className={`w-full py-4 rounded-xl font-display font-bold transition-all shadow-lg ${
                    isTraining
                      ? "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white"
                      : "bg-gradient-to-r from-primary to-accent hover:scale-105 text-primary-foreground shadow-primary/50"
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" />
                    {isTraining ? "⏹ Stop Training Session" : "▶ Start Training Session"}
                  </span>
                </button>

                <button
                  onClick={() => (window.location.href = "/vr2")}
                  className="w-full py-4 rounded-xl font-display font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 transition-all shadow-lg shadow-purple-500/30 text-white group hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z" />
                    </svg>
                    Launch NBL Training Experience
                  </span>
                </button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Real NBL training sessions last 6+ hours underwater
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EVA Tasks */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <h2 className="font-display text-4xl font-bold mb-8">
          EVA Training <span className="gradient-text">Tasks</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tasks.map((task, index) => (
            <div
              key={task.id}
              className="glass-panel p-6 hover:bg-card/60 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    task.difficulty === "Easy"
                      ? "bg-green-500/20 text-green-400"
                      : task.difficulty === "Medium"
                      ? "bg-orange-500/20 text-orange-400"
                      : "bg-destructive/20 text-destructive"
                  }`}
                >
                  {task.difficulty}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{task.title}</h3>
              <p className="text-muted-foreground mb-4">Duration: {task.duration}</p>
              <button className="text-accent font-medium text-sm hover:underline">
                Start Task →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* === NEW: Learning Modules Section (lessons 6-10) === */}
      <section className="max-w-7xl mx-auto px-4 mb-20 mt-8">
        <h2 className="font-display text-4xl font-bold mb-8">
          Learning <span className="gradient-text">Modules</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className="glass-panel p-6 hover:bg-card/60 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{lesson.title}</h3>
              <p className="text-muted-foreground mb-4">{lesson.description}</p>
              <Button
                onClick={() => (window.location.href = `/lesson${lesson.id}`)}
                variant="outline"
                className="w-full"
              >
                Start Lesson →
              </Button>
            </div>
          ))}
        </div>
      </section>
      {/* === end new section === */}

      {/* Learning Section (existing — unchanged) */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="glass-panel p-12 space-y-6">
          <h2 className="font-display text-3xl font-bold">
            Understanding <span className="gradient-text">Neutral Buoyancy</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-muted-foreground">
            <div>
              <h3 className="font-display font-bold text-foreground mb-3">
                How It Works
              </h3>
              <p>
                The Neutral Buoyancy Laboratory uses a massive pool to simulate the weightless
                environment of space. By carefully adjusting weights on spacesuits, astronauts
                can achieve neutral buoyancy—neither floating nor sinking—mimicking the sensation
                of microgravity.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground mb-3">
                Real-World Applications
              </h3>
              <p>
                Beyond astronaut training, neutral buoyancy principles are applied in underwater
                robotics, medical rehabilitation, and studying fluid dynamics. This training method
                has enabled countless successful spacewalks and ISS maintenance missions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
