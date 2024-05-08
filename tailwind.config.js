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
                ".bg-tab": {
                    background: "linear-gradient(90.79deg, #6E46E5 0.68%, #194EC4 61.75%, rgba(28, 249, 239, 0.9) 134.9%)",
                },
                ".bg-button": {
                    background: "linear-gradient(90deg, #6E46E5 0%, #194EC4 48.5%, #00DBE2 100%)",
                },
                ".bg-switcher": {
                    background: "linear-gradient(270deg, #494949 29.28%, #5A5A5A 78.75%)",
                },
            });
        }),
    ],
};
