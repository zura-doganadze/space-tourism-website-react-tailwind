/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('public/home/background-home-desktop.jpg')",
      },
      fontFamily: {
        Barlow: "Barlow condesed",
      },
      backgroundColor: {
        "custom-bg": "rgba(255, 255, 255, 0.04)",
      },
      inset: {
        'right-90': '95%',
      },
      maxWidth: {
        '1360': '1360px',
      },
      fontSize: {
        '150': '150px',
      },
    },
  },
  plugins: [],
};
