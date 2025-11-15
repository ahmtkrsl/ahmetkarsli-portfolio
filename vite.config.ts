import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  base: "/ahmetkarsli-portfolio/",
  plugins: [react()],
  build: {
    target: ["es2015", "safari12"],
    minify: "esbuild",
    cssMinify: true,
    polyfillModulePreload: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        format: "es",
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },
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

