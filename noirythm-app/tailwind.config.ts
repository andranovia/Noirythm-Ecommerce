import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "425px",
        md: "576px",
        lg: "768px",
        xl: "1024px",
        "1xl": "1279.98px",
        "2xl": "1440px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        "2xl": "80rem",
        "1xl": "68rem",
        xl: "54rem",
        lg: "42rem",
        md: "30.5rem",
        sm: "24rem",
        xs: "22rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
