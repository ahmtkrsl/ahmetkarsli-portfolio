import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Space Grotesk'", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#14151A",
          accent: "#FFD166",
          highlight: "#4C6EF5",
        },
      },
      backgroundImage: {
        grid: "radial-gradient(circle at center, rgba(255,255,255,0.12) 0, transparent 45%)",
      },
    },
  },
  plugins: [],
};

export default config;

