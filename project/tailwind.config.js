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
        'fundo-gradient': 'linear-gradient-de-90º(to right,rgba(165, 165, 165, 0.19),rgb(155, 155, 155))',
      },
    },
  },
 plugins: [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
  require('@tailwindcss/aspect-ratio'),
  require('@tailwindcss/line-clamp'),
]
};

