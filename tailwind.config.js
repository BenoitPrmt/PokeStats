/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary : '#5cb9ff',
        secondary : '#FFCD00',
      },
      backgroundColor: {
        pokeballRed : '#b71c1c',
      }
    },
  },
  plugins: [],
}

