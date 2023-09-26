/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: 'white',
      secondary: 'black'
    },
    screens: {
      xs: '320px',
      sm: '475px',
      md: '768px',
      lg: '992px',
      xlg: '1200px',
      '2xl': '1440px'
    }
  },
  plugins: [],
}