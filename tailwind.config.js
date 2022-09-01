/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/*.{html,js,jsx,tsx}', './components/*/.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#9356A0',
        light: '#000',
      },
    },
    extend: {},
  },
  plugins: [],
}
