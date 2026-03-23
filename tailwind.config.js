/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          sage:           '#7A9E87',
          'sage-dark':    '#4F7562',
          terra:          '#C47B5A',
          'terra-light':  '#E2A882',
          beige:          '#F5F0E8',
          cream:          '#FDFAF5',
          charcoal:       '#2C2C2C',
          muted:          '#6B6B6B',
          sand:           '#DDD5C5',
          mist:           '#F9F5EF',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        warm: '0 4px 24px rgba(196, 123, 90, 0.10)',
        card: '0 2px 16px rgba(44, 44, 44, 0.07)',
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

