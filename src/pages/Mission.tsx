import { Rocket, Award, Target, TrendingUp, Bot } from "lucide-react";
import { Link } from "react-router-dom";

export default function Mission() {
  const achievements = [
    { name: "First Launch", icon: "🚀", unlocked: true },
    { name: "Cupola Explorer", icon: "🔭", unlocked: true },
    { name: "NBL Graduate", icon: "🌊", unlocked: false },
    { name: "Quiz Master", icon: "🧠", unlocked: true },
    { name: "Research Scholar", icon: "📚", unlocked: false },
    { name: "Mission Complete", icon: "🏆", unlocked: false },
  ];

  const missions = [
    {
      title: "Earth Observation Challenge",
      description: "Complete 3 Cupola viewing sessions",
      progress: 66,
      reward: "Cupola Expert Badge",
      link: "/cupola",
    },
    {
      title: "Zero-G Training",
      description: "Master all NBL training tasks",
      progress: 33,
      reward: "Astronaut Trainee Certificate",
      link: "/nbl",
    },
    {
      title: "Climate Detective",
      description: "Analyze 5 AI-powered Earth insights",
      progress: 80,
      reward: "Earth Guardian Badge",
      link: "/map",
    },
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 text-center mb-20 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium mb-6">
          <Rocket className="w-4 h-4 text-accent" />
          <span>Your Learning Hub</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
          Mission <span className="gradient-text">Control</span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Track your learning journey, unlock achievements, and complete missions
        </p>
      </section>

      {/* Stats Overview */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Missions Completed", value: "3", icon: Target },
            { label: "Total Score", value: "2,450", icon: TrendingUp },
            { label: "Badges Earned", value: "8", icon: Award },
            { label: "Learning Streak", value: "7 days", icon: Rocket },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass-panel p-6 text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                <div className="font-display text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Active Missions */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <h2 className="font-display text-4xl font-bold mb-8">
          Active <span className="gradient-text">Missions</span>
        </h2>

        <div className="space-y-6">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="glass-panel p-6 hover:bg-card/60 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">{mission.title}</h3>
                  <p className="text-sm text-muted-foreground">{mission.description}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent/20 text-accent">
                  {mission.progress}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full h-2 bg-card rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                    style={{ width: `${mission.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Reward: {mission.reward}
                </span>
                <Link to={mission.link} className="text-accent font-medium text-sm hover:underline">
                  Continue →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <h2 className="font-display text-4xl font-bold mb-8">
          Your <span className="gradient-text">Achievements</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`glass-panel p-6 text-center transition-all animate-fade-in ${
                achievement.unlocked
                  ? "hover:bg-card/60"
                  : "opacity-40 grayscale"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-4xl mb-3">{achievement.icon}</div>
              <div className="text-sm font-bold">{achievement.name}</div>
              {achievement.unlocked && (
                <div className="mt-2 text-xs text-accent">✓ Unlocked</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* AI Assistant */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="glass-panel p-12 text-center space-y-6 bg-gradient-to-br from-primary/10 to-accent/10">
          <Bot className="w-16 h-16 mx-auto text-accent animate-float" />
          <h2 className="font-display text-3xl font-bold">
            Your Mission <span className="gradient-text">AI Assistant</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get personalized mission recommendations and learning guidance from your AI companion
          </p>
        </div>
      </section>
    </div>
  );
}
