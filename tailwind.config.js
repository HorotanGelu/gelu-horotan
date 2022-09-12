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
        primaryTint: '#2f2f2f',
        secondary: '#E5E5E5',
      },
      fontFamily: {
        exosoft: ['exo-soft', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
