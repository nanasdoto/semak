/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: ["#156E3E"],
        secondary: ["#EDFFF5"],
        tertiary: ["#B0D6C1"],
        xgrey: ["#6F6F6F"],
      },
    },
  },
  plugins: [],
}

