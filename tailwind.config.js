const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            xs: "350px",
            ...defaultTheme.screens,
        },
        extend: {
            animation: {
                "spin-slow": "spin 12s linear infinite",
            },
            colors: {
                gray: colors.trueGray,
            },
        },
        container: {
            padding: {
                DEFAULT: "1rem",
                md: "2rem",
            },
            center: true,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
