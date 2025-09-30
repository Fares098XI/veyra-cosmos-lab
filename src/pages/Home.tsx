import { Link } from "react-router-dom";
import { Globe as GlobeIcon, Waves, Gamepad2, Map, BookOpen, Rocket, Sparkles } from "lucide-react";
import earthFromISS from "@/assets/earth-from-iss.jpg";
import Globe from "@/components/Globe";

export default function Home() {
  const features = [
    {
      icon: GlobeIcon,
      title: "Cupola VR",
      description: "Experience Earth observation from the ISS Cupola window",
      path: "/cupola",
      color: "from-primary to-cyan-500",
    },
    {
      icon: Waves,
      title: "NBL Simulation",
      description: "Train like astronauts in the Neutral Buoyancy Lab",
      path: "/nbl",
      color: "from-accent to-purple-500",
    },
    {
      icon: Gamepad2,
      title: "Interactive Games",
      description: "Learn through gamified space experiences",
      path: "/games",
      color: "from-destructive to-orange-500",
    },
    {
      icon: Map,
      title: "Earth Intelligence",
      description: "Explore real-time data with AI-powered insights",
      path: "/map",
      color: "from-cyan-500 to-primary",
    },
    {
      icon: BookOpen,
      title: "Research Library",
      description: "Access discoveries and space research papers",
      path: "/research",
      color: "from-purple-500 to-accent",
    },
    {
      icon: Rocket,
      title: "Mission Control",
      description: "Track your learning journey and achievements",
      path: "/mission",
      color: "from-primary to-accent",
    },
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 animate-fade-in">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
          <img
            src={earthFromISS}
            alt="Earth from ISS Cupola"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>

        {/* Hero Content */}
        <div className="max-w-5xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium mb-4 animate-glow-pulse">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>NASA Space Apps Challenge 2025</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="gradient-text">Veyra</span>
          </h1>

          <p className="font-display text-2xl md:text-4xl font-bold text-foreground/90">
            Experience the ISS Like Never Before
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            From Cupola views to NBL weightlessness — learn how space helps Earth through
            immersive VR concept demos, AI insights, and interactive experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              to="/mission"
              className="px-8 py-4 rounded-xl bg-destructive font-display font-bold text-lg text-white shadow-[0_0_30px_rgba(252,61,33,0.5)] hover:shadow-[0_0_50px_rgba(252,61,33,0.7)] hover:scale-105 transition-all"
            >
              Launch Experience
            </Link>
            <Link
              to="/cupola"
              className="px-8 py-4 rounded-xl glass-panel font-display font-bold text-lg hover:bg-card/60 transition-all"
            >
              Explore Cupola
            </Link>
          </div>
        </div>

        {/* Interactive 3D Globe */}
        <div className="mt-16">
          <Globe />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
            Two Sensory <span className="gradient-text">Experiences</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Immerse yourself in the ISS through sight and weightlessness simulations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.path}
                  to={feature.path}
                  className="group glass-panel p-6 hover:bg-card/60 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <div className="mt-4 text-accent text-sm font-medium group-hover:translate-x-2 transition-transform inline-block">
                    Explore →
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto glass-panel p-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2", label: "Sensory Experiences" },
              { value: "5+", label: "Interactive Modules" },
              { value: "∞", label: "Learning Possibilities" },
              { value: "1", label: "Incredible Journey" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="font-display text-4xl md:text-5xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
