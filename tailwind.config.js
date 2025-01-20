/** @type {import('tailwindcss').Config} */
import animated from "tailwindcss-animated";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        league: ["League Script", "cursive"],
      },
      colors: {
        lightTheme: {
          primary: "#A9D8FF", // Soft Baby Blue
          secondary: "#3A8DFF", // Bright Sky Blue
          background: "#F2F2F2", // Light Gray
          accent: "#FF3700", // Bright Orange Red
          text: "#000000", // Pure Black
        },
        darkTheme: {
          primary: "#002E6E", // Deep Navy Blue
          secondary: "#1B4F91", // Midnight Blue
          background: "#121212", // Rich Black
          accent: "#00C8FF", // Neon Cyan Blue
          text: "#FFFFFF", // Pure White
        },
      },
    },
  },
  plugins: [animated],
};