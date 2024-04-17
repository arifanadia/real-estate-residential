/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navyBlue: '#27187e',
        skyBlue: '#319ff6'

      },

      fontFamily: {
        galada: 'Galada , cursive',
        openSans: 'Open Sans, sans-serif',
        patrick: 'Patrick Hand, cursive'
      }
    }, animatedSettings: {
      animatedSpeed: 500,
      heartBeatSpeed: 500,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 1000,
      classes: ['bounce', 'heartBeat','bounceInRight']


    }
  },
  plugins: [require("daisyui"),
  require('tailwindcss-animatecss')],
}

