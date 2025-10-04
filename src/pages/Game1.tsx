// src/pages/Game1.tsx
import React from "react";
import { Button } from "@/components/ui/button"; // optional, adjust if you don't use this
import { ArrowLeft } from "lucide-react";
export default function Game1() {
  return (
    <div className="page-container">
      <section className="max-w-7xl mx-auto px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="font-display text-3xl font-bold">Game 1</h1>
          <div>
            <Button onClick={() => window.history.back()} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-border/30">
          <iframe
            src="/games/game1/index.html"
            title="Game 1"
            style={{ width: "100%", height: "80vh", border: "none" }}
            sandbox="allow-forms allow-scripts allow-same-origin allow-pointer-lock allow-popups"
          />
        </div>

        <p className="text-sm text-muted-foreground mt-3">
          If the game doesn't show, open <a className="underline" href="/games/game1/index.html" target="_blank" rel="noreferrer">the raw page</a>.
        </p>
      </section>
    </div>
  );
}
