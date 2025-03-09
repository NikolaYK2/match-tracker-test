import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        tactic: ["var(--font-tacticSans)"],
      },
      colors: {
        dark: {
          DEFAULT: "#0f0f0f",
          bg: "#1a1a1a",
          card: "#222222",
          border: "#2c2c2c",
        },
        accent: {
          primary: "#e9355a",
          secondary: "#6c4ef6",
          green: "#22c55e",
          orange: "#f97316",
          red: "#ef4444",
          yellow: "#facc15",
        },
        light: {
          DEFAULT: "#ffffff",
          gray: "#B4B5B6",
          dark: "#FAFAFA66",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
