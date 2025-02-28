/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mario: ["Mario", "sans-serif"],
        sans: ["Montserrat"],
      },
      colors: {
        "m-red": "#e71e06",
        "m-blue": "#019cda",
        "m-green": "#42b133",
        "m-yellow": "#fcd000",
        "m-navy": "#2765d6",
        "m-light-blue": "#519bde",
      },
      backgroundImage: {
        banner: "url('./src/assets/img/banner.png')",
        "skills-pattern": "url('./src/assets/img/bg-section-skills.png')",
        "projects-pattern": "url('./src/assets/img/bg-section-projects.png')",
        "my-world-pattern": "url('./src/assets/img/bg-section-my-world.png')",
        "contact-me-pattern": "url('./src/assets/img/bg-contact-me.png')",
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
        imageFadeIn: {
          from: { opacity: 0.7 },
          to: { opacity: 1 },
        },
        banner: {
          from: { backgroundPosition: "0% 0%" },
          to: { backgroundPosition: "100% 0%" },
        },
      },
      animation: {
        spinY: "spinY 2s ease-in-out infinite",
        spinCoinY: "spinY 2s linear infinite",
        fadeIn: "fadeIn 1s",
        imageFadeIn: "imageFadeIn 1s linear infinite",
        banner: "banner 15s linear infinite alternate",
      },
    },
  },
  plugins: [],
});
