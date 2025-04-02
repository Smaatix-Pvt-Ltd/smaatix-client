import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Button } from '../UI/button';
import {BackgroundLines} from '../UI/BackgroundLines';

const Hero = () => {
    return (
        <div className='relative flex justify-center items-center h-screen max-sm:h-[700px] font-outfit bg-background text-text text-center overflow-hidden'>
            {/* Modern Grid Background */}
            <BackgroundLines className='flex justify-center items-center z-10' >

            {/* Optional Floating Blobs */}
            <div className='absolute grid-blob w-96 h-96 rounded-full bg-gradient-to-br from-purple-900 to-purple-700  dark:from-purple-800 dark:to-purple-300 blur-3xl opacity-900  z-0'></div>

            
                   
            {/* Content */}
            <div className='w-full h-fit flex flex-col justify-center items-center relative z-20'>
                <div className='container mx-auto px-6 flex flex-col md:flex-row justify-center items-center'>
                    {/* Left Column */}
                    <div className='md:w-1/2 text-center mb-8 md:mb-0'>
                        <h3 className='text-xl font-medium mb-4 dark:text-gray-300 tracking-wide animate-slide-up delay-200'>
                            Go Beyond Your Wildest Dreams
                        </h3>
                        <h1 className='text-6xl md:text-5xl font-bold mb-6 leading-tight animate-slide-up delay-300'>
                            Your Digital Presence Is About To Take Off
                        </h1>
                        <p className='mb-8 text-sm opacity-90 font-medium animate-slide-up delay-400'>
                            Transform your business with cutting-edge technology
                            solutions tailored to your unique needs.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700'>
                            <Button
                                variant={'gradient'}
                                size={'lg'}
                                className='max-sm:w-full bg-primary hover:bg-accent animate-custom-pulse hover:animate-none shadow-md'
                            >
                                <a
                                    href='/contact'
                                    className='inline-flex items-center justify-center text-white px-6 py-3 rounded-lg font-medium'
                                >
                                    <span className='mr-2'>Get Started</span>
                                    <FaArrowRight className='animate-slide-left' />
                                </a>
                            </Button>
                            <Button
                                className='z-50 shadow-md bg-white text-primary border border-primary hover:bg-gray-50 dark:bg-accent dark:text-white dark:hover:bg-primary'
                                size={'lg'}
                            >
                                <a
                                    href='/services'
                                    className='inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors'
                                >
                                    <span>Our Services</span>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

           
            
            {/* Small floating accent elements */}
            <div className='absolute top-40 right-1/4 w-16 h-16 rounded-full bg-accent opacity-30 animate-custom-pulse delay-300 z-0'
                style={{ animationDuration: '3s' }}
            ></div>
            
            <div className='absolute bottom-40 left-1/4 w-12 h-12 rounded-full bg-primary opacity-20 animate-custom-pulse delay-700 z-0'
                style={{ animationDuration: '4s' }}
            ></div>
            </BackgroundLines>
           
        </div>
    );
};

export default Hero;