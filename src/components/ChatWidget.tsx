import React, { useState, useRef } from "react";

/**
 * Simple Chat Widget that posts to /api/chat and extracts the assistant text.
 * - App expects your server proxy to be available at the same origin: /api/chat
 * - If you use a different base, set process.env or change `API_BASE`.
 */

const API_BASE = import.meta.env.VITE_API_BASE || ""; // leave blank for same origin

type Message = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
};

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    { id: "m0", role: "assistant", content: "Hi — ask me about Veyra, the map or a location." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function addMessage(role: Message["role"], content: string) {
    setMessages((m) => [...m, { id: String(Date.now()) + Math.random().toString(36).slice(2), role, content }]);
  }

  async function handleSend(e?: React.FormEvent) {
    if (e) e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setError(null);
    addMessage("user", trimmed);
    setInput("");
    inputRef.current?.focus();

    // prepare payload: Chat proxy expects { messages: [{role, content}, ...] }
    const payload = { messages: [{ role: "user", content: trimmed }] };

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const status = res.status;
      // try parse json safely
      let data: any = null;
      try {
        data = await res.json();
      } catch (parseErr) {
        // non-json or empty
        throw new Error(`Invalid JSON response from server (HTTP ${status})`);
      }

      if (!res.ok) {
        // if server forwarded upstream error, surface helpful message
        const detail = data?.detail ?? data?.message ?? JSON.stringify(data);
        throw new Error(`Server error: ${detail}`);
      }

      // Robust extraction of useful assistant text:
      // common shapes: { text: "..." } or { message: "..."} or Chatbase-like nested outputs
      let assistantText: string | null = null;

      if (typeof data === "string") {
        assistantText = data;
      } else if (typeof data?.text === "string" && data.text.trim()) {
        assistantText = data.text;
      } else if (typeof data?.message === "string" && data.message.trim()) {
        assistantText = data.message;
      } else if (Array.isArray(data?.output) && data.output.length) {
        // support output array with content objects
        const out0 = data.output[0];
        if (typeof out0 === "string") assistantText = out0;
        else if (typeof out0?.content === "string") assistantText = out0.content;
        else if (typeof out0?.text === "string") assistantText = out0.text;
      } else if (data?.reply && typeof data.reply === "string") {
        assistantText = data.reply;
      } else {
        // fallback: try find any string field
        const allStrings = Object.values(data).filter((v) => typeof v === "string");
        if (allStrings.length) assistantText = String(allStrings[0]);
      }

      if (!assistantText) {
        // last fallback: JSON stringify (keeps UI from breaking)
        assistantText = JSON.stringify(data);
      }

      addMessage("assistant", assistantText);
    } catch (err: any) {
      console.error("ChatWidget error:", err);
      setError(err?.message ?? String(err));
      addMessage("assistant", "⚠️ Error: " + (err?.message ?? "Unknown error"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ width: 360, maxWidth: "92vw", position: "fixed", right: 20, bottom: 20, zIndex: 9999 }}>
      <div className="glass-panel p-3 rounded-xl shadow-lg" style={{ maxHeight: "70vh", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <strong>Veyra Chat</strong>
          <div style={{ fontSize: 12, opacity: 0.9 }}>{loading ? "Sending..." : "Ready"}</div>
        </div>

        <div style={{ height: 310, overflowY: "auto", padding: 6, borderRadius: 8 }} className="chat-scroll">
          {messages.map((m) => (
            <div key={m.id} style={{ marginBottom: 8 }}>
              <div style={{ fontSize: 12, color: m.role === "user" ? "#9ca3af" : "#60a5fa", fontWeight: 600 }}>
                {m.role === "user" ? "You" : "Assistant"}
              </div>
              <div style={{ marginTop: 4, whiteSpace: "pre-wrap", lineHeight: 1.4 }}>
                <div className={`p-2 rounded-md ${m.role === "user" ? "bg-card/30" : "bg-blue-600/10"}`}>
                  {m.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {error && (
          <div style={{ color: "#ffb4b4", fontSize: 13, marginBottom: 6 }}>
            Error: {error}
          </div>
        )}

        <form onSubmit={handleSend} style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Veyra, the map or a location..."
            className="input"
            style={{ flex: 1, padding: "8px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", background: "transparent", color: "white" }}
            disabled={loading}
          />
          <button type="submit" disabled={loading} className="btn">
            {loading ? "…" : "Send"}
          </button>
        </form>

        <div style={{ marginTop: 8, fontSize: 12, opacity: 0.8 }}>
          Server: <code>{API_BASE || "/api"}</code>
        </div>
      </div>
    </div>
  );
}
