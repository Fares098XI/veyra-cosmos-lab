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
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-destructive/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto text-center space-y-16 py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-destructive/40 bg-black/60 backdrop-blur-xl shadow-2xl hover:border-destructive/60 transition-all hover:scale-105" style={{ animationDelay: '0.2s' }}>
            <Sparkles className="w-6 h-6 text-destructive animate-pulse" />
            <span className="text-base font-bold tracking-widest text-destructive uppercase">NASA Space Apps Challenge 2025</span>
          </div>

          {/* Main Title with enhanced styling */}
          <div className="space-y-8" style={{ animationDelay: '0.4s' }}>
            <h1 className="font-display text-8xl md:text-[10rem] lg:text-[14rem] font-black tracking-tighter leading-none">
              <span className="inline-block bg-gradient-to-r from-white via-primary via-accent to-destructive bg-clip-text text-transparent animate-scale-in drop-shadow-2xl">
                VEYRA
              </span>
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-primary rounded-full" />
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <div className="h-1 w-24 bg-gradient-to-r from-destructive to-transparent rounded-full" />
            </div>
          </div>

          {/* Subtitle with better hierarchy */}
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-6xl mx-auto leading-tight" style={{ animationDelay: '0.6s' }}>
            Journey Beyond Earth
            <br />
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent">
              Experience the ISS
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light" style={{ animationDelay: '0.8s' }}>
            Step into the International Space Station through immersive VR experiences.
            From breathtaking Cupola views to weightless NBL training —
            discover how astronauts see and help our planet.
          </p>

          {/* CTA Buttons with enhanced design */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-12" style={{ animationDelay: '1s' }}>
            <Link
              to="/mission"
              className="group relative px-14 py-6 rounded-2xl bg-gradient-to-r from-destructive via-red-600 to-destructive font-display font-black text-2xl text-white overflow-hidden transition-all hover:scale-110 hover:shadow-[0_0_80px_rgba(252,61,33,0.8)] shadow-[0_0_40px_rgba(252,61,33,0.5)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-destructive transition-transform group-hover:scale-110" />
              <span className="relative flex items-center justify-center gap-4">
                <Rocket className="w-7 h-7 group-hover:translate-y-[-4px] transition-transform" />
                Launch Mission
              </span>
            </Link>
            <Link
              to="/cupola"
              className="group relative px-14 py-6 rounded-2xl border-3 border-primary/60 bg-black/50 backdrop-blur-xl font-display font-black text-2xl text-white hover:bg-primary/20 hover:border-primary hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] transition-all hover:scale-110 shadow-xl"
            >
              <span className="relative flex items-center justify-center gap-4">
                <Globe className="w-7 h-7 text-primary group-hover:rotate-12 transition-transform" />
                Enter Cupola
              </span>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-24 animate-bounce">
            <div className="w-7 h-12 border-3 border-white/40 rounded-full mx-auto relative hover:border-primary transition-colors">
              <div className="w-2 h-4 bg-gradient-to-b from-white to-primary rounded-full absolute top-3 left-1/2 -translate-x-1/2 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Enhanced floating glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-t from-primary/40 via-accent/30 to-transparent blur-3xl" />
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
