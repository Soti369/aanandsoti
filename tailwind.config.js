/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        100: "350px",
        110: "400px",
        120: "500px",
        130: "600px",
      },
      backgroundImage: {
        faltu: "url('/src/components/assets/backr1.png')",
      },
    },
  },
  plugins: [],
};
