import { useEffect } from 'react';

export default function ChatbaseBot() {
  useEffect(() => {
    // Prevent duplicate injection
    if (document.querySelector('script[data-chatbase-loaded]')) {
      return;
    }

    // Inject Chatbase config
    const configScript = document.createElement('script');
    configScript.setAttribute('data-chatbase-loaded', 'true');
    configScript.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "08176bdd-0703-4e38-b29e-cacb4e8c4400",
        domain: "www.chatbase.co"
      };
    `;
    document.head.appendChild(configScript);

    // Inject Chatbase embed script
    const chatbaseScript = document.createElement('script');
    chatbaseScript.src = "https://www.chatbase.co/embed.min.js";
    chatbaseScript.setAttribute('chatbotId', '08176bdd-0703-4e38-b29e-cacb4e8c4400');
    chatbaseScript.setAttribute('domain', 'www.chatbase.co');
    chatbaseScript.defer = true;
    document.head.appendChild(chatbaseScript);

    // Cleanup function
    return () => {
      const scripts = document.querySelectorAll('script[data-chatbase-loaded]');
      scripts.forEach(s => s.remove());
      
      const embedScript = document.querySelector('script[src*="chatbase.co/embed.min.js"]');
      if (embedScript) embedScript.remove();
      
      // Remove chatbot iframe if present
      const chatbotIframe = document.querySelector('iframe[src*="chatbase.co"]');
      if (chatbotIframe) chatbotIframe.remove();
    };
  }, []);

  return null;
}
