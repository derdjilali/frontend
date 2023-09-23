/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: '#DC3D3D',
        },
        secondary: {
          200: '#1A1A1A',
        },
      },
      keyframes: {
        slideToLeft: {
          '0%': {
            transform: 'translateX(4.1rem)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        hide: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
      animation: {
        slideToLeft: 'slideToLeft 400ms ease-in-out',
        hide: 'hide 550ms ease-in-out',
      },
    },
  },
  plugins: [],
}
