module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
      },
      height: {
        60: '15rem',
      },
      width: {
        '45%': '45%',
      },
      colors: {
        primary: '#489ecd',
        'text-primary': '#1b1b1b',
        'text-secondary': '#353535',
        'light-gray': '#f3f3f3',
        'light-blue-gradient-top': '#65bee1',
        'light-blue-gradient-bottom': '#3589c0',
        'dark-blue-gradient-top': '#4380a5',
        'dark-blue-gradient-bottom': '#204a6b',
        'light-gray-gradient-top': '#f7f7f7',
        'light-gray-gradient-bottom': '#ededed',
        'dark-gray-gradient-top': '#3a3a3a',
        'dark-gray-gradient-bottom': '#272727',
      },
      textColor: (theme) => theme('colors'),
      gradientColorStops: (theme) => ({
        ...theme('colors'),
      }),
      fontSize: {
        '4xl': '2.5rem',
      },
      transitionTimingFunction: {
        ease: 'ease',
      },
      opacity: {
        60: '60%',
      },
      backgroundOpacity: {
        15: '0.15',
        90: '0.90',
      },
      spacing: {
        7: '1.75rem',
        18: '4.5rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
