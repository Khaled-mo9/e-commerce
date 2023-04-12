/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: '480px',
        sm: '639px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        bodyBg: "#EAEDED",
        grayColor: "#AAAAAA",
        whiteColor: "#f1f1f1",
        blackColor: "#242424",
        blueColor: "#0079c1",
        blueDark: "#003666",
        redColor: "#ce181e",
        grayLight: "hsl(30, 25%, 89%)",
        nav: "hsl(223, 31%, 20%)",
        specialbg: "hsl(225, 21%, 49%)",
        organgKey: "hsl(6, 63%, 50%)"
      }
    },
  },
  plugins: [],
}