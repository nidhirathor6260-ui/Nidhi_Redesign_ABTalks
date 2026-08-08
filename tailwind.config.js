/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0B0F19',
          card: '#131B2E',
          cardBorder: '#1F293D',
          primary: '#6366F1', // Indigo accent
          primaryHover: '#4F46E5',
          cyber: '#10B981',   // Neon Emerald green for streak/verification
          cyberGlow: 'rgba(16, 185, 129, 0.25)',
          orange: '#F97316',  // Fire orange
          accent: '#EC4899',  // Hot pink accent
          amber: '#F59E0B',
          textMuted: '#94A3B8',
          textLight: '#F8FAFC'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace']
      },
      boxShadow: {
        'glow-primary': '0 0 25px -5px rgba(99, 102, 241, 0.4)',
        'glow-cyber': '0 0 25px -5px rgba(16, 185, 129, 0.4)',
        'glow-orange': '0 0 25px -5px rgba(249, 115, 22, 0.4)'
      },
      animation: {
        'flame-pulse': 'flame 1.8s infinite ease-in-out',
        'subtle-float': 'float 4s infinite ease-in-out',
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out'
      },
      keyframes: {
        flame: {
          '0%, 100%': { transform: 'scale(1)', filter: 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.8))' },
          '50%': { transform: 'scale(1.12)', filter: 'drop-shadow(0 0 16px rgba(249, 115, 22, 1))' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}
