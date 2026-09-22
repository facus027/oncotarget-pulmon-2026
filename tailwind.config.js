/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        onco: {
          dark: "#013f4e",
          primary: "#04696f",
          accent: "#16aaa9",
          light: "#79c2d0",
          text: "#606060",
          gray: "#b6b7b8",
          surface: "#f3f4f5",
        },
      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },

  plugins: [],
}