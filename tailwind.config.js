/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dmSans': ["DM Sans","sans-serif" ],
        'nunito': ["Nunito","sans-serif" ],
      },
      backgroundImage: {
        'banner': "url('./src/assets/img/HeroBanner.png')",
        'plan': "url('./src/assets/img/Start New Project With Us.png')",
      }
    },
  },
  plugins: [],
}