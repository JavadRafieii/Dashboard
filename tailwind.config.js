/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Yekan-Light": "Yekan-Light",
        "Yekan-Regular": "Yekan-Regular",
        "Yekan-Bold": "Yekan-Bold",
      },
      backgroundImage: {
        "gray": "linear-gradient(195deg,#42424a,#191919)",
        "primary": "linear-gradient(195deg,#ec407a,#d81b60)",
        "green": "linear-gradient(195deg,#66bb6a,#43a047)",
        "blue": "linear-gradient(195deg,#49a3f1,#1a73e8)",
      },
      boxShadow: {
        "all": "0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06)",
      },
      colors: {
        "pale-gray": "#c7c7c733",
        "primary-color": "#e91e63",
        "blue-color": "#1a73e8",
        "light-gray": "#f0f2f5",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}