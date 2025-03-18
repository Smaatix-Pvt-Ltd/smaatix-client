// import React from 'react';
import './Grow.css';
import { Button } from '../UI/button';

const Grow = () => {
    return (
        <section className='relative bg-white py-20 overflow-hidden dark:bg-zinc-800 dark:text-white'>
            {/* Decorative blobs in the background */}
            <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0'>
                {/* Blob 1 - Top left */}
                <div
                    className={`absolute top-52 left-2/3 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full lg:bg-gradient-to-br from-purple-500 to-purple-300 blur-3xl opacity-900 animate-blob animation-delay-1000 `}
                ></div>

                {/* Blob 2 - Center left */}
                <div
                    className={`absolute top-1/3 -right-118 w-96 h-96 rounded-full max-md:bg-gradient-to-bl from-purple-800 to-purple-200 blur-3xl opacity-90 animate-blob animation-delay-4000`}
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
                        className={`text-4xl font-bold transition-colors leading-tight mt-2`}
                    >
                        We Create Unique Solutions To Your Unique Needs! That
                        Help Your Business Grow
                    </h2>
                    <Button className='bg-purple-900 hover:bg-purple-600 text-white rounded-[100px] mt-4'>
                        Learn More →
                    </Button>
                </div>
            </div>

            {/* Add some CSS animations for the blobs */}
        </section>
    );
};

export default Grow;
