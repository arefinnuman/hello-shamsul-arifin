/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#007CED",

          secondary: "#f9f7ae",

          accent: "#02c9bc",

          neutral: "#555555",

          "base-100": "#ffffff",

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
