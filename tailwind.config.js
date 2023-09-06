/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-bg": "rgba(255, 255, 255, 0.04)",
      },
      right: {
        'right-10': '90%', 
      },
    },
  },
  plugins: [],
};
