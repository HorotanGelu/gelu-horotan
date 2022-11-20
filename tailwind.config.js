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
      clipPath: {
         rightPoint: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);',
         chevronRight:
            'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);',
      },
      extend: {
         colors: {
            primary_s_2: '#010a10',
            primary_s: '#020e16',
            primary: '#02111B',
            primary_t: '#1b2932',
            primary_t_2: '#354149',
            secondary_s_2: '#cacaca',
            secondary_s: '#e3e3e3',
            secondary: '#FCFCFC',
            secondary_t: '#fdfdfd',
            secondary_t_2: '#fefefe',
            accent_s_2: '#4e42a3',
            accent_s: '#574bb8',
            accent: '#6153CC',
            accent_t: '#7164d1',
            accent_t_2: '#8175d6',
            success: '#47A025',
            error: '#D62828',
            error_s: '#ab2020',
         },
         fontFamily: {
            exosoft: ['exo-soft', 'sans-serif'],
         },
      },
   },

   plugins: [
      require('@headlessui/tailwindcss'),
      require('tailwind-clip-path'),
      { prefix: 'ui' },
   ],
}
