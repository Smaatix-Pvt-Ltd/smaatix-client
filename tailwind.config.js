// No need for this unless framer-motion plugin is used:
// const { transform } = require('framer-motion');
const defaultTheme = require('tailwindcss/defaultTheme'); // Good practice if using defaultTheme

module.exports = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                // --- ShadCN/UI Style Colors (Keep if using components that need them) ---
                primary: {
                    DEFAULT: '#0070f3',
                    foreground: '#ffffff',
                },
                destructive: {
                    DEFAULT: '#ef4444',
                    foreground: '#ffffff',
                },
                secondary: {
                    DEFAULT: '#6b7280',
                    foreground: '#ffffff',
                },
                accent: {
                    // NOTE: This key 'accent' conflicts with the one below. Rename one if needed.
                    DEFAULT: '#f3f4f6',
                    foreground: '#030712',
                },
                input: '#e5e7eb',
                ring: '#0070f3',
                // --- Your Custom Theme Colors (using CSS Vars) ---
                background: {
                    DEFAULT: 'var(--color-background-via)',
                    start: 'var(--color-background-start)',
                    end: 'var(--color-background-end)',
                },
                foreground: {
                    DEFAULT: 'var(--color-text-primary)',
                    secondary: 'var(--color-text-secondary)',
                },
                accent: {
                    // NOTE: This key 'accent' conflicts with the one above. Rename one if needed.
                    // This one is likely used by your heading-gradient.
                    start: 'var(--color-text-accent-start)',
                    end: 'var(--color-text-accent-end)',
                },
                interactive: {
                    DEFAULT: 'var(--color-interactive-bg)',
                    hover: 'var(--color-interactive-bg-hover)',
                },
                border: 'var(--color-border)',
                // --- Specific Palette Colors ---
                purple: {
                    50: '#f5f3ff',
                    100: '#ede9fe',
                    600: '#7c3aed',
                    950: '#271d46',
                },
                pink: {
                    50: '#fdf2f8',
                    100: '#fce7f3',
                },
                blue: {
                    400: '#60a5fa',
                    500: '#3b82f6',
                },
                slate: {
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                },
                neutral: {
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    400: '#a3a3a3',
                    600: '#525252',
                    800: '#262626',
                },
            },
            fontFamily: {
                cambria: [
                    'Cambria',
                    'Cochin',
                    'Georgia',
                    'Times',
                    "'Times New Roman'",
                    'serif',
                ],
                // Consider adding your default sans font here if not using Tailwind defaults
                // sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            // CORRECTED ANIMATION DEFINITIONS
            animation: {
                // Maps utility 'animate-roll' to the animation shorthand
                roll: 'roll 3s ease-in-out infinite',
                // Maps utility 'animate-fadeIn' to the animation shorthand
                fadeIn: 'fadeIn 0.5s ease-out forwards',
                // Maps utility 'animate-fadeInUp' to the animation shorthand
                fadeInUp: 'fadeInUp 0.8s ease-out forwards',
                // Maps utility 'animate-subtlePulse' to the animation shorthand
                subtlePulse: 'subtlePulse 2.5s ease-in-out infinite',
            },
            // KEYFRAMES DEFINITIONS (These look mostly correct, just ensure values are strings)
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' }, // Use string value
                    '100%': { opacity: '1' }, // Use string value
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(15px)' }, // Use string value
                    '100%': { opacity: '1', transform: 'translateY(0)' }, // Use string value
                },
                subtlePulse: {
                    '0%, 100%': { opacity: '1' }, // Use string value
                    '50%': { opacity: '0.7' }, // Use string value
                },
                roll: {
                    '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
                    '50%': {
                        transform: 'translateX(0) translateY(0) rotate(180deg)',
                    },
                },
            },
            blur: {
                '4xl': '80px', // Example custom blur, matching --glow-blur if needed
                '5xl': '100px',
            },
        },
    },
    plugins: [],
};
