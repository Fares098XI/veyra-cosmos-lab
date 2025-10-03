// src/components/ChatWidget.tsx
import React, { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant", content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hi — ask me about Veyra, the map or a location." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

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
      // Chatbase response shape can differ. Try common fields:
      const assistantText =
        data?.message ??
        data?.response ??
        data?.replies?.[0]?.content ??
        data?.choices?.[0]?.message?.content ??
        JSON.stringify(data).slice(0, 1000);
      setMessages((m) => [...m, { role: "assistant", content: String(assistantText) }]);
    } catch (err) {
      console.error("ChatWidget: error", err);
      setMessages((m) => [...m, { role: "assistant", content: "Sorry — failed to reach chat server." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
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
          boxShadow: "0 6px 18px rgba(2,6,23,.4)",
          cursor: "pointer",
        }}
      >
        💬
      </button>

      <div style={{ position: "fixed", right: 24, bottom: 96, zIndex: 1000, width: 360, display: open ? "block" : "none" }}>
        <div style={{ height: 480, display: "flex", flexDirection: "column", background: "#071022", color: "#E6EEF8", borderRadius: 12, overflow: "hidden", boxShadow: "0 12px 30px rgba(2,6,23,.6)" }}>
          <div style={{ padding: 12, borderBottom: "1px solid rgba(255,255,255,0.04)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <strong>Veyra Assistant</strong>
            <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "#9fb3c8" }}>✕</button>
          </div>
          <div ref={boxRef} style={{ padding: 12, overflowY: "auto", flex: 1 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ marginBottom: 8, textAlign: m.role === "user" ? "right" : "left" }}>
                <div style={{ display: "inline-block", padding: "8px 10px", borderRadius: 8, background: m.role === "user" ? "#112035" : "#0f2b1b" }}>
                  <small style={{ opacity: 0.95 }}>{m.content}</small>
                </div>
              </div>
            ))}
            {loading && <div style={{ opacity: 0.6 }}>...</div>}
          </div>
          <div style={{ display: "flex", gap: 8, padding: 10, borderTop: "1px solid rgba(255,255,255,0.04)" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask about the map, the ISS, or a location..."
              style={{ flex: 1, padding: "8px 10px", borderRadius: 8, border: "none", background: "#071827", color: "white" }}
            />
            <button onClick={send} disabled={loading} style={{ padding: "8px 12px", borderRadius: 8, background: "#0ea5e9", border: "none", color: "white" }}>
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
