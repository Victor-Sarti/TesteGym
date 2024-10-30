/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: "#111317",
        customDarkGray: "#1f2125",
        customGray: "#35373b",
        customOrange: "#f9ac54",
        customDarkOrange: "#d79447",
        customLightGray: "#d1d5db",
        customWhite: "#ffffff",
      },
    },

  },
  plugins: [],
}