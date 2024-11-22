/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryW: "#FDFBFE",
        primaryB: "#5cb9ff",
        gradientR: "#ee1515",
        gradientB: "#872729",
        gradientW: "#f0f0f0",
      },
      container: {
        center: true,
        screens: {
          sm: '600px',
          md: '728px',
          lg: '1000px',
          xl: '1300px',
          '2xl': '1300px'
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}