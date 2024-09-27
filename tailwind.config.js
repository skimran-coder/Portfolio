/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background-color)',
        text: 'var(--text-color)',
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
      fontFamily: {
        'merriweather': ['"Merriweather Sans"', 'sans-serif'],
        'playfair': ["Playfair", "serif"],
        'roboto' : ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}