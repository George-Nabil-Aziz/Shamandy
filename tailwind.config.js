const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#9E9E9E",
        darkBackgroundColor: "#795548",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
