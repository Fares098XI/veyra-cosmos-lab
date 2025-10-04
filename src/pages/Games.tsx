import { Gamepad2, Camera, Waves } from "lucide-react";

export default function Games() {
  const games = [
    {
      icon: Camera,
      title: "Cupola Photo Challenge",
      description: "Identify Earth features from ISS photographs - Coming Soon",
      color: "from-primary to-cyan-500",
      difficulty: "Easy",
      players: "Coming Soon",
    },
    {
      icon: Waves,
      title: "NBL Balance Master",
      description: "Master neutral buoyancy in timed challenges - Coming Soon",
      color: "from-accent to-purple-500",
      difficulty: "Medium",
      players: "Coming Soon",
    },
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 text-center mb-20 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium mb-6">
          <Gamepad2 className="w-4 h-4 text-accent" />
          <span>Interactive Learning</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">Gamified</span> Experiences
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Learn through play with interactive space challenges
        </p>
      </section>

      {/* Games Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {games.map((game, index) => {
            const Icon = game.icon;
            return (
              <div
                key={index}
                className="group glass-panel p-8 hover:bg-card/60 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${game.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        game.difficulty === "Easy"
                          ? "bg-green-500/20 text-green-400"
                          : game.difficulty === "Medium"
                          ? "bg-orange-500/20 text-orange-400"
                          : "bg-destructive/20 text-destructive"
                      }`}
                    >
                      {game.difficulty}
                    </span>
                    <span className="text-sm text-muted-foreground">{game.players}</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold mb-3">{game.title}</h3>
                <p className="text-muted-foreground mb-6">{game.description}</p>

                <button className="w-full py-3 rounded-lg bg-primary hover:bg-primary/90 font-medium transition-colors">
                  Launch Game
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
