/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)", // define tu variable CSS
      },
    },
  },
  plugins: [],
}
