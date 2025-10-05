
import { Link } from "react-router-dom";
import { Globe, Waves, Gamepad2, Map, BookOpen, Rocket, Sparkles } from "lucide-react";
import earthFromISS from "@/assets/earth-from-iss.jpg";
import veyraLogo from "@/assets/veyra-logo.png";

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
      {/* Epic Hero Section - Redesigned */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Professional Meteor Shower */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="meteor-trail"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-destructive/10 dark:from-background dark:via-primary/5 dark:to-destructive/10 light:from-background light:via-primary/3 light:to-destructive/5" />
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/10 light:bg-primary/5 rounded-full blur-[200px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-destructive/15 dark:bg-destructive/15 light:bg-destructive/8 rounded-full blur-[180px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 dark:bg-accent/10 light:bg-accent/5 rounded-full blur-[150px] animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Earth backdrop - larger and more prominent */}
        <div className="absolute inset-0 flex items-center justify-end pr-0 pointer-events-none opacity-25">
          <img 
            src={earthFromISS} 
            alt="Earth from ISS" 
            className="w-[70%] h-[90%] object-cover object-left rounded-l-[4rem] animate-float shadow-2xl"
            style={{ 
              animationDuration: '8s',
              maskImage: 'linear-gradient(to left, transparent, black 30%)',
              WebkitMaskImage: 'linear-gradient(to left, transparent, black 30%)'
            }}
          />
        </div>
        
        {/* Main Content Grid */}
        <div className="relative z-20 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center py-20">
          {/* Left Column - Text Content */}
          <div className="space-y-10 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-destructive/30 bg-black/50 backdrop-blur-xl shadow-lg hover:border-destructive/50 transition-all animate-scale-in">
              <Sparkles className="w-5 h-5 text-destructive animate-pulse" />
              <span className="text-sm font-bold tracking-widest text-destructive uppercase">NASA Space Apps 2025</span>
            </div>

            {/* Main Title */}
            <div className="space-y-6 animate-fade-in">
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
                <span className="inline-block bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent drop-shadow-2xl">
                  VEYRA
                </span>
              </h1>
              
              <div className="space-y-2">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white dark:text-white light:text-foreground leading-tight">
                  Journey Beyond Earth
                </h2>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
                  <div className="h-2 w-2 rounded-full bg-destructive animate-pulse" />
                  <div className="h-1 w-16 bg-gradient-to-r from-accent to-destructive rounded-full" />
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/70 dark:text-white/70 light:text-foreground/70 max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Experience the International Space Station through immersive VR. From breathtaking Cupola views to realistic NBL training — discover how astronauts see and protect our planet.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/mission"
                className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-destructive to-red-600 font-display font-black text-xl text-white overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(252,61,33,0.6)] shadow-[0_0_30px_rgba(252,61,33,0.4)]"
              >
                <span className="relative flex items-center justify-center gap-3">
                  <Rocket className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                  Launch Mission
                </span>
              </Link>
              <Link
                to="/cupola"
                className="group relative px-10 py-5 rounded-2xl border-2 border-primary/50 bg-black/40 backdrop-blur-xl font-display font-black text-xl text-white hover:bg-primary/20 hover:border-primary hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all hover:scale-105"
              >
                <span className="relative flex items-center justify-center gap-3">
                  <Globe className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
                  Enter Cupola
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column - Orbital Visualization */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative w-[400px] h-[400px]">
              {/* Central Core - Veyra Logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-primary via-accent to-destructive p-1 animate-float shadow-2xl">
                  <div className="w-full h-full rounded-full bg-background/95 dark:bg-background/95 light:bg-card backdrop-blur-xl flex items-center justify-center overflow-hidden border-2 border-white/20 dark:border-white/20 light:border-primary/30">
                    <img 
                      src={veyraLogo} 
                      alt="Veyra Logo" 
                      className="w-20 h-20 object-contain animate-pulse"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-destructive blur-2xl opacity-60 dark:opacity-60 light:opacity-40 animate-glow-pulse" />
                <div className="absolute inset-0 rounded-full bg-primary blur-3xl opacity-30 dark:opacity-30 light:opacity-20 animate-ping" style={{ animationDuration: '3s' }} />
              </div>

              {/* Orbital Rings - Multiple layers with varied speeds */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 border-dashed animate-spin-slow" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-8 rounded-full border border-accent/20 border-dashed animate-spin-slow" style={{ animationDuration: '28s', animationDirection: 'reverse' }} />
              <div className="absolute inset-4 rounded-full border border-destructive/15 animate-spin-slow" style={{ animationDuration: '35s' }} />
              <div className="absolute inset-12 rounded-full border border-cyan-500/10 border-dotted animate-spin-slow" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />

              {/* Orbiting Mission Module Icons - Uniform & Harmonious */}
              {[
                { icon: Globe, color: 'from-primary to-cyan-500' },
                { icon: Waves, color: 'from-accent to-purple-500' },
                { icon: Gamepad2, color: 'from-destructive to-orange-500' },
                { icon: Map, color: 'from-cyan-500 to-primary' },
                { icon: BookOpen, color: 'from-purple-500 to-accent' },
                { icon: Rocket, color: 'from-primary to-accent' },
              ].map((item, index) => {
                const Icon = item.icon;
                
                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      animation: `orbit-${index} 24s linear infinite`,
                    }}
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl backdrop-blur-sm border-2 border-white/30 hover:scale-125 hover:rotate-12 transition-all duration-500 relative group cursor-pointer`}
                    >
                      <Icon className="w-8 h-8 text-white relative z-10 drop-shadow-2xl" />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-500`} />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} blur-2xl opacity-40`} style={{ animation: 'glow-pulse 3s ease-in-out infinite', animationDelay: `${index * 0.5}s` }} />
                    </div>
                  </div>
                );
              })}

              {/* Enhanced Glowing particles */}
              {[...Array(16)].map((_, i) => (
                <div
                  key={`particle-${i}`}
                  className="absolute rounded-full animate-float"
                  style={{
                    width: `${2 + Math.random() * 3}px`,
                    height: `${2 + Math.random() * 3}px`,
                    background: i % 3 === 0 ? 'hsl(var(--primary))' : i % 3 === 1 ? 'hsl(var(--accent))' : 'hsl(var(--destructive))',
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${3 + Math.random() * 3}s`,
                    opacity: 0.4 + Math.random() * 0.4,
                    boxShadow: `0 0 ${10 + Math.random() * 10}px currentColor`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] opacity-30 dark:opacity-30 light:opacity-15 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-t from-primary/30 via-accent/20 to-transparent blur-3xl" />
        </div>
      </section>

      {/* Experiences Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 space-y-4">
            <h2 className="font-display text-5xl md:text-7xl font-black tracking-tight">
              <span className="text-white dark:text-white light:text-foreground">Mission </span>
              <span className="bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">Modules</span>
            </h2>
            <p className="text-xl text-white/60 dark:text-white/60 light:text-foreground/60 max-w-2xl mx-auto">
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
                    <h3 className="font-display text-2xl font-bold mb-3 text-white dark:text-white light:text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 dark:text-white/60 light:text-foreground/70 mb-6 leading-relaxed">
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
          <div className="absolute inset-0 bg-gradient-to-r from-destructive/5 via-primary/5 to-destructive/5 dark:from-destructive/5 dark:via-primary/5 dark:to-destructive/5 light:from-destructive/3 light:via-primary/3 light:to-destructive/3 rounded-[4rem] blur-3xl" />
          
          <div className="relative bg-black/60 dark:bg-black/60 light:bg-card/80 backdrop-blur-xl border border-white/10 dark:border-white/10 light:border-border/40 rounded-[3rem] p-16">
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
                    {stat.suffix && <span className="text-2xl text-white/40 dark:text-white/40 light:text-foreground/40 ml-2">{stat.suffix}</span>}
                  </div>
                  <div className="text-sm md:text-base text-white/50 dark:text-white/50 light:text-foreground/60 font-semibold tracking-wider">
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
