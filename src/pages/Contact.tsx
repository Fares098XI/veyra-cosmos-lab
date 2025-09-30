import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="page-container">
      <section className="max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 text-center">
          <span className="gradient-text">Contact</span> Us
        </h1>

        <div className="glass-panel p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-8 h-8 text-accent" />
            <h2 className="font-display text-2xl font-bold">Send us a message</h2>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg glass-panel focus:outline-none focus:ring-2 focus:ring-accent/50"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg glass-panel focus:outline-none focus:ring-2 focus:ring-accent/50"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg glass-panel focus:outline-none focus:ring-2 focus:ring-accent/50"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 rounded-lg glass-panel focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                placeholder="Tell us more..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent font-display font-bold neon-glow hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>

        <div className="glass-panel p-8 text-center space-y-4">
          <Mail className="w-12 h-12 mx-auto text-accent" />
          <h3 className="font-display text-xl font-bold">Direct Email</h3>
          <p className="text-muted-foreground">
            Prefer email? Reach us directly at
          </p>
          <a
            href="mailto:hello@astrovista.space"
            className="text-accent font-bold text-lg hover:underline"
          >
            hello@astrovista.space
          </a>
        </div>
      </section>
    </div>
  );
}
