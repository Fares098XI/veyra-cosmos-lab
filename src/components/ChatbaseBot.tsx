import { useEffect } from 'react';

export default function ChatbaseBot() {
  useEffect(() => {
    // Inject Chatbase script
    const script = document.createElement('script');
    script.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "08176bdd-0703-4e38-b29e-cacb4e8c4400",
        domain: "www.chatbase.co"
      };
    `;
    document.body.appendChild(script);

    const chatbaseScript = document.createElement('script');
    chatbaseScript.src = "https://www.chatbase.co/embed.min.js";
    chatbaseScript.setAttribute('chatbotId', '08176bdd-0703-4e38-b29e-cacb4e8c4400');
    chatbaseScript.setAttribute('domain', 'www.chatbase.co');
    chatbaseScript.defer = true;
    document.body.appendChild(chatbaseScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(chatbaseScript);
    };
  }, []);

  return null;
}
