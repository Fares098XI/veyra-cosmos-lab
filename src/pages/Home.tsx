import { Link } from "react-router-dom";
import { Globe, Waves, Gamepad2, Map, BookOpen, Rocket, Sparkles } from "lucide-react";
import earthFromISS from "@/assets/earth-from-iss.jpg";

export default function Home() {
  const features = [
    {
      icon: Globe,
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
    <div className="relative">
      {/* Epic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto text-center space-y-12 py-20 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-destructive/30 bg-black/40 backdrop-blur-sm animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <Sparkles className="w-5 h-5 text-destructive" />
            <span className="text-sm font-semibold tracking-wide text-destructive">NASA SPACE APPS CHALLENGE 2025</span>
          </div>

          {/* Main Title */}
          <div className="space-y-6 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <h1 className="font-display text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter">
              <span className="inline-block bg-gradient-to-r from-white via-primary to-destructive bg-clip-text text-transparent">
                VEYRA
              </span>
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-destructive to-transparent" />
          </div>

          {/* Subtitle */}
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white/90 tracking-tight max-w-5xl mx-auto leading-tight animate-scale-in" style={{ animationDelay: '0.6s' }}>
            Journey Beyond Earth
            <br />
            <span className="text-primary">Experience the ISS</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed animate-scale-in" style={{ animationDelay: '0.8s' }}>
            Step into the International Space Station through immersive VR experiences.
            From the breathtaking Cupola views to weightless NBL training —
            discover how astronauts see and help our planet.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-scale-in" style={{ animationDelay: '1s' }}>
            <Link
              to="/mission"
              className="group relative px-12 py-5 rounded-2xl bg-destructive font-display font-bold text-xl text-white overflow-hidden transition-all hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-destructive to-red-600 transition-transform group-hover:scale-110" />
              <span className="relative flex items-center gap-3">
                <Rocket className="w-6 h-6" />
                Launch Mission
              </span>
              <div className="absolute inset-0 shadow-[0_0_40px_rgba(252,61,33,0.6)] group-hover:shadow-[0_0_60px_rgba(252,61,33,0.8)] transition-all" />
            </Link>
            <Link
              to="/cupola"
              className="group px-12 py-5 rounded-2xl border-2 border-primary/50 bg-black/40 backdrop-blur-sm font-display font-bold text-xl text-white hover:bg-primary/10 hover:border-primary transition-all hover:scale-105"
            >
              <span className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-primary" />
                Enter Cupola
              </span>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-20 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto relative">
              <div className="w-1.5 h-3 bg-white/50 rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Floating ISS silhouette or station graphic */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-t from-primary/30 to-transparent blur-3xl" />
        </div>
      </section>

      {/* Experiences Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 space-y-4">
            <h2 className="font-display text-5xl md:text-7xl font-black tracking-tight">
              <span className="text-white">Mission </span>
              <span className="bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">Modules</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Six immersive experiences designed to bring you closer to space exploration
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.path}
                  to={feature.path}
                  className="group relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover:scale-105 animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-transparent group-hover:to-destructive/10 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 relative inline-block">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                      <span>Explore</span>
                      <span className="text-xl">→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-destructive/5 via-primary/5 to-destructive/5 rounded-[4rem] blur-3xl" />
          
          <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-[3rem] p-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { value: "408", label: "KM ABOVE EARTH", suffix: "" },
                { value: "90", label: "MINUTE ORBIT", suffix: "min" },
                { value: "16", label: "SUNRISES DAILY", suffix: "" },
                { value: "6", label: "MISSION MODULES", suffix: "" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center space-y-4 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="font-display text-5xl md:text-7xl font-black">
                    <span className="bg-gradient-to-r from-white via-primary to-destructive bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    {stat.suffix && <span className="text-2xl text-white/40 ml-2">{stat.suffix}</span>}
                  </div>
                  <div className="text-sm md:text-base text-white/50 font-semibold tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
