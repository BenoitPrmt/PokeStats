/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['pokemon', 'sans-serif'],
      },
      colors: {
        primaryW: "#FDFBFE",
        primaryB: "#5cb9ff",
        gradientR: "#ee1515",
        gradientB: "#872729",
        gradientW: "#f0f0f0",


        normalPrimaire: "#A8A77A",
        normalSecondaire: "#D1D39B",

        feuPrimaire: "#F08030",
        feuSecondaire: "#F1A05C",

        eauPrimaire: "#6890F0",
        eauSecondaire: "#A6B7F5",

        plantePrimaire: "#78C850",
        planteSecondaire: "#A8D88E",

        electrikPrimaire: "#F8D030",
        electrikSecondaire: "#F9E178",

        glacePrimaire: "#98D8D8",
        glaceSecondaire: "#B1D7D7",

        combatPrimaire: "#C03028",
        combatSecondaire: "#D57D6F",

        poisonPrimaire: "#A040A0",
        poisonSecondaire: "#D15F9A",

        solPrimaire: "#E0C068",
        solSecondaire: "#D9B972",

        volPrimaire: "#A890F0",
        volSecondaire: "#C0A9F5",

        psyPrimaire: "#F85888",
        psySecondaire: "#F8A1C5",

        insectePrimaire: "#A8B820",
        insecteSecondaire: "#A1C24D",

        rochePrimaire: "#B8A038",
        rocheSecondaire: "#C5A65C",

        fantomePrimaire: "#705898",
        fantomeSecondaire: "#9E85B7",

        dragonPrimaire: "#7038F8",
        dragonSecondaire: "#8B69F8",

        tenebresPrimaire: "#705848",
        tenebresSecondaire: "#8E6F5E",

        acierPrimaire: "#B8B8D0",
        acierSecondaire: "#D1D1E0",

        feePrimaire: "#F8A0E0",
        feeSecondaire: "#F1C1E6",
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
      screens: {
        // 'smh': {'raw': '(max-height: 568px)'},
        'smh': {'raw': '(max-height: 768px)'},
        'lgh': {'raw': '(max-height: 1024px)'},
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  safelist: [
    'from-normalPrimaire',
    'via-normalSecondaire',
    'from-feuPrimaire',
    'via-feuSecondaire',
    'from-eauPrimaire',
    'via-eauSecondaire',
    'from-plantePrimaire',
    'via-planteSecondaire',
    'from-electrikPrimaire',
    'via-electrikSecondaire',
    'from-glacePrimaire',
    'via-glaceSecondaire',
    'from-combatPrimaire',
    'via-combatSecondaire',
    'from-poisonPrimaire',
    'via-poisonSecondaire',
    'from-solPrimaire',
    'via-solSecondaire',
    'from-volPrimaire',
    'via-volSecondaire',
    'from-psyPrimaire',
    'via-psySecondaire',
    'from-insectePrimaire',
    'via-insecteSecondaire',
    'from-rochePrimaire',
    'via-rocheSecondaire',
    'from-fantomePrimaire',
    'via-fantomeSecondaire',
    'from-dragonPrimaire',
    'via-dragonSecondaire',
    'from-tenebresPrimaire',
    'via-tenebresSecondaire',
    'from-acierPrimaire',
    'via-acierSecondaire',
    'from-feePrimaire',
    'via-feeSecondaire',
  ],
}