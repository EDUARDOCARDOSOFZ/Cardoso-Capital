/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#f1c40f',
        customBlue: '#090b33', // Nova cor adicionada
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        libre: ['"Libre Baskerville"', 'serif'], // Fonte Libre Baskerville adicionada
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right,rgba(165, 165, 165, 0.77),rgb(54, 54, 54))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

