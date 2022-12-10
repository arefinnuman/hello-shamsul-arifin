/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff0c20",

          secondary: "#f9f7ae",

          accent: "#02c9bc",

          neutral: "#1D191F",

          "base-100": "#EBF1F4",

          info: "#59B0E3",

          success: "#16794C",

          warning: "#EA9534",

          error: "#F53E19",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
