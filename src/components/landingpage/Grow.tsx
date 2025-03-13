import React from 'react';
import './Grow.css';
import { Button } from '../UI/button';

const Grow = ({ colorTheme, setColorTheme }) => {
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
            textColor: 'text-purple-800',
            borderColor: 'border-purple-200',
            blobColor: 'from-purple-500/30 to-purple-300/20',
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
            textColor: 'text-teal-800',
            borderColor: 'border-teal-200',
            blobColor: 'from-teal-500/30 to-teal-300/20',
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
            textColor: 'text-emerald-800',
            borderColor: 'border-emerald-200',
            blobColor: 'from-emerald-500/30 to-emerald-300/20',
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
            textColor: 'text-blue-800',
            borderColor: 'border-blue-200',
            blobColor: 'from-blue-500/30 to-blue-300/20',
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
            textColor: 'text-rose-800',
            borderColor: 'border-rose-200',
            blobColor: 'from-rose-500/30 to-rose-300/20',
        },
    };

    const currentTheme = themes[colorTheme];

    return (
        <section className='relative bg-white py-20 overflow-hidden'>
            {/* Decorative blobs in the background */}
            <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0'>
                {/* Blob 1 - Top left */}
                <div
                    className={`absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br ${currentTheme.blobColor} blur-3xl opacity-90 animate-blob`}
                ></div>

                {/* Blob 2 - Bottom right */}
                <div
                    className={`absolute top-1/3 right-32 w-96 h-96 rounded-full bg-gradient-to-tl ${currentTheme.blobColor} blur-3xl opacity-90 animate-blob animation-delay-2000`}
                ></div>

                {/* Blob 3 - Center right */}
                <div
                    className={`absolute top-1/3 -right-118 w-96 h-96 rounded-full bg-gradient-to-bl ${currentTheme.blobColor} blur-3xl opacity-90 animate-blob animation-delay-4000`}
                ></div>
            </div>

            {/* Main content */}
            <div className='container mx-auto gap-3   px-6 relative z-10 flex flex-col md:flex-row items-center justify-between py-16'>
                {/* Left Side - Image */}
                <div className='md:w-1/2  relative'>
                    <img
                        src='https://www.smaatix.com/wp-content/uploads/2022/02/Intro-Home-page-new.png'
                        alt='Team Meeting'
                        className='w-full max-w-lg rounded-b-[100px] rounded-tr-[300px] rounded-tl-[150px] shadow-lg'
                    />
                </div>

                {/* Right Side - Text Content */}
                <div className='md:w-1/2 mt-8 md:mt-0 text-center md:text-left'>
                    <h3 className='text-gray-500 text-sm uppercase'>
                        The Sky’s The Limit
                    </h3>
                    <h2
                        className={`text-4xl font-bold transition-colors leading-tight mt-2 ${currentTheme}`}
                    >
                        We Create Unique Solutions To Your Unique Needs! That
                        Help Your Business Grow
                    </h2>
                    <Button className='bg-purple-900 hover:bg-purple-600 text-white rounded-[100px]'>
                        Learn More →
                    </Button>
                </div>
            </div>

            {/* Add some CSS animations for the blobs */}
        </section>
    );
};

export default Grow;
