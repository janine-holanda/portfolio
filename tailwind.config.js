/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mario: ["Mario", "sans-serif"],
      },
      colors: {
        "m-red": "#e71e06",
        "m-blue": "#019cda",
        "m-green": "#42b133",
        "m-yellow": "#fcd000",
        "m-blue-navy": "#2765d6",
        "m-light-blue": "#519bde",
        "m-blue-sky": "#9ce6e6",
      },
      keyframes: {
        spinY: {
          from: { transform: "rotateY(0deg)" },
          to: { transform: "rotateY(360deg)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        spinY: "spinY 2s ease-in-out infinite",
        fadeIn: "fadeIn 1s",
      },
    },
  },
  plugins: [],
};
