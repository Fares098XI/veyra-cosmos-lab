import { BookOpen, FileText, Newspaper, Upload } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Research() {
  const [activeSection, setActiveSection] = useState<"papers" | "journals" | "contributions">("papers");

  const paperPlaceholders = [
    { title: "Climate Change and Orbital Observations", category: "Earth Science", date: "2025" },
    { title: "ISS Structural Analysis and Maintenance", category: "Engineering", date: "2025" },
    { title: "Microgravity Effects on Human Physiology", category: "Biology", date: "2025" },
    { title: "Advanced Robotics in Space Operations", category: "Technology", date: "2025" },
  ];

  const journalPlaceholders = [
    { title: "Astronaut Training Journal - Day 45", author: "Mission Specialist", date: "March 2025" },
    { title: "Cupola Observations: Earth from Above", author: "ISS Commander", date: "February 2025" },
    { title: "NBL Training Notes: Preparing for EVA", author: "Training Lead", date: "January 2025" },
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
          Explore research papers, journals, and contribute to our growing knowledge base
        </p>
      </section>

      {/* Section Navigation */}
      <section className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            onClick={() => setActiveSection("papers")}
            variant={activeSection === "papers" ? "default" : "outline"}
            className="gap-2"
          >
            <FileText className="w-4 h-4" />
            Research Papers
          </Button>
          <Button
            onClick={() => setActiveSection("journals")}
            variant={activeSection === "journals" ? "default" : "outline"}
            className="gap-2"
          >
            <Newspaper className="w-4 h-4" />
            Journals
          </Button>
          <Button
            onClick={() => setActiveSection("contributions")}
            variant={activeSection === "contributions" ? "default" : "outline"}
            className="gap-2"
          >
            <Upload className="w-4 h-4" />
            Add Contribution
          </Button>
        </div>
      </section>

      {/* Research Papers Section */}
      {activeSection === "papers" && (
        <section className="max-w-7xl mx-auto px-4 animate-fade-in">
          <h2 className="font-display text-4xl font-bold mb-8">
            Research <span className="gradient-text">Papers</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paperPlaceholders.map((paper, index) => (
              <div
                key={index}
                className="glass-panel p-8 space-y-4 animate-fade-in hover:bg-card/60 transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-xl bg-card/60 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold">{paper.title}</h3>
                <div className="flex gap-2">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent/20 text-accent">
                    {paper.category}
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-card/60 text-muted-foreground">
                    {paper.date}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Coming soon...</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Journals Section */}
      {activeSection === "journals" && (
        <section className="max-w-7xl mx-auto px-4 animate-fade-in">
          <h2 className="font-display text-4xl font-bold mb-8">
            Astronaut <span className="gradient-text">Journals</span>
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {journalPlaceholders.map((journal, index) => (
              <div
                key={index}
                className="glass-panel p-8 space-y-4 animate-fade-in hover:bg-card/60 transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-card/60 flex items-center justify-center flex-shrink-0">
                    <Newspaper className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold mb-2">{journal.title}</h3>
                    <div className="flex gap-2 text-sm text-muted-foreground mb-3">
                      <span>By {journal.author}</span>
                      <span>•</span>
                      <span>{journal.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Entry preview coming soon...</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contributions Section */}
      {activeSection === "contributions" && (
        <section className="max-w-4xl mx-auto px-4 animate-fade-in">
          <h2 className="font-display text-4xl font-bold mb-8">
            Share Your <span className="gradient-text">Contribution</span>
          </h2>

          <div className="glass-panel p-8 space-y-6">
            <p className="text-muted-foreground">
              Contribute to our knowledge base by submitting research papers, journals, or photos related to space exploration and Earth observation.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Contribution Type</label>
                <select className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:ring-2 focus:ring-accent">
                  <option>Research Paper</option>
                  <option>Journal Entry</option>
                  <option>Photo Gallery</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  placeholder="Enter title..."
                  className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  placeholder="Describe your contribution..."
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Upload Files</label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent transition-all cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground mt-2">PDF, DOCX, JPG, PNG up to 10MB</p>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Submit Contribution
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
