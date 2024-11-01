/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-magenta': 'hsl(300, 43%, 22%)',
        'soft-pink': 'hsl(333, 80%, 67%)',
        'dark-grayish-magenta': 'hsl(303, 10%, 53%)',
        'light-grayish-magenta': 'hsl(300, 24%, 96%)',
        'white': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
      },
      fontSize: {
        'sm': '0.9375rem',
      },
      width: {
        '88': '21rem',
        '72': '17.3rem',
        '96': '26rem',
        '426': '426px'
      },
      maxWidth: {
        '6xl': '67rem'
      },
      height: {
        '56': '14.5rem'
      }
    },
  },
  plugins: [],
}

