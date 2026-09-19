/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0B132B',
        surface: '#1C2541',
        primary: '#7B2CBF',
        neon: '#9D4EDD',
        offWhite: '#F8F9FA',
        coolGray: '#E0E1DD',
      },
    },
  },
  plugins: [],
}