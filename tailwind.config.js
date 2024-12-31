/** @type {import('tailwindcss').Config} */
export default {
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
        "m-blue-navy": "#2765d6",
        "m-light-blue": "#519bde",
        "m-blue-sky": "#9ce6e6",
      },
      backgroundImage: {
        banner: "url('./src/assets/img/banner.png')",
        "skills-pattern": "url('./src/assets/img/bg-section-skills.png')",
        "projects-pattern": "url('./src/assets/img/bg-section-projects.png')",
        "my-world-pattern": "url('./src/assets/img/bg-section-my-world.png')",
        "footer-pattern": "url('./src/assets/img/bg-footer.png')",
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
