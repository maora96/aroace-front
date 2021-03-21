module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#f6f6f6",
      secondary: "#3f3f44",
      detail: "#b5de9d",
      darkprimary: "#1A1A2E",
      darksecondary: "#FFFFFF",
      darkdetail: "#810081",
    },

    extend: {},
  },
  variants: {
    extend: {
      textColor: ["odd"],
    },
  },
  plugins: [],
};
