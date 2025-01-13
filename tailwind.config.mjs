/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#786AC2",
        secondary: "#F69625",
        lowgray: "#7A7A7A",
        success: {
          bg: "rgba(107, 185, 39, 0.1)",
          text: "rgba(107, 185, 39, 1)",
        },
        warn: {
          bg: "#FEEED6",
          text: "#916A42",
        },
        danger: {
          bg: "rgba(254, 236, 234, 1)",
          text: "#91533F",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
