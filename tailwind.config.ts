import type { Config } from "tailwindcss";
import { COLORS } from "./src/constants";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: COLORS,
      borderRadius: {
        "20": "20px",
      },
    },
  },
  plugins: [],
};
export default config;
