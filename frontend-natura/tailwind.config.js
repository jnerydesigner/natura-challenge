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
      gray: {
        100: '#F0F0F0',
        200: '#E8E8E8',
        300: '#E0E0E0',
        400: '#DCDCDC',
        500: '#D0D0D0',
        600: '#B0B0B0',
        700: '#A8A8A8',
        800: '#909090',
        900: '#696969',    

      },
      graylight: '#f0f0f0ff',
      black: '#000000ff',
      gold: '#ffc633ff',
      white: '#ffffff',
      inputGray: '#f0f0f0ff',
      inputGrayDark: '#e0e0e0ff',
    }
  },
  plugins: [],
}

