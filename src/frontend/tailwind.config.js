/** @type {import('tailwindcss').Config} */
export default {
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
