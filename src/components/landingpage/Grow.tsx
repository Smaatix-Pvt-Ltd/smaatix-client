// src/components/Grow.tsx
import React from 'react';
import Lottie from 'react-lottie-player'; // Import Lottie player
import { Button } from '../UI/button'; // Assuming Button component exists and is typed
import { FaArrowRight } from 'react-icons/fa';

import lottieJson from '../../assets/office.json'; // Example import path

const Grow: React.FC = () => {
    return (
        <section className='relative py-24 md:py-32 mt-10'>
            <div className='container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-y-12 md:gap-x-12 lg:gap-x-20'>
                {/* Left Side - Lottie Animation */}
                <div
                    className='md:w-1/2 w-full max-w-lg lg:max-w-xl flex justify-center items-center animate-fadeInUp'
                    style={{ animationDelay: '200ms' }}
                >
                    {/* --- USE LOTTIE WITH animationData --- */}
                    <Lottie
                        loop
                        play
                        animationData={lottieJson} // Use the imported JSON data object
                        // REMOVE path prop if it was present
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '450px',
                        }} // Adjusted max-width slightly
                        className='aspect-square md:aspect-auto'
                    />
                    {/* --- END LOTTIE USAGE --- */}
                </div>

                {/* Right Side - Text Content */}
                <div
                    className='md:w-1/2 w-full text-center md:text-left animate-fadeInUp'
                    style={{ animationDelay: '400ms' }} // Stagger animation
                >
                    <h3 className='text-base font-medium uppercase tracking-wider text-foreground-secondary mb-3'>
                        The Sky’s The Limit
                    </h3>
                    {/* Use theme text colors, adjusted font size/leading */}
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight md:leading-snug mb-6'>
                        We Create Unique Solutions To Your Unique Needs! That
                        Help Your Business Grow
                    </h2>
                    {/* Use Button component variants from your UI system */}
                    <Button
                        variant='default'
                        size='lg'
                        asChild
                    >
                        <a href='/products'>
                            {' '}
                            {/* Link to relevant page */}
                            <span className='mr-2'>Learn More</span>
                            <FaArrowRight />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Grow;
