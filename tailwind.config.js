/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#0d0d0d",
        primaryWhite: "#f2f2f2",
        primaryOrange: "#e9967a",
        primaryGray: "#e4d8d8",
        secondaryBlack: "rgba(13, 13, 13, 0.7)",
        dimWhite: "rgba(0,0,0,0.1)",
        lightBlack: "rgba(0,0,0,0.7)",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        dimShadow: "0px 0px 2px rgba(0,0,0,0.5)",
        darkShadow: "0px 0px 10px rgba(0,0,0,0.5)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
