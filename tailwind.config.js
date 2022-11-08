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
            primary_s_2: '#0a0f13',
            primary_s: '#0d141a',
            primary: '#101920',
            primary_t: '#40474d',
            primary_t_2: '#707579',
            secondary_s_2: '#7c8284',
            secondary_s: '#a6adb0',
            secondary: '#cfd8dc',
            secondary_t: '#d9e0e3',
            secondary_t_2: '#e2e8ea',
            accent_s_2: '#988b0d',
            accent_s: '#cbb911',
            accent: '#fee715',
            accent_t: '#feec44',
            accent_t_2: '#fef173',
         },
         fontFamily: {
            exosoft: ['exo-soft', 'sans-serif'],
         },
      },
   },

   plugins: [require('@headlessui/tailwindcss'), { prefix: 'ui' }],
}
