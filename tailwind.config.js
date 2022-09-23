module.exports = {
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
        primary: {
          100: '#a273ff',
          200: '#935bff',
          300: '#8344ff',
          400: '#742cff',
          500: '#6415FF',
          600: '#5a13e6',
          700: '#5011cc',
          800: '#460fb3',
          900: '#3c0d99',
        },
      },
      maxWidth: {
        72: '18rem',
      },
      zIndex: {
        auto: 'auto',
        '-50': '-50',
        '-40': '-40',
        '-30': '-30',
        '-20': '-20',
        '-10': '-10',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('flowbite/plugin')],
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
  ],
}
