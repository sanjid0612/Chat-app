/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
      },
    },
    extend: {
      screens: {
        '2xl': { min: '1600px' },
      },
      fontFamily: {
        poppins: ["var(--poppins)"],
        inter: ["var(--inter)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      gray: "#C9C9C9",
      ash: {
        300: "#F5F5F5",
        400: "#EEEEEE",
        500: "#999999",
      },
      red: {
        200: "#FFE5E5",
        300: "#CB7476",
        400: "#850E10",
      },
    },
  },
  plugins: [],
};

