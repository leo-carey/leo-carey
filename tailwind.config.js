/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        100: '#F4F3ED',
        200: '#f7f7f7'
      },
      secondary: {
        100: '#4E5340',
        200: '#3B3F31',
        300: '#2B2E23',
        400: '#1D1F18',
        500: '#070707'
      }
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

