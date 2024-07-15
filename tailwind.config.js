/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        noisePattern: "url('./assets/noiseTexture.png')",
      },
      fontFamily: {
        Monsterrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
