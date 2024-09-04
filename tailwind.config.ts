import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "gunmetal": "#212529",
        "silver": "#BFBFBF",
        "richBlack": "#0A0A0A",
        "dimGray": "#444444",
        "lightGray": "#f2f2f2",
        "eerieBlack": "#1c1c1c",
        "ghostWhite": "#F2F2F3",
        "secondary": "#8a8a8e",
        "primary": "#bfbfbf",
        "charcoal": "#252527",
        "cloudyLavender": "#D9D9DA",
        "bronze": "#CD7F32",
        "darkGray": "#383838",
        "darkerGray": "#2e2e2e"
      },
      gridTemplateColumns: {
        "14": "repeat(14, minmax(0, 1fr))",
        "16": "repeat(16, minmax(0, 1fr))",
        "18": "repeat(18, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
