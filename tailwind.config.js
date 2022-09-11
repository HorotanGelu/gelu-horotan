/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/*.{html,js,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#181818',
        primaryLighter: '#242424',
        secondary: '#E5E5E5',
      },
    },
  },
  plugins: [],
}
