import { transform } from 'typescript'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Scan all JS/TS/React files in src/
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
      // keyframes:{
      //   "bounce":{
      //     '0%':{transform:-translate-y-10},
      //     '50%':{transform:translate-y-30},
      //     '80%':{transform:-translate-y-6},
      //     '100%':{transform:translate-y-0}
      //   },
        
      // },
      // animation:{
      //   'bounce':'bounce 0.5s ease-out'
      // }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}
