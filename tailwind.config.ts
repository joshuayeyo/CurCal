import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "title": "34px",
      "label-lg": "34px",
      "label-md": "28px",
      "xs": "20px",
    },
    fontWeight: {
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    extend: {
      colors: {
        background: '#2B2B2B',
        container: '#343434',
        basic: "#EBEBEB",
      },
    },
  },
  plugins: [],
} satisfies Config;
