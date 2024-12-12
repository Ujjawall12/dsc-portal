/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Exo: ["Exo", "sans-serif"],
        Chakra: ["Chakra_Petch", "sans-serif"],
        Hedvig: ["Hedvig_letters_Sans", "sans-serif"],
        Nunito_Sans: ["Nunito_Sans", "sans-serif"],
        Tektur: ["Tektur", "sans-serif"],
      },
    },
  },
  plugins: [],
};
