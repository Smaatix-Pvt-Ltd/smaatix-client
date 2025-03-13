
import './Hero.css';
import { Button } from '../UI/button';


const Hero = ({ colorTheme, setColorTheme }) => {
    // Theme configuration
    const themes = {
        purple: {
            topBar: 'bg-purple-900',
            navGradient:
                'bg-gradient-to-r from-black via-purple-900 to-purple-500',
            heroGradient:
                'bg-gradient-to-r from-black via-purple-900 to-purple-500',
            hoverText: 'hover:text-purple-200',
            button: 'bg-purple-600 hover:bg-purple-700',
            contactButton: 'text-purple-900 hover:bg-purple-50',
            dropdownHover: 'hover:bg-purple-50',
            decorCircle1: 'bg-purple-700',
            decorCircle2: 'bg-purple-300',
        },
        teal: {
            topBar: 'bg-teal-900',
            navGradient: 'bg-gradient-to-r from-black via-teal-900 to-teal-500',
            heroGradient:
                'bg-gradient-to-r from-black via-teal-900 to-teal-500',
            hoverText: 'hover:text-teal-200',
            button: 'bg-teal-600 hover:bg-teal-700',
            contactButton: 'text-teal-900 hover:bg-teal-50',
            dropdownHover: 'hover:bg-teal-50',
            decorCircle1: 'bg-teal-700',
            decorCircle2: 'bg-teal-300',
        },
        emerald: {
            topBar: 'bg-emerald-900',
            navGradient:
                'bg-gradient-to-r from-black via-emerald-900 to-emerald-500',
            heroGradient:
                'bg-gradient-to-r from-black via-emerald-900 to-emerald-500',
            hoverText: 'hover:text-emerald-200',
            button: 'bg-emerald-600 hover:bg-emerald-700',
            contactButton: 'text-emerald-900 hover:bg-emerald-50',
            dropdownHover: 'hover:bg-emerald-50',
            decorCircle1: 'bg-emerald-700',
            decorCircle2: 'bg-emerald-300',
        },
        blue: {
            topBar: 'bg-blue-900',
            navGradient: 'bg-gradient-to-r from-black via-blue-900 to-blue-500',
            heroGradient:
                'bg-gradient-to-r from-black via-blue-900 to-blue-500',
            hoverText: 'hover:text-blue-200',
            button: 'bg-blue-600 hover:bg-blue-700',
            contactButton: 'text-blue-900 hover:bg-blue-50',
            dropdownHover: 'hover:bg-blue-50',
            decorCircle1: 'bg-blue-700',
            decorCircle2: 'bg-blue-300',
        },
        rose: {
            topBar: 'bg-rose-900',
            navGradient: 'bg-gradient-to-r from-black via-rose-900 to-rose-500',
            heroGradient:
                'bg-gradient-to-r from-black via-rose-900 to-rose-500',
            hoverText: 'hover:text-rose-200',
            button: 'bg-rose-600 hover:bg-rose-700',
            contactButton: 'text-rose-900 hover:bg-rose-50',
            dropdownHover: 'hover:bg-rose-50',
            decorCircle1: 'bg-rose-700',
            decorCircle2: 'bg-rose-300',
        },
    };

    const currentTheme = themes[colorTheme];

    return (
        <>
            {/* Theme Selector (visible only in development) */}
            <div className='fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg p-2'>
                <div className='flex space-x-2'>
                    <Button
                        onClick={() => setColorTheme('purple')}
                        className='w-6 h-6 rounded-full bg-gradient-to-r from-black to-purple-500 border-2 border-white'
                    ></Button>
                    <Button
                        onClick={() => setColorTheme('teal')}
                        className='w-6 h-6 rounded-full bg-gradient-to-r from-black to-teal-500 border-2 border-white'
                    ></Button>
                    <Button
                        onClick={() => setColorTheme('emerald')}
                        className='w-6 h-6 rounded-full bg-gradient-to-r from-black to-emerald-500 border-2 border-white'
                    ></Button>
                    <Button
                        onClick={() => setColorTheme('blue')}
                        className='w-6 h-6 rounded-full bg-gradient-to-r from-black to-blue-500 border-2 border-white'
                    ></Button>
                    <Button
                        onClick={() => setColorTheme('rose')}
                        className='w-6 h-6 rounded-full bg-gradient-to-r from-black to-rose-500 border-2 border-white'
                    ></Button>
                </div>
            </div>

            {/* Top bar */}

            {/* Main navigation */}


            {/* Hero section with wave */}

        </>
    );
};

export default Hero;
