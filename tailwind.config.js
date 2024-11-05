/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [typography, daisyui],
}
