/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        BgWebsite: "#FAFAFA",
        PannelBtn: "#FFA52F",
        ViewDetails: "#232321",
        ShopBtn: "#4A69E2",
        FooterTitle: "#E7E7E3",
      },
      fontFamily: {
        Rubik: "Rubik, sans-serif",
      },
    },
  },
  plugins: [],
};
