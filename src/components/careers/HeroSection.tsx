import React, { useState, useEffect } from 'react';
import { Button } from '../UI/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className='h-screen dark:text-white flex items-center justify-center text-center bg-gradient-to-r from-purple-800 dark:from-black to-slate-100 dark:to-zinc-800 '>
            <div className='absolute top-60 w-96 h-96 rounded-full bg-gradient-to-br from-purple-900 to-purple-700  dark:from-purple-800 dark:to-purple-300 blur-3xl opacity-900 animate-blob animation-delay-2000 z-0'></div>
            <div className='hero-content z-10'>
                <h1 className='text-5xl max-md:text-3xl font-bold mb-5 z-50'>
                    Join Our Team and Shape the Future of Technology
                </h1>
                <p className='text-lg md:text-xl mb-8 text-gray-100'>
                    Explore exciting career opportunities at Smaatix
                </p>
                <a
                    href='#job-listings'
                    className='cta-button'
                >
                    <Button
                        variant={'destructive'}
                        size={'lg'}
                        className='rounded-full hover:bg-red-600'
                    >
                        View Open Positions
                    </Button>
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
