const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        textColor: "#785e00", // "#1f2937",
        darkTextColor: "#ffeb3b",
        backgroundColor: "#f3f4f6",
        darkBackgroundColor: "#607d8b",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
