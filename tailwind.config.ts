import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    fontFamily: {
        primary: "var(--font-hankenGrotesk)",
        serif: "var(--font-serif)",
        logo: "var(--font-goldman)"
    },
    extend: {
        colors: {
            primary: "#252024"
        }
    },
  },
  plugins: [],
};
export default config;
