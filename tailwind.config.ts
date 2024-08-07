import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'laptop': '1100px',
         // => @media (min-width: 1100px) { ... }
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        stock: [defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
