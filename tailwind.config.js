/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'noto': ['Noto Sans', 'sans-serif'],
        'roboto-condense': ["Roboto Condensed", "sans-serif"],
        'inter': ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
}