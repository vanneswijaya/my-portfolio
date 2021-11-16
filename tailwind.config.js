module.exports = {
  purge: [
    './public/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#293241",
        orange: "#ee6c4d",
        light: "#e0fbfc",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}