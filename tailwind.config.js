const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      colors:{
        white: colors.white,
        'brand-green': '#00FFCC',
        'brand-background': '#161616',
        'highlight-grey': '#8BA3BA',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('autoprefixer'),
    require('postcss-nested')
  ],
};
