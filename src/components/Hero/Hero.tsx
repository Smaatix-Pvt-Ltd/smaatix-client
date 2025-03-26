import React, { useState } from 'react';
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaCog } from 'react-icons/fa';
import { Button } from '../UI/button';
const Hero = () => {
    return (
        <div className='relative h-[700px] font-[montserrat] dark:bg-zinc-800 dark:text-white'>
            {/* Background with gradient */}
            <div
                className={`w-full h-full  flex flex-col justify-center items-center text-white bg-gradient-to-r from-purple-900 to-purple-400 dark:bg-gradient-to-r dark:from-black dark:to-[#1b1b1b]/80`}
            >
                <div className='container mx-auto px-6 flex flex-col md:flex-row justify-between items-center z-10 relative'>
                    {/* Left Column */}
                    <div className='md:w-1/2 text-center md:text-left mb-8 md:mb-0'>
                        <h3 className='text-xl font-medium mb-4 text-gray-400 tracking-wide'>
                            Go Beyond Your Wildest Dreams
                        </h3>
                        <h1 className='text-6xl md:text-5xl font-bold mb-6 leading-tight'>
                            Your Digital Presence Is About To Take Off
                        </h1>
                        <p className='mb-8 text-sm opacity-90 font-medium text-gray-200'>
                            Transform your business with cutting-edge technology
                            solutions tailored to your unique needs.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
                            <Button
                                variant={'gradient'}
                                size={'lg'}
                                className='max-sm:w-full'
                            >
                                <a
                                    href='/contact'
                                    className={`inline-flex items-center justify-center  text-white  px-6 py-3 rounded-lg font-medium transition-colors`}
                                >
                                    <span className='mr-2'>Get Started</span>{' '}
                                    <FaArrowRight />
                                </a>
                            </Button>
                            <Button
                                className={`bg-purple-500 hover:bg-purple-400`}
                                size={'lg'}
                            >
                                <a
                                    href='/services'
                                    className='inline-flex items-center justify-center  text-white  px-6 py-3 rounded-lg font-medium transition-colors'
                                >
                                    <span>Our Services</span>
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Add an image or illustration here */}
                    <div className='md:w-2/5 hidden md:block'>
                        <div className='bg-transparent  p-6 rounded-lg  '>
                            <img
                                src='https://www.smaatix.com/wp-content/uploads/2022/02/Hero-Home-page-new.png'
                                alt='Hero'
                                className='w-full h-full md:max-h-3xl md:max-w-3xl rounded-b-[100px] rounded-tl-[300px] rounded-tr-[150px]'
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave shape */}
            <div className='absolute bottom-0 left-0 w-full overflow-hidden leading-none'>
                <svg
                    className='relative block w-full h-24 transform rotate-180 fill-white dark:fill-zinc-800'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1200 120'
                    preserveAspectRatio='none'
                >
                    <path
                        d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
                        opacity='1'
                    ></path>
                </svg>
            </div>

            {/* Circular decorative elements */}
            <div className='absolute left-10 top-20 w-96 h-96 rounded-full bg-gradient-to-br from-purple-800 to-purple-300 blur-3xl opacity-900 animate-blob animation-delay-2000'></div>
            <div
                className={`absolute right-20 bottom-40 w-64 h-64   backdrop-blur-3xl ba rounded-full opacity-20 blur-sm animate-blob animation-delay-2000 bg-purple-900`}
            ></div>
        </div>
    );
};

export default Hero;
