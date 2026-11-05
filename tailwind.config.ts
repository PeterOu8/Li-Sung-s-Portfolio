import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        md: '3rem',
        sm: '8rem',
      },
    },
    fontFamily: {
      primary: 'var(--font-hankenGrotesk)',
      serif: 'var(--font-serif)',
    },
    extend: {
      colors: {
        primary: '#c96716',
        background: '#f0eee6',
        surface: '#FBFBFB',
        foreground: '#242526',
        muted: '#585A5B',
        border: '#D6D7D4',
        subtle: '#F6EDDD',
        danger: '#B42318',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
