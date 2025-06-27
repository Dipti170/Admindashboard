/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",  // A beautiful indigo
        secondary: "#e0f2fe",
        accent: "#38bdf8",
      },
    },
  },
  plugins: [],
};
