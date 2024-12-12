/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Exo: ["Exo", "sans-serif"],
        Tektur: ["Tektur", "sans-serif"],
      },
    },
  },
  plugins: [],
};
