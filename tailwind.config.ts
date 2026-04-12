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
        primary: '#7B2FF7',
        'primary-dark': '#5a1fc9',
        'neon-blue': '#00d4ff',
        'neon-violet': '#a855f7',
        'dark-bg': '#0a0a0f',
        'dark-surface': '#12121a',
        'dark-card': '#1a1a24',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        display: ['var(--font-clash)', 'var(--font-outfit)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-premium':
          'linear-gradient(135deg, #7B2FF7 0%, #a855f7 50%, #00d4ff 100%)',
        'gradient-glow':
          'radial-gradient(ellipse at center, rgba(123, 47, 247, 0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(123, 47, 247, 0.3)',
        'glow-sm': '0 0 20px rgba(123, 47, 247, 0.2)',
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
