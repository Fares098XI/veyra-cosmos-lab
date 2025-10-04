// src/components/ChatWidget.tsx
import React, { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const DISMISS_KEY = "veyra_chat_dismissed_v1";

export default function ChatWidget() {
  // if user dismissed widget permanently, don't show the toggle button
  const dismissedInitial = typeof window !== "undefined" && localStorage.getItem(DISMISS_KEY) === "true";
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState<boolean>(dismissedInitial);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hi — ask me about Veyra, the map or a location." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const boxRef = useRef<HTMLDivElement | null>(null);

  // auto-scroll when new messages or open state changes
  useEffect(() => {
    if (open) boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  // keyboard: Esc closes widget
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Enter" && (document.activeElement as HTMLElement)?.tagName !== "TEXTAREA") {
        // handled in input onKeyDown below to avoid double-send; this is a noop
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  async function send() {
    const text = input.trim();
    if (!text) return;
    const userMsg: Msg = { role: "user", content: text };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();
      // try common response shapes, fall back to data.text or whole json snippet
      const assistantText =
        data?.message ??
        data?.text ??
        data?.response ??
        data?.replies?.[0]?.content ??
        data?.choices?.[0]?.message?.content ??
        JSON.stringify(data).slice(0, 1000);

      // normalize object -> string
      setMessages((m) => [...m, { role: "assistant", content: String(assistantText) }]);
      // keep panel open when receiving reply
      setOpen(true);
    } catch (err) {
      console.error("ChatWidget: error", err);
      setMessages((m) => [...m, { role: "assistant", content: "Sorry — failed to reach chat server." }]);
    } finally {
      setLoading(false);
    }
  }

  function handlePermanentDismiss() {
    localStorage.setItem(DISMISS_KEY, "true");
    setDismissed(true);
    setOpen(false);
  }

  function resetDismiss() {
    localStorage.removeItem(DISMISS_KEY);
    setDismissed(false);
  }

  if (dismissed) {
    // small unobtrusive row to re-enable the widget if accidentally dismissed
    return (
      <div style={{ position: "fixed", right: 24, bottom: 24, zIndex: 1000 }}>
        <button
          onClick={resetDismiss}
          style={{
            padding: "8px 12px",
            borderRadius: 999,
            background: "transparent",
            color: "#9fb3c8",
            border: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "blur(6px)",
            cursor: "pointer",
          }}
          title="Re-enable chat widget"
        >
          💬 Re-enable assistant
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((s) => !s)}
        aria-label="Toggle chat"
        style={{
          position: "fixed",
          right: 24,
          bottom: 24,
          zIndex: 1000,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#0ea5e9",
          color: "white",
          border: "none",
          boxShadow: "0 8px 26px rgba(2,6,23,.45)",
          cursor: "pointer",
          display: dismissed ? "none" : "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
        }}
      >
        💬
      </button>

      {/* Chat panel */}
      <div
        style={{
          position: "fixed",
          right: 24,
          bottom: 96,
          zIndex: 1000,
          width: 380,
          display: open ? "block" : "none",
        }}
        role="dialog"
        aria-label="Veyra assistant"
      >
        <div
          style={{
            height: 520,
            display: "flex",
            flexDirection: "column",
            background: "linear-gradient(180deg,#071827 0%, #041019 100%)",
            color: "#E6EEF8",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 18px 40px rgba(2,6,23,.7)",
            border: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "12px 14px",
              borderBottom: "1px solid rgba(255,255,255,0.03)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 10,
              background: "linear-gradient(90deg, rgba(6,182,212,0.04), transparent)",
            }}
          >
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "#063f51", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
                VA
              </div>
              <div>
                <div style={{ fontWeight: 700 }}>Veyra Assistant</div>
                <div style={{ fontSize: 12, color: "#9fb3c8" }}>Ask about Veyra, the map or any location</div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {/* Permanent dismiss */}
              <button
                onClick={handlePermanentDismiss}
                title="Dismiss permanently"
                style={{
                  background: "none",
                  color: "#9fb3c8",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 13,
                }}
              >
                Dismiss
              </button>

              {/* Close panel (temporary) */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  border: "none",
                  background: "rgba(255,255,255,0.03)",
                  color: "#9fb3c8",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Messages */}
          <div ref={boxRef} style={{ padding: 12, overflowY: "auto", flex: 1 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ marginBottom: 10, display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div
                  style={{
                    maxWidth: "78%",
                    display: "inline-block",
                    padding: "10px 12px",
                    borderRadius: 12,
                    background: m.role === "user" ? "linear-gradient(90deg,#0b2b3a,#071822)" : "linear-gradient(90deg,#0b3a28,#06341f)",
                    color: "white",
                    boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.15)",
                    fontSize: 13,
                    lineHeight: 1.3,
                  }}
                >
                  <small style={{ opacity: 0.98, display: "block" }}>{m.content}</small>
                </div>
              </div>
            ))}

            {loading && (
              <div style={{ marginTop: 4, color: "#9fb3c8", fontSize: 13 }}>
                Assistant is typing...
              </div>
            )}
          </div>

          {/* Composer */}
          <div style={{ display: "flex", gap: 8, padding: 12, borderTop: "1px solid rgba(255,255,255,0.03)" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
              placeholder="Ask about the map, ISS, or a location..."
              style={{
                flex: 1,
                padding: "10px 12px",
                borderRadius: 10,
                border: "none",
                background: "#03151b",
                color: "white",
                outline: "none",
                fontSize: 14,
              }}
            />
            <button
              onClick={send}
              disabled={loading}
              style={{
                padding: "10px 12px",
                borderRadius: 10,
                background: "#0ea5e9",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
