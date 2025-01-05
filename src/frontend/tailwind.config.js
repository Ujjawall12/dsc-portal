/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Exo: ["Exo", "sans-serif"],
        Tektur: ["Tektur", "sans-serif"],
        Urbanist: ["Urbanist", "sans-serif"],
      },
      gridTemplateColumns: {
        17: "repeat(17, minmax(0, 1fr))",
      },
      colors: {
        "custom-gray": "#F8FAFC",
      },
    },
  },
  plugins: [],
};
