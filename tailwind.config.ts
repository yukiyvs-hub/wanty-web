import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFFDF8",
        ink: "#2F2F2F",
        muted: "#6F6F6F",
        line: "#EFE7DA",
        orange: "#FF9F43",
        yellow: "#FFD166",
        green: "#7BD389",
        coral: "#FF6B6B"
      },
      boxShadow: {
        soft: "0 12px 36px rgba(47,47,47,0.07)"
      },
      fontFamily: {
        hand: ["var(--font-hand)", "var(--font-round)", "cursive"],
        sans: ["var(--font-round)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
