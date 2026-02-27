export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#4f46e5",
        accent2: "#22c55e"
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
