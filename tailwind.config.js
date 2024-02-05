/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: '"Open Sans", sans-serif',
        Pacifico: '"Pacifico", cursive',
        Poppin: '"Poppins", sans-serif',
      }
    },
    colors:{
      white50:"#F1F8F5",
      white100:"#DCEFE5",
      wrapper200:"#BCDECE",
      background400:"#8FC6AF",
      green400:"#60A78C",
      green500:"#3F8A70",
      green600:"#2D6E59",
      green700:"#245848",
      green800:"#1F463B",
      green900:"#1A3A32",
      green950:"#0E201C"
    }
  },
  plugins: [],
}