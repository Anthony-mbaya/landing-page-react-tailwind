/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'tabletview': "url('media/bg-tablet-pattern.svg')",
        'desktopview': "url('media/bg-simplify-section-desktop.svg')",
        'mobileview': "url('media/bg-simplify-section-mobile.svg')",
      },
    },
  },
  plugins: [],
}

