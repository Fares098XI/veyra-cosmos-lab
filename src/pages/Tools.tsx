import { BookOpen } from "lucide-react";

export default function Research() {
  const paperPlaceholders = [
    {
      title: "Research Paper Title - Coming Soon",
      category: "Placeholder",
      date: "2025",
    },
    {
      title: "Research Paper Title - Coming Soon",
      category: "Placeholder",
      date: "2025",
    },
    {
      title: "Research Paper Title - Coming Soon",
      category: "Placeholder",
      date: "2025",
    },
    {
      title: "Research Paper Title - Coming Soon",
      category: "Placeholder",
      date: "2025",
    },
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 text-center mb-20 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium mb-6">
          <BookOpen className="w-4 h-4 text-accent" />
          <span>Knowledge Hub</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
          Research & <span className="gradient-text">Discoveries</span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Research papers and discoveries coming soon
        </p>
      </section>

      {/* Research Paper Placeholders */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="font-display text-4xl font-bold mb-8">
          Research <span className="gradient-text">Papers</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paperPlaceholders.map((paper, index) => (
            <div
              key={index}
              className="glass-panel p-8 text-center space-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto rounded-xl bg-card/60 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-muted-foreground">{paper.title}</h3>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-card/60 text-muted-foreground">
                {paper.category}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
