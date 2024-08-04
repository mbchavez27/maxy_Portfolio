/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        noisePattern: "url('./assets/noiseTexture.png')",
      },
      fontFamily: {
        Mulish: ["Mulish", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Arimo: ["Arimo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
