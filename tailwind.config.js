/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {},
    extend: {},
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        "*, *:before, *:after": {
          "-webkitTapHighlightColor": "transparent",
        },
        "#root": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh",
        },
        body: {
          fontFamily: '"Ubuntu", sans-serif',
          minWidth: "320px",
          lineHeight: "normal",
        },
        main: {
          flex: "1 1 auto",
        },
        ".container": {
          maxWidth: "1176px",
          margin: "0 auto",
          padding: "0 28px",
        },
      });
    }),
  ],
};
