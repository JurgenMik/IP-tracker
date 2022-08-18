const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'pattern-texture': "url('./assets/pattern-bg.png')",
      }
    },
    fontFamily: {
      'sans': ['Rubik', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
