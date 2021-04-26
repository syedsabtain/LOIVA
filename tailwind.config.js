const colors = require('tailwindcss/colors')  
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: {
        light:"#ffffff2b",
        midlight:'#ffffff7a',
        DEFAULT:colors.white},
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      primary: {
        light: '#73c5c5',
        DEFAULT: '#73c5c5',
        dark: '#73c5c5',
      }},
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#73c5c5',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
     }),

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
