import { Users, Award, Target, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="page-container">
      <section className="max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 text-center">
          About <span className="gradient-text">Veyra</span>
        </h1>

        <div className="glass-panel p-8 space-y-6 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8 text-accent" />
            <h2 className="font-display text-2xl font-bold">Our Mission</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Veyra brings the International Space Station experience to learners worldwide through
            immersive VR concept demos, AI-powered insights, and interactive simulations. Created
            by AstroVista for the NASA Space Apps Challenge 2025, our platform focuses on two
            unique sensory experiences: the breathtaking views from the Cupola observation module
            and the weightless training environment of the Neutral Buoyancy Laboratory.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our goal is to inspire the next generation of space explorers, climate scientists,
            and global citizens by making space science accessible, engaging, and impactful.
          </p>
        </div>

        <div className="glass-panel p-8 space-y-6 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-accent" />
            <h2 className="font-display text-2xl font-bold">The Team</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Veyra is developed by AstroVista, a multidisciplinary team passionate about space
            education and technology. Our team combines expertise in aerospace engineering,
            educational design, AI development, and interactive media to create transformative
            learning experiences.
          </p>
        </div>

        <div className="glass-panel p-8 space-y-6 mb-12 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-8 h-8 text-accent" />
            <h2 className="font-display text-2xl font-bold">NASA Space Apps Challenge 2025</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            This project was created for the NASA Space Apps Challenge, a global hackathon that
            brings together innovators to solve challenges using NASA's open data. We're proud
            to contribute to the mission of making space exploration and Earth observation
            accessible to everyone.
          </p>
        </div>

        <div className="glass-panel p-8 text-center space-y-4">
          <Mail className="w-12 h-12 mx-auto text-accent" />
          <h2 className="font-display text-2xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground">
            Questions, feedback, or collaboration opportunities?
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-accent font-display font-bold neon-glow hover:scale-105 transition-transform"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
