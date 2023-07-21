/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor:{
        body:"#C8DAE6"
      },
      fontFamily:{
        lato: ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}

