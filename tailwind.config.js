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
        primary_s_2: '#0d061a',
        primary_s: '#0e061d',
        primary: '#100720',
        primary_t: '#282036',
        primary_t_2: '#40394d',
        secondary_s_2: '#b7b7b7',
        secondary_s: '#cecece',
        secondary: '#E5E5E5',
        secondary_t: '#e8e8e8',
        secondary_t_2: '#eaeaea',
        amaranth_s_2: '#7f2253',
        amaranth_s: '#8f275e',
        amaranth: '#9F2B68',
        amaranth_t: '#a94077',
        amaranth_t_2: '#b25586',
        byz_s_2: '#6a2a5e',
        byz_s: '#782f6a',
        byz: '#853476',
        byz_t: '#914884',
        byz_t_2: '#9d5d91',
      },
      fontFamily: {
        exosoft: ['exo-soft', 'sans-serif'],
      },
    },
  },

  plugins: [require('@headlessui/tailwindcss'), { prefix: 'ui' }],
}
