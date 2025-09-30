import { Link, useLocation } from "react-router-dom";
import { Menu, X, Rocket } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Home", path: "/" },
  { name: "Cupola", path: "/cupola" },
  { name: "NBL", path: "/nbl" },
  { name: "Games", path: "/games" },
  { name: "Map", path: "/map" },
  { name: "Research", path: "/research" },
  { name: "Mission", path: "/mission" },
  { name: "About", path: "/about" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="relative min-h-screen">
      {/* Starfield background */}
      <div className="starfield fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(107,70,255,0.1),transparent_50%)]" />
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-50 glass-panel mx-4 mt-4 lg:mx-8">
        <div className="flex items-center justify-between p-4 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center neon-glow">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-display text-xl font-bold gradient-text">Veyra</div>
              <div className="text-xs text-muted-foreground">by AstroVista</div>
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
