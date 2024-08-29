/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          700: '#7B4F3F', // Navbar'da kullanılan koyu kahverengi
          500: '#A0522D', // Hover renk tonu için biraz daha açık kahverengi
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
