import React from 'react';
import {
    FaArrowDown,
    FaCloud,
    FaCode,
    FaEnvelope,
    FaPhone,
    FaRocket,
    FaShieldAlt,
} from 'react-icons/fa';
import { Button } from '../UI/button';

const ProductsHero = () => {
    return (
        <section className='relative w-full  py-28 md:py-36 has-corner-glows z-10'>
            {/* Add corner glows if desired for hero */}
            {/* <div className='absolute inset-0 has-corner-glows -z-10'></div> */}
            <div className='container mx-auto px-6 pb-20 relative z-10'>
                <div className='max-w-3xl mx-auto text-center animate-fadeInUp'>
                    <h1 className='text-4xl md:text-5xl lg:text-5xl font-bold text-foreground mb-6'>
                        Empowering Businesses with{' '}
                        <span className='heading-gradient'>
                            {' '}
                            {/* Use heading gradient class */}
                            Scalable Software Solutions
                        </span>
                    </h1>
                    <p className='text-lg md:text-xl text-foreground-secondary mb-10'>
                        Smaatix provides high-performance, secure, and scalable
                        software solutions to help businesses optimize
                        operations, enhance security, and drive innovation.
                    </p>

                    {/* Feature Highlights - styled more subtly */}
                    <div className='grid sm:grid-cols-3 gap-4 mb-12 text-sm'>
                        <div className='flex items-center justify-center gap-2 p-3 rounded-lg bg-background/30 dark:bg-slate-700/50 text-foreground-secondary'>
                            <FaCloud className='h-4 w-4 text-accent-start' />
                            <span>Cloud Applications</span>
                        </div>
                        <div className='flex items-center justify-center gap-2 p-3 rounded-lg bg-background/30 dark:bg-slate-700/50 text-foreground-secondary'>
                            <FaShieldAlt className='h-4 w-4 text-accent-start' />
                            <span>Enterprise Security</span>
                        </div>
                        <div className='flex items-center justify-center gap-2 p-3 rounded-lg bg-background/30 dark:bg-slate-700/50 text-foreground-secondary'>
                            <FaCode className='h-4 w-4 text-accent-start' />
                            <span>Custom Development</span>
                        </div>
                    </div>

                    {/* Buttons - using themed Button component */}
                    <div className='flex flex-wrap justify-center gap-4'>
                        <Button
                            size='lg'
                            variant='default'
                            asChild
                            className='hover:bg-blue-800'
                        >
                            <a href='#get-started'>
                                {' '}
                                {/* Use relevant links */}
                                <FaRocket className='mr-2 h-4 w-4' />
                                Get Started
                            </a>
                        </Button>
                        <Button
                            size='lg'
                            variant='secondary'
                            asChild
                            className='flex max-w-fit border-gray-200'
                        >
                            <a href='#request-demo'>
                                <FaPhone className='mr-2 h-4 w-4' />
                                Request a Demo
                            </a>
                        </Button>
                        <Button
                            size='lg'
                            variant='secondary'
                            asChild
                            className='flex max-w-fit border-gray-200'
                        >
                            <a href='#contact-sales'>
                                <FaEnvelope className='mr-2 h-4 w-4' />
                                Contact Sales
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
            {/*  Scroll Down Indicator */}
            <div className='absolute bottom-10 left-1/2 -translate-x-1/2  z-20'>
                <a href='#products-ocerview'>
                    <FaArrowDown className='scroll-indicator animate-subtlePulse text-2xl' />
                </a>
            </div>
        </section>
    );
};

export default ProductsHero;
