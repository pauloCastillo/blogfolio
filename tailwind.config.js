/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, ts}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
