module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1500px',
      },
      colors: {
        primary: '#489ecd',
        secondary: '#ffaf50',
        'text-primary': '#1b1b1b',
        'text-secondary': '#3a3a3a',
      },
      textColor: (theme) => theme('colors'),
      gradientColorStops: (theme) => ({
        ...theme('colors'),
      }),
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      gridTemplateColumns: {
        price: '1fr 120px',
        priceSmall: '1fr 84px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
