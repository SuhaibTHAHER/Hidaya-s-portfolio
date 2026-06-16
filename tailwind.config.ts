import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: { 50: '#FDFBF7', 100: '#FAF7F0', 200: '#F5EFE0', 300: '#EDE3CC', 400: '#E0D1B0', 500: '#CCBA8A', 600: '#B8A070', 700: '#9A8050', 800: '#7A6040', 900: '#5C4830' },
        gold: { 100: '#FDF6E3', 200: '#F9E9A8', 300: '#F5D97A', 400: '#EFC84A', 500: '#D4A017', 600: '#B8860B', 700: '#9A6F08', 800: '#7A5506', 900: '#5C3F04' },
        charcoal: { 50: '#F5F5F4', 100: '#E8E6E3', 200: '#D1CEC9', 300: '#B0ABA3', 400: '#8A8279', 500: '#6B6358', 600: '#524C43', 700: '#3D3830', 800: '#2C2820', 900: '#1A1714', 950: '#0D0B09' },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(30px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #FAF7F0 0%, #F5EFE0 50%, #EDE3CC 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1A1714 0%, #2C2820 50%, #3D3830 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4A017 0%, #B8860B 100%)',
      },
    },
  },
  plugins: [],
}
export default config
