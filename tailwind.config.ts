/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        plateia: ['Plateia Bold', 'sans-serif'],
      },
      letterSpacing: {
        specialSmall: '.2em',
        special: '.5em',
      },
      maxWidth: {
        card: '300px',
        cardNormal: '250px',
        phoneSmall: '300px',
      },
      width: {
        '100vw': '100vw',
        watermarkWidth: '500px',
        watermarkWidthLg: '800px',
      },
      height: {
        '100vh': '100vh',
        watermarkHeight: '500px',
        watermarkHeightLg: '800px',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
