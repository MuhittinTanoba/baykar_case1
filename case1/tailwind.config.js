/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wave-pattern': "url('./src/assets/img/collection/Waves.png')",
     },
      colors: {
        brown: {
          700: '#7B4F3F', 
          500: '#A0522D', 
          "map": "#78350f"
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
