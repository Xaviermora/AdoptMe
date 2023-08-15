/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      blanco: '#ffffff',
      primario: {
        100: '#8B2522',
        80: '#6F1D1B'
      },
      neutral: {
        primario: '#2E2E2E',
        secundario: {
          100: '#4D4D4D',
          50: '#4d4d4d80'
        }
      },
      hover: '#F5F4FB'
    },
  },
  plugins: [],
}

