import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative group p-2 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
      
      {/* Icon container with rotation animation */}
      <div className="relative w-6 h-6 flex items-center justify-center">
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-primary group-hover:text-accent transition-all duration-300 group-hover:rotate-180" />
        ) : (
          <Moon className="w-5 h-5 text-primary group-hover:text-accent transition-all duration-300 group-hover:-rotate-12" />
        )}
      </div>
      
      {/* Tooltip */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-card border border-border text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </div>
    </button>
  );
}
