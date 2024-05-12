/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          "background-color": "hsl(240, 70%, 98%)",
          "gradient-primary": "linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))",
        },
        neutral: {
          "background-color": "hsl(240, 70%, 98%)",
          "very-light-grayish-blue": "hsl(240, 78%, 98%)",
          "light-grayish-blue": "hsl(234, 14%, 74%)",
          "grayish-blue": "hsl(233, 13%, 49%)",
          "dark-grayish-blue": "hsl(232, 13%, 33%)",
          "grayish-line-color": "hsl(221, 14%, 89%)",
        },
      },
    },
  },
  plugins: [],
};
