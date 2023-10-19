/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,css}"],
  theme: {
    extend: {
      backgroundColor: {
        white: "hsl(0, 0%, 100%)",
        lightgray: "hsl(212, 45%, 89%)",
      },
      textColor: {
        grayish: "hsl(220, 15%, 55%)",
        darkblue: "hsl(218, 44%, 22%)",
      },
    },
  },
  plugins: [],
};
