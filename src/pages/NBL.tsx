import { useState } from "react";
import { Waves, Info, Play, Award } from "lucide-react";
import nblTraining from "@/assets/nbl-training.jpg";

export default function NBL() {
  const [weightValue, setWeightValue] = useState(50);
  const [isTraining, setIsTraining] = useState(false);

  const tasks = [
    { id: 1, title: "Panel Alignment", duration: "3 min", difficulty: "Easy" },
    { id: 2, title: "Rail Navigation", duration: "5 min", difficulty: "Medium" },
    { id: 3, title: "Tool Handling", duration: "8 min", difficulty: "Hard" },
  ];

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
          <div className="flex items-center justify-between">
            <h2 className="font-display text-3xl font-bold">Buoyancy Control Simulator</h2>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass-panel">
              <Info className="w-4 h-4 text-accent" />
              <span className="text-sm">Adjust weight to achieve neutral buoyancy</span>
            </div>
          </div>

          {/* Simulation Area */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Visual Simulation */}
            <div className="relative aspect-square bg-gradient-to-b from-cyan-900/20 to-cyan-600/20 rounded-xl border border-cyan-500/30 overflow-hidden">
              {/* Water Effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.2),transparent_70%)]" />

              {/* Astronaut Avatar */}
              <div
                className="absolute w-24 h-32 left-1/2 -translate-x-1/2 transition-all duration-1000 ease-out"
                style={{
                  top: `${100 - weightValue}%`,
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg relative">
                  <div className="absolute inset-2 bg-gradient-to-br from-gray-100 to-gray-300 rounded-md" />
                  {/* Helmet */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-cyan-400/30 rounded-full border-2 border-cyan-400/50" />
                </div>
                {/* Bubbles */}
                {isTraining &&
                  [...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white/50 rounded-full animate-float"
                      style={{
                        left: `${20 + i * 30}%`,
                        bottom: "100%",
                        animationDelay: `${i * 0.3}s`,
                      }}
                    />
                  ))}
              </div>

              {/* Zone Indicators */}
              <div className="absolute top-4 left-4 right-4 flex justify-between text-xs">
                <span className="text-red-400">Surface</span>
                <span className="text-green-400">Neutral Zone</span>
                <span className="text-blue-400">Bottom</span>
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-6">
              <div className="space-y-4">
                <label className="block font-display font-bold text-lg">
                  Weight Adjustment: {weightValue}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={weightValue}
                  onChange={(e) => setWeightValue(Number(e.target.value))}
                  className="w-full h-2 bg-card rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Floats</span>
                  <span>Neutral</span>
                  <span>Sinks</span>
                </div>
              </div>

              {/* Feedback */}
              <div className="glass-panel p-6 space-y-3">
                <h3 className="font-display font-bold text-lg">AI Coach Feedback</h3>
                <p className="text-muted-foreground">
                  {weightValue < 45
                    ? "Too light! You're floating upward. Add more weight."
                    : weightValue > 55
                    ? "Too heavy! You're sinking. Remove some weight."
                    : "Perfect! You've achieved neutral buoyancy. Great job!"}
                </p>
                {weightValue >= 45 && weightValue <= 55 && (
                  <div className="flex items-center gap-2 text-green-400">
                    <Award className="w-5 h-5" />
                    <span className="font-medium">Neutral Buoyancy Achieved!</span>
                  </div>
                )}
              </div>

              {/* Training Button */}
              <button
                onClick={() => setIsTraining(!isTraining)}
                className={`w-full py-4 rounded-xl font-display font-bold transition-all ${
                  isTraining
                    ? "bg-destructive/20 text-destructive hover:bg-destructive/30"
                    : "bg-gradient-to-r from-primary to-accent neon-glow hover:scale-105"
                }`}
              >
                {isTraining ? "Stop Training" : "Start Training Session"}
              </button>
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

      {/* Learning Section */}
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
