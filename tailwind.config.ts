import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        "background-secondary": "var(--background-secondary)",
        text: "var(--text)",
        "text-secondary": "var(--text-secondary)",
        "text-dark": "var(--text-dark)",
        "primary-dark": "var(--primary-dark)",
        "background-dark": "var(--background-dark)",
        "background-dark-secondary": "var(--background-dark-secondary)",
        "text-secondary-dark": "var(--text-secondary-dark)",
        "blue-hover": "#1a5a9b",
        "blue-card": "#bfc1f5",
        "blue-card-hover": "#b8d2ef",
      },
    },
  },
  plugins: [],
};
export default config;
