/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-transparent': 'rgba(0, 0, 0, 0.85)',
      },
      height: {
        'screen-conversation': 'calc(100vh - 72px - 76px)',
      },
    },
  },
  plugins: [],
}