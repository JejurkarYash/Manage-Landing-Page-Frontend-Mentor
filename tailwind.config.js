/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    extend: {

      fontFamily: {
        beVietnamPro: ['Be Vietnam Pro'],
      },

      colors: {
        // Primary Colors 
        BrightRed: 'hsl(12, 88%, 59%)',
        BrightRedLight: 'hsl(12, 90%, 90%)',


        DarkBlue: ' hsl(228, 39%, 23%)',
        // Neutrals 
        DarkGrayishBlue: 'hsl(227, 12%, 61%)',
        VeryPaleRed: 'hsl(13, 88%, 80%)',
        VeryDarkBlue: 'hsl(233, 12%, 13%)',
        VaryLightGray: 'hsl(0, 0%, 98%)',

      },
    },

  },

  plugins: [],
}

