/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure React components are scanned for Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


