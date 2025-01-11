
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nav:"#18191F",
        dark_blue:"#023562",
        light_blue:"#65B7FF",
        custom_grey:"#8D92A2",
        title:"#1E1E1E",
        table:"#292D32",
        table_header:"#4D4D4D"
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
