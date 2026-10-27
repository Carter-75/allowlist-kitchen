/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['"Public Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: '#f6f1e7',
        cream: '#fffdf7',
        ink: '#22301f',
        pine: { 50:'#eef5ee', 100:'#d8e8d8', 600:'#2e5d3a', 700:'#24492e', 800:'#1c3a2a', 900:'#142a1f' },
        honey: { 400:'#e0a83c', 500:'#cf8f22', 600:'#b57a17' },
      },
    },
  },
  plugins: [],
}
