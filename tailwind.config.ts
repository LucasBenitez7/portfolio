import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        lime: {
          accent: "#b5f23d",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        body: ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
