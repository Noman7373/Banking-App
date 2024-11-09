/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        // Custom breakpoints
        xs: "380px", // Extra small devices (phones)
        sm: "600px", // Small devices (tablets, etc.)
        md: "800px", // Medium devices
        lg: "1024px", // Large devices
        xl: "1280px", // Extra large devices
        "2xl": "1536px", // 2x Extra large devices
      },
      fontFamily: {
        ubuntu: ['"Ubuntu"', "sans-serif"], // Add "Ubuntu" to Tailwind's fontFamily
      },
      colors: {
        darkTheme: "#11001f",
      },
    },
  },
  plugins: [],
};
