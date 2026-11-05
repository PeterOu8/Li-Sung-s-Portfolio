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
        DEFAULT: '1.25rem',
        sm: '2rem',
        md: '3rem',
      },
    },
    fontFamily: {
      primary: 'var(--font-hankenGrotesk)',
      serif: 'var(--font-serif)',
    },
    extend: {
      colors: {
        primary: '#8A4B08',
        background: '#F7F7F4',
        surface: '#FFFFFF',
        foreground: '#242526',
        muted: '#585A5B',
        border: '#DEDFD9',
        control: '#85877E',
        subtle: '#EEEFEA',
        accent: '#F6E8D1',
        danger: '#B42318',
      },
    },
  },
  plugins: [],
};
export default config;
