module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./html/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Raleway", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        custom: ["Pacifico", "cursive"],
      },
      colors: {
        primary: {
          100: "#fff2da",
          200: "#ffe4b5",
          300: "#ffd78f",
          400: "#FFE3BF",
          500: "#FF9C1A", // Original primary color
          600: "#ecaa3e",
          700: "#d59938",
          800: "#c38832",
          900: "#ae772c",
        },
        secondary: "#ec1b09",
        background: "#f2f5f9",
        navbar: "#F2F7FC",
      },
    },
  },
};
