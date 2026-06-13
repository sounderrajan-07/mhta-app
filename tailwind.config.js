/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a',
          primary: '#800000',       // Dark Maroon (same in both themes)
          secondary: '#993333',     // Deep Red
          tertiary: '#802A2A',      // Dark Brick Red
          mutedRed: '#804040',      // Muted Red
          highlight: '#FF0000',     // Bright Red Highlight
          // ── Dynamic tokens (switched via CSS vars in index.css) ──
          bg:        'var(--color-bg)',
          surface:   'var(--color-surface)',
          border:    'var(--color-border)',
          text:      'var(--color-text)',
          textMuted: 'var(--color-textMuted)',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary':   '0 0 20px -5px rgba(128, 0, 0, 0.5)',
        'glow-highlight': '0 0 25px -5px rgba(255, 0, 0, 0.6)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'blob':  'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%':   { transform: 'translate(0px, 0px) scale(1)' },
          '33%':  { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%':  { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
