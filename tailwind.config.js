/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poller: ['"Poller One"', 'sans-serif'],
        roboto: ['"Roboto Mono"', 'monospace'],
      },
      keyframes: {
        moveInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100px)',
          },

          '80%': {
            transform: 'translateX(10px)',
          },

          '100%': {
            opacity: '1',
            transform: 'translate(0)',
          },
        },
        moveInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(100px)',
          },

          '80%': {
            transform: 'translateX(-10px)',
          },

          '100%': {
            opacity: '1',
            transform: 'translate(0)',
          },
        },
      },
      animation: {
        'move-in-left': 'moveInLeft 1s ease-out',
        'move-in-right': 'moveInRight 1s ease-out',
      },
      plugins: [],
    },
  },
};
