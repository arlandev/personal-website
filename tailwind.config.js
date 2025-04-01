/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        zinc: {
          100: "oklch(0.967 0.003 264.542)",
        },
      },
    },
  },
  plugins: [],
};
