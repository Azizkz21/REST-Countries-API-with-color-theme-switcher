/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "hsl(207, 26%, 17%)",
        darkEl: "hsl(209, 23%, 22%)",
        darkText: "hsl(0, 100%, 100%)",

        lightText: "hsl(200, 15%, 8%)",
        inputBg: "hsl(0, 0%, 50%)",
        lightBg: "hsl(0, 0%, 99%)",
      },
      boxShadow: {
        light: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        dark: "rgba(245, 245, 245, 0.2) 0 0 8px",
      },
      height: {
        h150: "150px",
      },
    },
  },
  plugins: [],
};
