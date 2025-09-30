import { Gamepad2, Camera, Waves, Brain, Trophy, Star } from "lucide-react";

export default function Games() {
  const games = [
    {
      icon: Camera,
      title: "Cupola Photo Challenge",
      description: "Identify Earth features from ISS photographs",
      color: "from-primary to-cyan-500",
      difficulty: "Easy",
      players: "1.2k+",
    },
    {
      icon: Waves,
      title: "NBL Balance Master",
      description: "Master neutral buoyancy in timed challenges",
      color: "from-accent to-purple-500",
      difficulty: "Medium",
      players: "856",
    },
    {
      icon: Brain,
      title: "Quick Quiz Decks",
      description: "Test your space science knowledge",
      color: "from-cyan-500 to-primary",
      difficulty: "Easy",
      players: "2.5k+",
    },
    {
      icon: Star,
      title: "Mission Command",
      description: "Coordinate ISS operations in real-time",
      color: "from-destructive to-orange-500",
      difficulty: "Hard",
      players: "432",
    },
  ];

  const achievements = [
    { name: "First Steps", description: "Complete your first game", icon: "🎯" },
    { name: "Eagle Eye", description: "Perfect score in Photo Challenge", icon: "👁️" },
    { name: "Floating Expert", description: "Master all NBL tasks", icon: "🚀" },
    { name: "Quiz Champion", description: "Ace 10 quiz decks", icon: "🏆" },
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
          Learn through play with interactive space challenges and compete with learners worldwide
        </p>
      </section>

      {/* Games Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {games.map((game, index) => {
            const Icon = game.icon;
            return (
              <div
                key={index}
                className="group glass-panel p-8 hover:bg-card/60 transition-all cursor-pointer animate-fade-in"
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
                    <span className="text-sm text-muted-foreground">{game.players} players</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold mb-3">{game.title}</h3>
                <p className="text-muted-foreground mb-6">{game.description}</p>

                <button className="w-full py-3 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 border border-accent/30 font-medium hover:bg-accent/30 transition-colors group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100 transition-all">
                  Play Now →
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <h2 className="font-display text-4xl font-bold mb-8">
          Global <span className="gradient-text">Leaderboard</span>
        </h2>

        <div className="glass-panel p-8">
          <div className="space-y-4">
            {[
              { rank: 1, name: "AstroAce_42", score: 9850, badge: "🥇" },
              { rank: 2, name: "SpaceExplorer", score: 9420, badge: "🥈" },
              { rank: 3, name: "CosmicLearner", score: 8990, badge: "🥉" },
              { rank: 4, name: "StarGazer_99", score: 8650, badge: "" },
              { rank: 5, name: "MissionControl", score: 8320, badge: "" },
            ].map((player) => (
              <div
                key={player.rank}
                className="flex items-center justify-between p-4 rounded-lg bg-card/40 hover:bg-card/60 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold w-8">{player.badge || player.rank}</span>
                  <div>
                    <div className="font-display font-bold">{player.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {player.score.toLocaleString()} points
                    </div>
                  </div>
                </div>
                <Trophy className="w-5 h-5 text-accent" />
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/30 text-center">
            <p className="text-sm">
              Your Rank: <span className="font-bold text-accent">#156</span> • Keep playing to
              climb the leaderboard!
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="font-display text-4xl font-bold mb-8">
          Unlock <span className="gradient-text">Achievements</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass-panel p-6 text-center hover:bg-card/60 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4">{achievement.icon}</div>
              <h3 className="font-display font-bold mb-2">{achievement.name}</h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
