// src/pages/VR2.tsx
import React from "react";
import { ArrowLeft, ExternalLink, Maximize } from "lucide-react";

export default function VR2() {
  const src = "/vrs/vr2/index.html"; // public/vrs/vr2/index.html
  const preview = "/vrs/vr2/preview.jpg"; // optional preview image

  function openNewTab() {
    window.open(src, "_blank");
  }

  function openFullscreen() {
    const iframe = document.getElementById("vr2-iframe") as HTMLIFrameElement | null;
    if (!iframe) return;
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen().catch(() => {});
    } else if ((iframe as any).webkitRequestFullscreen) {
      (iframe as any).webkitRequestFullscreen();
    } else {
      openNewTab();
    }
  }

  return (
    <div className="page-container">
      <section className="max-w-7xl mx-auto px-4 text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium mb-4">
          <ArrowLeft className="w-4 h-4 text-accent" />
          <span>VR Experience</span>
        </div>

        <h1 className="font-display text-4xl md:text-6xl font-bold mb-3">
          Cupola VR — <span className="gradient-text">VR 2</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
          Secondary Cupola scene — controls below to open in fullscreen or a new tab.
        </p>

        <div className="flex items-center justify-center gap-3 mb-6">
          <button
            onClick={openFullscreen}
            className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white inline-flex items-center gap-2"
          >
            <Maximize className="w-4 h-4" /> Fullscreen
          </button>

          <button
            onClick={openNewTab}
            className="px-4 py-2 rounded-lg border border-border text-sm inline-flex items-center gap-2 hover:bg-card"
          >
            <ExternalLink className="w-4 h-4" /> Open in new tab
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="glass-panel p-4">
          <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
              id="vr2-iframe"
              title="Cupola VR 2"
              src={src}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: 8,
                background: "#000",
              }}
            />
          </div>

          <p className="text-sm text-muted-foreground mt-3">
            Tip: If your VR uses WebXR or device sensors, prefer "Open in new tab" or run from a secure origin.
          </p>

          <noscript>
            <div className="mt-4">
              <img src={preview} alt="VR2 preview" className="w-full rounded-md shadow-md" />
            </div>
          </noscript>
        </div>
      </section>
    </div>
  );
}
