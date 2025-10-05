import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import veyraLogo from "@/assets/veyra-logo.png";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { name: "Home", path: "/" },
  { name: "Cupola", path: "/cupola" },
  { name: "NBL", path: "/nbl" },
  { name: "Games", path: "/games" },
  { name: "Map", path: "/map" },
  { name: "Blog", path: "/research" },
  { name: "Powerfull Tools", path: "/tools"},
  { name: "Progress", path: "/mission" },
  { name: "About", path: "/about" },
   

];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-black dark:bg-black light:bg-background">
      {/* Starfield background with meteors */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Space background */}
        <div className="absolute inset-0 bg-black dark:bg-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background/0 light:from-background/80 light:via-background/60 light:to-background/80" />
        
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(200)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute bg-white dark:bg-white light:bg-primary/40 rounded-full"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2,
                animation: `pulse ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        
        {/* Professional Meteor System */}
        <div className="absolute inset-0 pointer-events-none opacity-100 dark:opacity-100 light:opacity-30">
          {[...Array(15)].map((_, i) => {
            const meteorTypes = [
              { 
                color1: '#ffffff', color2: '#e0f2ff', color3: 'rgba(255,255,255,0)',
                glow: 'rgba(255,255,255,0.8)', size: 'large', speed: 'fast'
              },
              { 
                color1: '#60a5fa', color2: '#3b82f6', color3: 'rgba(59,130,246,0)',
                glow: 'rgba(96,165,250,0.9)', size: 'medium', speed: 'medium'
              },
              { 
                color1: '#ef4444', color2: '#dc2626', color3: 'rgba(239,68,68,0)',
                glow: 'rgba(239,68,68,0.8)', size: 'small', speed: 'slow'
              },
            ];
            const type = meteorTypes[i % 3];
            const sizeMap = { small: 2, medium: 3, large: 4 };
            const width = sizeMap[type.size as keyof typeof sizeMap];
            const length = type.size === 'large' ? 180 : type.size === 'medium' ? 140 : 100;
            const speedMap = { fast: 2.5, medium: 3.5, slow: 4.5 };
            const duration = speedMap[type.speed as keyof typeof speedMap];
            
            return (
              <div 
                key={`meteor-${i}`} 
                className="absolute animate-meteor-pro"
                style={{
                  top: `${Math.random() * -30}%`,
                  left: `${5 + Math.random() * 90}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${duration + Math.random() * 1.5}s`,
                  transform: `rotate(${-35 + Math.random() * 10}deg)`,
                }}
              >
                <div 
                  className="relative"
                  style={{
                    width: `${width}px`,
                    height: `${length}px`,
                    background: `linear-gradient(to bottom, ${type.color1} 0%, ${type.color2} 15%, ${type.color3} 100%)`,
                    boxShadow: `
                      0 0 ${width * 4}px ${type.glow},
                      0 0 ${width * 8}px ${type.glow},
                      0 0 ${width * 12}px ${type.glow}
                    `,
                    borderRadius: '50% 50% 0 0',
                    filter: 'blur(0.5px)',
                  }}
                >
                  <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full animate-pulse"
                    style={{
                      width: `${width * 2.5}px`,
                      height: `${width * 2.5}px`,
                      background: `radial-gradient(circle, ${type.color1} 0%, ${type.color2} 40%, transparent 70%)`,
                      boxShadow: `0 0 ${width * 6}px ${type.glow}`,
                    }}
                  />
                  {[...Array(5)].map((_, j) => (
                    <div
                      key={`particle-${j}`}
                      className="absolute left-1/2 -translate-x-1/2 rounded-full"
                      style={{
                        width: `${width * 0.6}px`,
                        height: `${width * 0.6}px`,
                        top: `${20 + j * 15}%`,
                        background: type.color2,
                        opacity: 1 - (j * 0.15),
                        boxShadow: `0 0 ${width * 2}px ${type.glow}`,
                      }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Accent glows */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-destructive/10 dark:bg-destructive/10 light:bg-destructive/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary/15 dark:bg-primary/15 light:bg-primary/8 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 glass-panel mx-4 mt-4 lg:mx-8">
        <div className="flex items-center justify-between p-4 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary via-accent to-destructive p-1 flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <div className="w-full h-full rounded-xl bg-background/95 flex items-center justify-center overflow-hidden border border-white/20">
                  <img 
                    src={veyraLogo} 
                    alt="Veyra Logo" 
                    className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-destructive blur-xl opacity-0 group-hover:opacity-70 transition-all duration-300" />
            </div>
            <div>
              <div className="font-display text-2xl font-extrabold bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
                VEYRA
              </div>
              <div className="text-xs font-medium text-muted-foreground tracking-wider">Space Exploration Hub</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-all hover:text-accent ${
                    isActive ? "text-accent" : "text-foreground/80"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <ThemeToggle />
            <Link
              to="/mission"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent font-medium text-sm neon-glow"
            >
              Launch Experience
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg glass-panel"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border/50 p-4 animate-slide-in-right">
            <div className="flex flex-col gap-3">
              {navigation.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      isActive
                        ? "bg-accent/20 text-accent"
                        : "hover:bg-card/60 text-foreground/80"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="flex items-center justify-center pt-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className="relative z-10">{children}</main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 border-t border-border/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Veyra by AstroVista. Built for NASA Space Apps Challenge.
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <Link to="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
            <a
              href="https://www.spaceappschallenge.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              NASA Space Apps
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
