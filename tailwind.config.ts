import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#121212',
      blackLight: '#1B1B1B',
      background: '#181818',
      white: '#fff',
      gray: ' #8A8A8F',
      orange: '#FF9B33',
      profileGray: '#929292',
      profileBorder: '#1F1F1F',
      resultsGray: '#B2B2B2',
    },
    screens: {
      sm: '640px',
      md: '950px',
      '2xl': '1440px',
    },
    extend: {
      lineHeight: {
        '14': '14px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
