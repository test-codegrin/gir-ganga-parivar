/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./Component/**/*.{js,ts,jsx,tsx}",   // 👈 add this
    "./components/**/*.{js,ts,jsx,tsx}",  // keep if exists
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        tealBrand: "var(--color-tealBrand)",
        cyanBrand: "var(--color-cyanBrand)",
      },
    },
  },
  plugins: [],
};