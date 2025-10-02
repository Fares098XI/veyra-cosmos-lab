import { useEffect } from 'react';

// Extend Window interface for Chatbase
declare global {
  interface Window {
    embeddedChatbotConfig?: {
      chatbotId: string;
      domain: string;
    };
  }
}

export default function ChatbaseBot() {
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Check if already loaded
      if (window.embeddedChatbotConfig || document.querySelector('script[src*="chatbase.co/embed"]')) {
        return;
      }

      try {
        // Set config on window object
        window.embeddedChatbotConfig = {
          chatbotId: "08176bdd-0703-4e38-b29e-cacb4e8c4400",
          domain: "www.chatbase.co"
        };

        // Create and inject the Chatbase script
        const script = document.createElement('script');
        script.src = "https://www.chatbase.co/embed.min.js";
        script.id = "chatbase-script";
        script.defer = true;
        
        // Add load event listener
        script.onload = () => {
          console.log('Chatbase loaded successfully');
        };
        
        script.onerror = () => {
          console.error('Failed to load Chatbase');
        };
        
        document.body.appendChild(script);
      } catch (error) {
        console.error('Error initializing Chatbase:', error);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return null;
}
