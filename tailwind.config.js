/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        70:"70px",
        100:"100px",
      },
      
      height: {
        fullvh : "100vh"
      },

      lineHeight:{
        90:"90px",
      },

      fontFamily:{
        sacramento : ["Sacramento", "sans-serif"]
      }

    },
  },
  plugins: [],
}
