/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: {
        navyBlue : '#27187e',
        skyBlue : '#319ff6'

      },
      fontFamily: {
        galada : 'Galada , cursive',
        openSans:'Open Sans, sans-serif',
        patrick : 'Patrick Hand, cursive'
      }
    },
  },
  plugins: [require("daisyui")],
}

