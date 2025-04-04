import React from 'react';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';
import { Button } from '../UI/button'; // Adjust path if needed

import clsx from 'clsx';

const Hero: React.FC = () => {
    return (
        // This div has .has-corner-glows. Its ::after pseudo-element
        // will now render outside its bounds because overflow:hidden was removed in CSS.
        <div
            className={clsx(
                'has-corner-glows flex items-center justify-center min-h-[90vh] px-4 py-20 md:py-28 text-center '
            )}
        >
            {/* Container for content - z-index ensures it's above the pseudo-elements */}
            <div className='container relative z-10 mx-auto flex flex-col items-center'>
                {/* Tagline */}
                <h3
                    className='mb-4 text-lg font-medium tracking-wide text-foreground-secondary animate-fadeInUp duration-100'
                    // style={{ animationDelay: '100ms' }}
                >
                    Go Beyond Your Wildest Dreams
                </h3>

                {/* Main Heading */}
                <h1
                    className='mb-6 max-w-4xl text-4xl font-bold leading-tight heading-gradient sm:text-5xl md:text-6xl lg:text-7xl animate-fadeInUp duration-200'
                    // style={{ animationDelay: '250ms' }}
                >
                    Your Digital Presence Is About To Take Off
                </h1>

                {/* Paragraph */}
                <p
                    className='mb-8 max-w-2xl text-base opacity-90 text-foreground-secondary md:text-lg animate-fadeInUp duration-300'
                    // style={{ animationDelay: '400ms' }}
                >
                    Transform your business with cutting-edge technology
                    solutions tailored to your unique needs.
                </p>

                {/* Button Group */}
                <div className='flex flex-col gap-4 sm:flex-row sm:justify-center animate-fadeInUp duration-1000 delay-500'>
                    <Button
                        variant='default'
                        size='lg'
                        asChild
                    >
                        <a href='/contact'>
                            <span className='mr-2'>Get Started</span>
                            <FaArrowRight />
                        </a>
                    </Button>
                    <Button
                        variant='secondary'
                        size='lg'
                        asChild
                        className='dark:text-primary-foreground'
                    >
                        <a href='/products'>Our Services</a>
                    </Button>
                </div>
            </div>

            {/*  Scroll Down Indicator */}
            <div className='absolute bottom-10 left-1/2 -translate-x-1/2 z-20'>
                <a href='#grow'>
                    <FaArrowDown className='scroll-indicator animate-subtlePulse text-2xl' />
                </a>
            </div>
        </div>
    );
};

export default Hero;
