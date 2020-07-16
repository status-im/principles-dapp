module.exports = {
  theme: {
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Roboto', 'sans-serif']
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      borderRadius: {
        default: '8px'
      },
      inset: {
        '1/2': '50%',
        '1': '100%'
      }
    },
    colors: {
      white: '#fff',
      black: '#000',
      blue: {
        200: '#ECEFFC',
        500: '#A1AFEF',
        800: '#6980E5',
        900: '#5670E2',
        'base': '#4360DF'
      },
      gray: {
        100: '#EEF2F5',
        500: '#9D9FA4',
        700: '#535353',
        900: '#090909',
      },
      red: {
        100: '#FFEAEE',
        900: '#FF2D55'
      },
      green: {
        100: '#EDFBEF',
        900: '#4EBC60',
      }
    }
  },
  variants: {},
  plugins: []
}