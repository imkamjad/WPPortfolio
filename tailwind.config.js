/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#0B0F17',
          surface: '#131924',
          card: '#1A2332',
          border: '#243044',
        },
        accent: {
          DEFAULT: '#F59E0B', // Warm Amber Gold
          hover: '#D97706',
          light: '#FBBF24',
          glow: 'rgba(245, 158, 11, 0.15)',
        },
        brand: {
          blue: '#3B82F6',
          purple: '#8B5CF6',
          emerald: '#10B981',
          cyan: '#06B6D4',
        },
        muted: {
          DEFAULT: '#94A3B8',
          dark: '#64748B',
          light: '#CBD5E1',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
