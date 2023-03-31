/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#36d12e",

          secondary: "#35279e",

          accent: "#87edaa",

          neutral: "#1A1424",

          "base-100": "#E3EAEE",

          info: "#81CBDF",

          success: "#21E489",

          warning: "#F1A44B",

          error: "#E74727",
        },
      },
    ],
  },
  plugins: [],
};

