/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        display: 'Henriete Bold',
      }
    },
    fontFamily: {
      henriete: ["Henriete Bold"],
      oldschool: ['Oldschool'],
      sans: ["Merriweather"],
    },
    colors: {
      gray: '#4e4e4eff',
      graylight: '#f0f0f0ff',
      black: '#000000ff',
      gold: '#ffc633ff',
      white: '#ffffff'
    }
  },
  plugins: [],
}

