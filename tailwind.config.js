/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/*.{html,js,jsx,tsx}',
    './src/pages/*/*.{html,js,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}',
    './src/components/*/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary_s_2: '#070708',
        primary_s: '#0E0E12',
        primary: '#1D1D25',
        primary_t: '#2C2C38',
        primary_t_2: '#3B3B4B',
        secondary_s_2: '#b7b7b7',
        secondary_s: '#cecece',
        secondary: '#E5E5E5',
        secondary_t: '#e8e8e8',
        secondary_t_2: '#eaeaea',
        accent_s_2: '#BB5F00',
        accent_s: '#DD7100',
        accent: '#FF8200',
        accent_t: '#FF9322',
        accent_t_2: '#FFA344',
      },
      fontFamily: {
        exosoft: ['exo-soft', 'sans-serif'],
      },
    },
  },

  plugins: [require('@headlessui/tailwindcss'), { prefix: 'ui' }],
}
