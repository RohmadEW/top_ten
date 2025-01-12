import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Founders-Grotesk", "sans-serif"],
      serif: ["Founders-Grotesk", "sans-serif"],
      domaine: ["Domaine-Display", "sans-serif"],
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "-0.01em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [daisyui],
};
export default config;
