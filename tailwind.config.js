/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontSize: {
      xs:'0.75rem',
      sm: '1rem',
      base: '1.5rem', 
      lg: '2rem',
      xl: '2.5rem',
      '2xl': '3rem',
      '3xl': '4rem',
      '4xl':'6rem',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1600px',
      
    },
    extend: {
      fontFamily: {
        sans: ['"Assistant Variable"'],
      },
      colors: {
        primary: '#002c16',
        secondary:'#ffd3e9',
        grey:'#F5F5F5',
        accent:'#ffd3e9',
      },
    },
  },
}
