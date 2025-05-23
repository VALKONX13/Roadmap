/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        //
      },
      colors: {
        arkPurple: "#8C52FF",
      },
      fontFamily: {
        azeret: ["var(--font-azeret-mono)"],
      },
    },
  },
  plugins: [],
};
