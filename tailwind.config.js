/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif', 'Poppins']
      },
      gridTemplateColumns: {
        '70/30':'70% 28%',
      },
    }
  },
  plugins: []
}
