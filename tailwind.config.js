/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#800000", light: "#a32323", dark: "#5f0000" },
        accent: { DEFAULT: "#f59e0b", soft: "#fffbeb" }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.08)",
        lift: "0 12px 40px rgba(0,0,0,.12)"
      },
      borderRadius: { brand: "1.25rem" }
    }
  },
  plugins: [],
};
