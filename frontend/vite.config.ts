import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { componentTagger } from "lovable-tagger";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), componentTagger()], // Ensure it's an array
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Fixed alias path
    },
  },
});
