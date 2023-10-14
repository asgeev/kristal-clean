import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
      },
      height: {
        '100vh': '100vh',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
export default config;
