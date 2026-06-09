import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // 黒×白基調。墨のような近似黒と、温かみのある白・霧色。
        ink: {
          950: '#0a0a0a',
          900: '#121211',
          800: '#1b1b1a',
          700: '#2c2c2a',
          600: '#454440',
          500: '#6b6963',
        },
        paper: '#ffffff',
        mist: '#f5f4f1',
        sand: '#eceae4',
        line: '#e2dfd8',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        brand: '0.32em',
      },
      maxWidth: {
        content: '76rem',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}

export default config
