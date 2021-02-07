module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: 'all',
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
      },
      height: {
        38: '9.375rem',
        60: '15rem',
      },
      width: {
        38: '9.375rem',
        '45%': '45%',
      },
      colors: {
        primary: '#489ecd',
        secondary: '#ffaf50',
        footer: '#3a3a3a',
        'primary-10': '#f2f8fb',
        'secondary-10': '#fff7ed',
        'text-primary': '#1b1b1b',
        'text-secondary': '#353535',
        'blue-gradient-top': '#65bee1',
        'blue-gradient-bottom': '#3589c0',
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
