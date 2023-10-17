// /** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], content: [],
  theme: {
    extend: {
      colors: {
        'primary': '#010625',
        ...defaultTheme
      },
    },
    screens: {
      sm: { 'min': '250px', 'max': '640px' },
      md: { 'min': '641px', 'max': '768px' },
      "md-max": { 'max': '768px' },
      lg: { 'min': '769px', 'max': '1024px' },
      "lg-max": { 'max': '1024px' },
      xl: { 'min': '1025px', 'max': '1299px' },
      "xl-max": { 'max': '1299px' },
      '2xl': '1300px',
    },
    plugins: [],
  }

}