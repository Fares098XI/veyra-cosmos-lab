"use client";

import { useState } from "react";
import { BookOpen, FileText, Newspaper, Upload, Search, Tag, SortAsc } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Research() {
  const researchPapers = [
    {
      title: "How Astronaut Photography Supports Disaster Management",
      category: "Earth Observation",
      date: "2021",
      description:
        "This paper demonstrates how astronaut photography from the ISS Cupola plays a vital role in monitoring Earth's natural disasters. By capturing high-resolution imagery of wildfires, floods, and hurricanes, astronauts provide visual confirmation and near-real-time context that complements satellite data and helps emergency response teams prioritize resources and assess damage. Case studies illustrate how crew-taken images expedited response and improved situational awareness during major events.",
      keywords: ["astronaut photography", "disasters", "climate", "Cupola"],
      link: "https://appliedsciences.nasa.gov/our-impact/news/how-astronauts-use-photography-help-people-earth",
    },
    {
      title: "Neutral Buoyancy Training and Its Applications on Earth",
      category: "Human Spaceflight",
      date: "2023",
      description:
        "Examines how training in the Neutral Buoyancy Laboratory (NBL) prepares astronauts for EVAs and contributes insights for Earth applications. The study outlines physiological and procedural benefits of neutral buoyancy training, and explores cross-disciplinary translations into underwater robotics, physical rehabilitation protocols, and remote-manipulation techniques used in hazardous environments on Earth.",
      keywords: ["Neutral Buoyancy", "spacewalks", "training", "medicine", "simulation"],
      link: "#",
    },
    {
      title: "Virtual Reality in STEM Learning: Outcomes from Classroom Deployments",
      category: "STEM Education",
      date: "2023",
      description:
        "Reports outcomes from multiple VR deployments in K–12 and university classrooms focusing on astronomy and Earth science. The study measures engagement, conceptual gains, and retention compared to traditional instruction, and provides design guidelines for immersive content aligned to curricula and accessibility best practices.",
      keywords: ["VR", "STEM", "education", "engagement", "curriculum"],
      link: "https://www.esa.int/Education",
    },
    {
      title: "VR & Gamification in Education: A Systematic Review",
      category: "Research Review",
      date: "2024",
      description:
        "A systematic review of over 100 studies on virtual reality and gamification in education. It synthesizes evidence on learning gains, motivation, and transfer of knowledge, and identifies gaps in longitudinal data, equity of access, and teacher training necessary for scalable VR adoption in formal education.",
      keywords: ["VR", "gamification", "systematic review", "learning", "training"],
      link: "https://doi.org/10.1007/s11423-024-10351-3",
    },
    {
      title: "Satellite Observations of Deforestation: Long-term Trends from Low Earth Orbit",
      category: "Earth Science",
      date: "2022",
      description:
        "Analyzes multi-decadal satellite and astronaut imagery to quantify deforestation patterns and their drivers across tropical regions. Uses time-series analysis to correlate land-cover changes with agricultural expansion, fires, and policy shifts, and discusses implications for carbon budgeting and conservation strategies.",
      keywords: ["deforestation", "land cover", "satellite", "carbon"],
      link: "#",
    },
    {
      title: "Robotics Autonomy for On-Orbit Servicing and Maintenance",
      category: "Technology",
      date: "2024",
      description:
        "Evaluates autonomous and tele-operated robotics used for ISS maintenance and future servicing missions. Discusses perception pipelines, fault-tolerance strategies, and human-robot teaming lessons that can be applied to terrestrial robotics in hazardous or remote environments.",
      keywords: ["robotics", "on-orbit servicing", "autonomy", "perception"],
      link: "#",
    },
    {
      title: "Physiological Effects of Long-Duration Microgravity on the Musculoskeletal System",
      category: "Biology",
      date: "2025",
      description:
        "Summarizes clinical and omics studies examining bone density, muscle atrophy, and metabolic changes during long-duration spaceflight. The paper reviews countermeasures (exercise, nutrition, and pharmacology) and how findings inform treatments for immobilization and aging-related conditions on Earth.",
      keywords: ["microgravity", "bone density", "muscle", "health"],
      link: "#",
    },
    {
      title: "AI-Powered Mission Simulations for Risk Assessment",
      category: "Artificial Intelligence",
      date: "2024",
      description:
        "Describes a framework that uses machine learning to generate mission simulations, identify failure modes, and prioritize mitigation strategies. Demonstrates how AI accelerates design iterations for crewed and robotic missions and improves training scenarios that feed into VR modules.",
      keywords: ["AI", "simulation", "risk", "training"],
      link: "#",
    },
    {
      title: "Citizen Science from Orbit: Engaging the Public with Cupola Imagery",
      category: "Public Engagement",
      date: "2022",
      description:
        "Explores programs that use astronaut images and ISS data in citizen science projects (e.g., land-cover annotation, disaster spotting). Evaluates participant learning, data quality, and the impact of public contributions for research and policy decisions.",
      keywords: ["citizen science", "public engagement", "Cupola", "imagery"],
      link: "#",
    },
    {
      title: "Georeferencing Crew Photographs: Methods and Applications",
      category: "Geo-informatics",
      date: "2023",
      description:
        "Presents methods for georeferencing crew-acquired photographs using orbital telemetry and computer vision. Demonstrates applications for mapping coastal change, volcanic activity, and urban expansion when combined with satellite archives.",
      keywords: ["georeferencing", "photography", "mapping", "coasts"],
      link: "#",
    },
  ];

  const journalPlaceholders = [
    {
      title: "Nature Astronomy",
      author: "Nature Publishing Group",
      date: "Ongoing",
      description:
        "Publishes high-impact research across astronomy, planetary science, and astrophysics. Covers observational discoveries, theory, instrumentation, and interdisciplinary work connecting astronomy to Earth and space applications.",
      keywords: ["astronomy", "astrophysics", "exoplanets", "observation"],
      link: "https://www.nature.com/natastron/",
    },
    {
      title: "Acta Astronautica",
      author: "Elsevier / IAA",
      date: "Ongoing",
      description:
        "Focuses on astronautics research, mission design, and space systems engineering. Includes technical papers on human spaceflight, propulsion, and orbital operations.",
      keywords: ["astronautics", "engineering", "missions", "propulsion"],
      link: "https://www.sciencedirect.com/journal/acta-astronautica",
    },
    {
      title: "Computers & Education",
      author: "Elsevier",
      date: "Ongoing",
      description:
        "Examines how computing technologies (VR/AR, AI) impact teaching and learning. Offers empirical studies, design frameworks, and evaluations for immersive STEM education projects.",
      keywords: ["education", "VR", "AI", "learning"],
      link: "https://www.sciencedirect.com/journal/computers-and-education",
    },
    {
      title: "British Journal of Educational Technology (BJET)",
      author: "Wiley",
      date: "Ongoing",
      description:
        "Covers research on educational technology adoption, pedagogy, and digital learning interventions. Includes studies on gamification, teacher training, and policy implications.",
      keywords: ["education", "technology", "policy", "pedagogy"],
      link: "https://bera-journals.onlinelibrary.wiley.com/journal/14678535",
    },
    {
      title: "Virtual Reality (Springer Journal)",
      author: "Springer",
      date: "Ongoing",
      description:
        "Publishes research on VR, AR, and mixed reality systems, applications, and user studies. Relevant for Cupola and NBL simulations, including usability and immersion studies.",
      keywords: ["VR", "HCI", "immersion", "evaluation"],
      link: "https://www.springer.com/journal/10055",
    },
    {
      title: "International Journal of Human-Computer Studies",
      author: "Elsevier",
      date: "Ongoing",
      description:
        "Focuses on human–computer interaction, ergonomics, and interface design. Useful for accessible chatbots, map interactions, and VR controls.",
      keywords: ["HCI", "usability", "interfaces", "accessibility"],
      link: "https://www.sciencedirect.com/journal/international-journal-of-human-computer-studies",
    },
    {
      title: "IEEE Transactions on Visualization and Computer Graphics",
      author: "IEEE",
      date: "Ongoing",
      description:
        "Covers visualization, AR/VR rendering, and graphics systems. Important for Cupola visualizations, timelapse rendering, and efficient web 3D pipelines.",
      keywords: ["visualization", "graphics", "rendering", "WebGL"],
      link: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=2945",
    },
    {
      title: "Journal of Science Education and Technology",
      author: "Springer",
      date: "Ongoing",
      description:
        "Publishes research on integrating technology into science education and evaluating learning outcomes. Useful for building lesson plans tied to learning objectives.",
      keywords: ["science education", "technology", "curriculum", "assessment"],
      link: "https://www.springer.com/journal/10956",
    },
    {
      title: "Advances in Space Research",
      author: "Elsevier / COSPAR",
      date: "Ongoing",
      description:
        "Publishes studies in space science, engineering, and applications. Links ISS observations to Earth and planetary science.",
      keywords: ["space research", "planetary", "engineering", "observations"],
      link: "https://www.sciencedirect.com/journal/advances-in-space-research",
    },
    {
      title: "International Journal of STEM Education",
      author: "SpringerOpen",
      date: "Ongoing",
      description:
        "Open-access journal on STEM teaching innovations, program evaluations, and policy. Useful for ISS-based VR classroom programs.",
      keywords: ["STEM", "education", "policy", "evaluation"],
      link: "https://stemeducationjournal.springeropen.com/",
    },
  ];

  const categories = [
    "Earth Observation",
    "Human Spaceflight",
    "STEM Education",
    "Research Review",
    "Earth Science",
    "Technology",
    "Biology",
    "Artificial Intelligence",
    "Public Engagement",
    "Geo-informatics",
  ];

  const allTags = Array.from(
    new Set([...researchPapers.flatMap((p) => p.keywords), ...journalPlaceholders.flatMap((j) => j.keywords)])
  );

  const [activeSection, setActiveSection] = useState<"papers" | "journals" | "contributions">("papers");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "az" | "za">("newest");

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]));
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const sortItems = (items: any[]) => {
    return [...items].sort((a, b) => {
      if (sortBy === "newest") return b.date.localeCompare(a.date);
      if (sortBy === "oldest") return a.date.localeCompare(b.date);
      if (sortBy === "az") return a.title.localeCompare(b.title);
      if (sortBy === "za") return b.title.localeCompare(a.title);
      return 0;
    });
  };

  const filterItems = (items: any[]) =>
    sortItems(
      items.filter(
        (item) =>
          (selectedCategories.length === 0 || selectedCategories.includes(item.category)) &&
          (selectedTags.length === 0 || item.keywords.some((k: string) => selectedTags.includes(k))) &&
          (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    );

  const filteredPapers = filterItems(researchPapers);
  const filteredJournals = filterItems(journalPlaceholders);

  return (
    <div className="page-container">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium mb-6">
          <BookOpen className="w-4 h-4 text-accent" />
          <span>Knowledge Hub</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
          Research & <span className="gradient-text">Discoveries</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore scientific papers, journals, and contributions inspired by space exploration.
        </p>
      </section>

      {/* Navigation */}
      <section className="max-w-7xl mx-auto px-4 mb-12 flex flex-wrap justify-center gap-4">
        <Button onClick={() => setActiveSection("papers")} variant={activeSection === "papers" ? "default" : "outline"} className="gap-2">
          <FileText className="w-4 h-4" /> Research Papers
        </Button>
        <Button onClick={() => setActiveSection("journals")} variant={activeSection === "journals" ? "default" : "outline"} className="gap-2">
          <Newspaper className="w-4 h-4" /> Journals
        </Button>
        <Button onClick={() => setActiveSection("contributions")} variant={activeSection === "contributions" ? "default" : "outline"} className="gap-2">
          <Upload className="w-4 h-4" /> Add Contribution
        </Button>
      </section>

      {/* Search + Filters + Sort */}
      {activeSection !== "contributions" && (
        <div className="max-w-5xl mx-auto px-4 mb-8">
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search papers or journals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card/60 text-base focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => toggleCategory(cat)}
                className={`px-6 py-3 rounded-full text-lg font-semibold transition ${
                  selectedCategories.includes(cat) ? "bg-accent text-white shadow-lg" : "bg-card/60 text-muted-foreground hover:bg-card"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {allTags.map((tag, i) => (
              <button
                key={i}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-2 rounded-full text-sm font-medium transition ${
                  selectedTags.includes(tag) ? "bg-accent text-white" : "bg-card/60 text-muted-foreground hover:bg-card"
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex justify-center mb-6">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 rounded-lg border border-border bg-card/60 text-base focus:ring-2 focus:ring-accent"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="az">Title A–Z</option>
              <option value="za">Title Z–A</option>
            </select>
          </div>
        </div>
      )}

      {/* Research Papers */}
      {activeSection === "papers" && (
        <section className="max-w-7xl mx-auto px-4 animate-fade-in">
          <h2 className="font-display text-4xl font-bold mb-4">Research <span className="gradient-text">Papers</span></h2>
          <p className="text-sm text-muted-foreground mb-6">Results: {filteredPapers.length}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPapers.map((paper, index) => (
              <div key={index} className="glass-panel p-8 space-y-4 hover:bg-card/60 transition-all">
                <div className="w-16 h-16 rounded-xl bg-card/60 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold">{paper.title}</h3>
                <div className="flex gap-2 flex-wrap">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent/20 text-accent">{paper.category}</span>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-card/60 text-muted-foreground">{paper.date}</span>
                  {paper.keywords.map((k, i) => (
                    <span key={i} className="inline-block px-2 py-1 rounded-md text-xs bg-card/40">#{k}</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{paper.description}</p>
                <a href={paper.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-4 py-2 text-sm font-medium rounded-lg bg-accent text-white hover:opacity-90 transition">
                  Read More
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Journals */}
      {activeSection === "journals" && (
        <section className="max-w-7xl mx-auto px-4 animate-fade-in">
          <h2 className="font-display text-4xl font-bold mb-4">Journals & Publications</h2>
          <p className="text-sm text-muted-foreground mb-6">Results: {filteredJournals.length}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJournals.map((journal, index) => (
              <div key={index} className="glass-panel p-8 space-y-4 hover:bg-card/60 transition-all">
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
                    <div className="flex gap-2 flex-wrap mb-3">
                      {journal.keywords.map((k, i) => (
                        <span key={i} className="inline-block px-2 py-1 rounded-md text-xs bg-card/40">#{k}</span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{journal.description}</p>
                    <a href={journal.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 px-4 py-2 text-sm font-medium rounded-lg bg-accent text-white hover:opacity-90 transition">
                      Visit Journal →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contributions */}
      {activeSection === "contributions" && (
        <section className="max-w-4xl mx-auto px-4 animate-fade-in">
          <h2 className="font-display text-4xl font-bold mb-8">Share Your <span className="gradient-text">Contribution</span></h2>
          <div className="glass-panel p-8 space-y-6">
            <p className="text-muted-foreground">
              Contribute by submitting research papers, astronaut journals, or photos related to space exploration and Earth observation. Add keywords to make your contribution discoverable.
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
                <input type="text" placeholder="Enter title..." className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:ring-2 focus:ring-accent"/>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea placeholder="Describe your contribution..." rows={4} className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:ring-2 focus:ring-accent"/>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 flex items-center gap-2"><Tag className="w-4 h-4 text-accent"/> Keywords</label>
                <input type="text" placeholder="e.g. space, climate, ISS, robotics" className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:ring-2 focus:ring-accent"/>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Upload Files</label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent transition-all cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground"/>
                  <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground mt-2">PDF, DOCX, JPG, PNG up to 10MB</p>
                </div>
              </div>
              <Button className="w-full" size="lg">Submit Contribution</Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
