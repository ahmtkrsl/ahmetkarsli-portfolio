import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    port: 5173,
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});

