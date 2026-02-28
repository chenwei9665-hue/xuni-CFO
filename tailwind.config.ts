import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef5ff",
          500: "#225cff",
          700: "#1f3f9a",
          900: "#0f1830"
        }
      }
    }
  },
  plugins: []
};

export default config;
