/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // inclut ton index.html
    "./src/**/*.{js,ts,jsx,tsx}", // inclut tous tes fichiers React
  ],
  darkMode: "class", // active le mode sombre basé sur une classe
  theme: {
    extend: {},
  },
  plugins: [],
};
