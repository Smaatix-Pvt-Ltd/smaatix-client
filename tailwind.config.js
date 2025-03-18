module.exports = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0070f3', // Example blue color
                    foreground: '#ffffff', // Example white text
                },
                destructive: {
                    DEFAULT: '#ef4444', // Example red color
                    foreground: '#ffffff', // Example white text
                },
                secondary: {
                    DEFAULT: '#6b7280', // Example gray color
                    foreground: '#ffffff', // Example white text
                },
                accent: {
                    DEFAULT: '#f3f4f6', // Example light gray color
                    foreground: '#030712', // Example dark text
                },
                input: '#e5e7eb',
                ring: '#0070f3',
                background: '#ffffff',
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
            },
            animation: {
                'fade-in': 'fadeIn 2s ease-in-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};
