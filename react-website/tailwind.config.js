/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors:{
        primary:"#741E18",
        secondary:"#F8F7F1",
        tertiary:"#5F1818",
      }
      
    },
  },
  plugins: [],
}
