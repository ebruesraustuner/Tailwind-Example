const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightpink: '#FFDEE4',
        darkpink: '#FF606C',
        lightblue: '#9FB8FF',
        darkblue: '#1F2673',
        black: '#313131'
      },
      margin: {
        xl: '64px',
        lg: '32px',
        md: '16px',
        sm: '8px'
      },
      padding: {
        xl: '64px',
        lg: '32px',
        md: '16px',
        sm: '8px'
      },
      rotate: {
        '37': '37deg'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
