export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#f97316", // orange-500
        accent2: "#e11d48", // rose-600
        sunset: {
          light: "#fdba74",
          DEFAULT: "#ea580c",
          dark: "#9a3412"
        }
      },
      borderRadius: {
        xl: "1.25rem"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(2,6,23,0.6)"
      },
      animation: {
        marquee: "marquee 25s linear infinite"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        }
      }
    }
  },
  plugins: []
};
