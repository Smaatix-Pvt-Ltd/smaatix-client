// tailwind.config.js
module.exports = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          background: 'rgb(var(--background) / <alpha-value>)',
          text: 'rgb(var(--text) / <alpha-value>)',
          primary: 'rgb(var(--primary) / <alpha-value>)',
          accent: 'rgb(var(--accent) / <alpha-value>)',
          border: 'rgb(var(--border) / <alpha-value>)',
        },
        animation: {
          // Grid animations
          'grid-float': 'gridFloat 15s ease-in-out infinite alternate',
          'grid-pulse': 'gridPulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'grid-dots': 'gridDots 25s linear infinite',
          
          // Modern effects
          'blob': 'blob 7s ease-in-out infinite',
          'noise': 'noise 1s steps(2) infinite',

          // Existing animations
            'fade-in': 'fadeIn var(--animation-medium) ease-in forwards',
            'slide-up': 'slideInUp var(--animation-medium) ease-out forwards',
            'slide-left': 'slideInLeft var(--animation-medium) ease-out forwards',
            'slide-right': 'slideInRight var(--animation-medium) ease-out forwards',
            'float': 'float 4s ease-in-out infinite',
            'glow': 'glow 3s ease-in-out infinite',
            'custom-pulse': 'pulse 2s ease-in-out infinite',
        },
        keyframes: {
          gridFloat: {
            '0%, 100%': { transform: 'translateY(0) translateX(0)' },
            '50%': { transform: 'translateY(5%) translateX(2%)' },
          },
          gridPulse: {
            '0%, 100%': { opacity: '0.15' },
            '50%': { opacity: '0.25' },
          },
          gridDots: {
            '0%': { 'background-position': '0 0' },
            '100%': { 'background-position': '100px 100px' },
          },
          blob: {
            '0%': { transform: 'scale(1) rotate(0deg)' },
            '33%': { transform: 'scale(1.1) rotate(3deg)' },
            '66%': { transform: 'scale(0.9) rotate(-3deg)' },
            '100%': { transform: 'scale(1) rotate(0deg)' },
          },
          noise: {
            '0%': { 'background-position': '0 0' },
            '100%': { 'background-position': '20px 20px' },
          },
        },
        backgroundImage: {
          'grid-dots': `radial-gradient(circle at center, 
                        rgb(var(--border)) 1px, 
                        transparent 1px)`,
          'grid-lines': `linear-gradient(to right, 
                        rgb(var(--border)/0.3) 1px, 
                        transparent 1px),
                        linear-gradient(to bottom, 
                        rgb(var(--border)/0.3) 1px, 
                        transparent 1px)`,
          'noise-pattern': `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
        },
        backgroundSize: {
          'grid-dots': '30px 30px',
          'grid-lines': '40px 40px',
          'noise': '20px 20px',
        },
      },
    },
    plugins: [
      function({ addUtilities }) {
        addUtilities({
          '.modern-grid': {
            '@apply relative before:absolute before:inset-0 before:bg-grid-lines before:bg-grid-lines before:animate-grid-float after:absolute after:inset-0 after:bg-grid-dots after:bg-grid-dots after:animate-grid-dots': {},
          },
          '.noise-overlay': {
            '@apply after:absolute after:inset-0 after:bg-noise-pattern after:bg-noise after:animate-noise after:pointer-events-none': {},
          },
          '.blob-effect': {
            '@apply hover:animate-blob transition-transform duration-300': {},
          },
        });
      },
    ],
  };