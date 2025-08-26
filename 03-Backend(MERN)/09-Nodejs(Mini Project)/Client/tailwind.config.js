import flowbiteReact from "flowbite-react/plugin/tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide"; 

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".flowbite-react\\class-list.json"
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbiteReact,scrollbarHide],
}