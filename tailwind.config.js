/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1100px',
    },
    extend: {
      colors: {
        'selfColor': 'rgb(0,0,0,0.3)',
        'backColor': 'rgba(0,0,0,0.6)',
        'buttonColor': 'rgb(229, 9, 20)',
      }
    },
  },
  plugins: [],
}

