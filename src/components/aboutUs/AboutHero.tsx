import React from 'react';

const AboutHero = () => {
    return (
        <section
            className='relative pt-0 px-5 min-h-screen text-center   bg-gradient-to-r from-purple-800 to-purple-400 dark:bg-gradient-to-r
            dark:from-black dark:to-zinc-900 overflow-hidden flex items-center justify-center'
        >
            <div className='absolute  w-96 h-96 rounded-full bg-gradient-to-br from-purple-900 to-purple-700  dark:from-purple-800 dark:to-purple-300 blur-3xl opacity-900 animate-blob animation-delay-2000 z-0'></div>
            <div className='hero-content z-10'>
                <h1 className='text-5xl font-bold mb-5 animate-fade-in'>
                    Innovating the Future, One Solution at a Time
                </h1>
                <p className='text-2xl mb-8 animate-fade-in'>
                    Empowering businesses with cutting-edge software solutions.
                </p>
                <a
                    href='#services'
                    className='bg-purple-800 text-white py-4 px-8 rounded-full text-xl transition-colors hover:bg-indigo-800 animate-fade-in '
                >
                    Explore Our Services
                </a>
            </div>
        </section>
    );
};

export default AboutHero;
