import { BookOpen, Download, ExternalLink, Search } from "lucide-react";

export default function Research() {
  const papers = [
    {
      title: "Earth Observation from ISS: Climate Change Applications",
      authors: "Dr. Sarah Chen, Dr. Michael Rodriguez",
      date: "2024",
      category: "Climate Science",
      abstract: "Comprehensive analysis of ISS-based Earth observation techniques and their applications in climate change monitoring...",
    },
    {
      title: "Neutral Buoyancy Training: Preparing for EVA Operations",
      authors: "Dr. James Williams, Dr. Emily Parker",
      date: "2023",
      category: "Astronaut Training",
      abstract: "Detailed study of NBL training protocols and their effectiveness in preparing astronauts for spacewalk missions...",
    },
    {
      title: "Cupola Window Technology: Engineering the Perfect View",
      authors: "Dr. Lisa Anderson, Engineering Team",
      date: "2023",
      category: "Engineering",
      abstract: "Technical examination of the Cupola observation module design, materials, and optical characteristics...",
    },
    {
      title: "AI-Enhanced Earth Monitoring from Space Platforms",
      authors: "Dr. Robert Kim, Dr. Maria Santos",
      date: "2024",
      category: "AI & Technology",
      abstract: "Exploring machine learning applications in real-time analysis of Earth observation data from ISS sensors...",
    },
  ];

  const journals = [
    {
      author: "Emma Thompson",
      school: "Riverside High School",
      title: "My Virtual Journey to the ISS",
      date: "Dec 2024",
      excerpt: "Using Veyra's Cupola simulation changed my perspective on Earth observation...",
    },
    {
      author: "Alex Martinez",
      school: "Lincoln Academy",
      title: "NBL Training Insights",
      date: "Nov 2024",
      excerpt: "The neutral buoyancy simulation helped me understand the challenges astronauts face...",
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

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Access peer-reviewed research, technical papers, and student journals about ISS operations
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search papers, authors, or topics..."
              className="w-full pl-12 pr-4 py-4 rounded-xl glass-panel focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
          </div>
        </div>
      </section>

      {/* Research Papers */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <h2 className="font-display text-4xl font-bold mb-8">
          Featured <span className="gradient-text">Papers</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="glass-panel p-6 hover:bg-card/60 transition-all animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent/20 text-accent">
                  {paper.category}
                </span>
                <span className="text-sm text-muted-foreground">{paper.date}</span>
              </div>

              <h3 className="font-display text-xl font-bold mb-2">{paper.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{paper.authors}</p>
              <p className="text-sm text-foreground/80 mb-6">{paper.abstract}</p>

              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/20 text-accent hover:bg-accent/30 transition-colors text-sm font-medium">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg glass-panel hover:bg-card/60 transition-colors text-sm font-medium">
                  <ExternalLink className="w-4 h-4" />
                  View Online
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Journals */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="font-display text-4xl font-bold mb-8">
          Student <span className="gradient-text">Journals</span>
        </h2>

        <div className="space-y-6">
          {journals.map((journal, index) => (
            <div
              key={index}
              className="glass-panel p-6 hover:bg-card/60 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">{journal.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    by {journal.author} • {journal.school}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">{journal.date}</span>
              </div>

              <p className="text-foreground/80 mb-4">{journal.excerpt}</p>

              <button className="text-accent font-medium text-sm hover:underline">
                Read Full Journal →
              </button>
            </div>
          ))}

          <div className="glass-panel p-8 text-center space-y-4 bg-gradient-to-br from-primary/10 to-accent/10">
            <h3 className="font-display text-2xl font-bold">Research Content Coming Soon</h3>
            <p className="text-muted-foreground">
              We're working on curating comprehensive research papers and student journals. Check back soon for updates!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
