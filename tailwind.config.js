module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'xss': '.60rem',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
