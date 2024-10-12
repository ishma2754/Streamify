/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#2a3447",
        "soft-bg": "#384256",
        "dark-bg": "#222b3c",
        "main-color": "#ffffff",
        "soft-color": "#dddddd",
        "dark-color": "#2a3447",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
