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
      backgroundImage: {
        url: "url(https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
