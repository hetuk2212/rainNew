/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JSX and TSX files
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'], // Custom font family
      },
      animation: {
        slide: 'slide 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        round: 'round 3s linear infinite', // Add round animation
      },
      keyframes: {
        slide: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-100%)' },
        },
        round: {
          '0%': {
            transform: 'scale(0.8)',
            opacity: '0.4',
          },
          '50%': {
            transform: 'scale(1.2)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1.5)',
            opacity: '0',
          },
        },
      },
      colors: {
        customBlue: '#EFF1F9', // Light blue
        mainLogo: '#36afff', // Logo blue
        blueDark: '#1e73be', // Darker blue
      },
      fontSize: {
        '4xl': '4.25rem', // Custom font size
      },
      lineHeight: {
        '4xl': '4.5rem', // Custom line height
      },
    },
  },
  plugins: [],
};
