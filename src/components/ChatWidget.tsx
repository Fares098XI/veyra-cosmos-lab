
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Remove any existing chatbase elements first
      const existingFrame = document.getElementById("chatbase-bubble-button");
      const existingWindow = document.getElementById("chatbase-bubble-window");
      if (existingFrame) existingFrame.remove();
      if (existingWindow) existingWindow.remove();

      const script = document.createElement("script");
      script.innerHTML = `
        window.embeddedChatbotConfig = {
          chatbotId: "6kkqrmN2ON0cEH7n1_OJb",
          domain: "www.chatbase.co"
        };
      `;
      document.body.appendChild(script);

      const chatbaseScript = document.createElement("script");
      chatbaseScript.src = "https://www.chatbase.co/embed.min.js";
      chatbaseScript.setAttribute("chatbotId", "6kkqrmN2ON0cEH7n1_OJb");
      chatbaseScript.setAttribute("domain", "www.chatbase.co");
      chatbaseScript.defer = true;
      document.body.appendChild(chatbaseScript);

      // Force show the chatbase window after a short delay
      setTimeout(() => {
        const chatWindow = document.getElementById("chatbase-bubble-window");
        if (chatWindow) {
          chatWindow.style.display = "block";
          chatWindow.style.visibility = "visible";
        }
      }, 500);

      return () => {
        document.body.removeChild(script);
        document.body.removeChild(chatbaseScript);
        const chatbaseFrame = document.getElementById("chatbase-bubble-button");
        const chatbaseWindow = document.getElementById("chatbase-bubble-window");
        if (chatbaseFrame) chatbaseFrame.remove();
        if (chatbaseWindow) chatbaseWindow.remove();
      };
    }
  }, [isOpen]);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-primary via-accent to-destructive flex items-center justify-center shadow-2xl hover:scale-110 transition-all neon-glow animate-pulse hover:animate-none"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </button>
      )}

      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="fixed bottom-6 right-6 z-[60] w-12 h-12 rounded-full bg-destructive/90 backdrop-blur-sm flex items-center justify-center shadow-xl hover:scale-110 transition-all"
        >
          <X className="w-6 h-6 text-white" />
        </button>
      )}
    </>
  );
}
