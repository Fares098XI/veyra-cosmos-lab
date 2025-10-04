
// vite.config.ts
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  // Load .env variables (like CHATBASE_TOKEN) into process.env
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      host: "::", // allows external access (e.g. localhost, LAN)
      port: 8080,
      // Dev proxy: forward any request to /api/* to your Flask backend at :5000
      proxy: {
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
          secure: false,
          // optionally rewrite: remove if you keep same path on backend
          rewrite: (path) => path, // keep /api prefix
        },
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(), // enable only in dev
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      // Expose env variables (optional: lets you call import.meta.env.CHATBASE_TOKEN)
      "import.meta.env.CHATBASE_TOKEN": JSON.stringify(env.CHATBASE_TOKEN),
    },
  };
});
