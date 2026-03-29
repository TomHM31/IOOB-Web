/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          900: '#8B0000',
        },
        blue: {
          900: '#1a3a52',
        },
      },
      fontSize: {
        base: '1.125rem',
      },
      lineHeight: {
        relaxed: '1.75',
      },
    },
  },
  plugins: [],
};
