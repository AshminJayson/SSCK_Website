/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      
      height: {
        fullvh : "100vh"
      },


      fontFamily:{
        sacramento : ["Sacramento", "sans-serif"],
        roboto : ["Roboto", "sans-serif"],
        kalam: ["Kalam", "sans-serif"],
      },


    },
  },
  plugins: [],
}
