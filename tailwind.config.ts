import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#522A6F',
        'primary-dark': '#371C4B',
        'neon-blue': '#DDAAFF',
        'neon-violet': '#F29CB7',
        'dark-bg': '#222023',
        'dark-surface': '#19181A',
        'dark-card': '#2D2A2E',
        'accent-yellow': '#FBCF4F',
        'light-accent': '#FAEADD',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        display: ['var(--font-clash)', 'var(--font-outfit)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-premium':
          'linear-gradient(135deg, #522A6F 0%, #F29CB7 50%, #FBCF4F 100%)',
        'gradient-glow':
          'radial-gradient(ellipse at center, rgba(82, 42, 111, 0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(82, 42, 111, 0.3)',
        'glow-sm': '0 0 20px rgba(82, 42, 111, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
