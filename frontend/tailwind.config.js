/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // "rabbit-red":"#ff1b00",
        'rabbit-pink': '#FF297B',  
      }
    },
  },
  plugins: [],
}