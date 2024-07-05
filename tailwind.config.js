/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '2xl': '1.5rem',
        "22": '22px' 
      },
      textColor: {
       "brown": '#D29A5A'
      },
      borderColor: {
        "brown": '#D29A5A'
      },
      borderWidth: {
        '3': '3px',
      },
      width: {
        '150': '150px',
        '345': '345px',
        '319': '319px',
        '234': '234px'
      },
      height: {
        '319': '319px',
        '234': '234px',
        '212': '212px'
      },
      opacity: {
        '0': '0',
        '25': '0.25',
        '50': '0.5',
        '75': '0.75',
        '100': '1',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'transparent': 'transparent',
      }),
    },
  },
  plugins: [],
}

