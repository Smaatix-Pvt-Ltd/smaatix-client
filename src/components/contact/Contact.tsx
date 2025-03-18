import React from 'react';
import ContactForm from './ContactForm';
import ContactCard from './ContactCard';

const Contact = () => {
    return (
        <section className='relative py-16 h-auto min-h-screen dark:text-white dark:bg-zinc-800 sm:h-fit'>
            {/* Background elements */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute top-40 w-48 h-48 rounded-full bg-gradient-to-br from-purple-800 to-purple-300 blur-xl opacity-900 animate-blob animation-delay-2000 z-10'></div>
            </div>

            <div className='container mx-auto px-4 relative z-10'>
                {/* Section Header */}
                <div className='text-center mb-12'>
                    <h2 className='text-2xl md:text-3xl font-bold mb-4 lg:pr-14'>
                        Do You Want To Boost Your Business?
                    </h2>

                    <p className='max-w-2xl mx-auto'>
                        drop us a line and keep in touch
                    </p>
                </div>

                {/* Content Section */}
                <div className='flex flex-col md:flex-row gap-4 items-center justify-center md:h-full max-md:w-full max-md:mx-auto'>
                    {/* Contact Form */}
                    <ContactForm />

                    {/* Contact Information */}
                    <div className='hidden md:block '>
                        {' '}
                        {/* Show on medium screens and up */}
                        <ContactCard />
                    </div>
                </div>
            </div>

            {/* Decorative Wave at the Bottom - Positioned at the bottom */}
            <div className='absolute bottom-0 left-0 w-full bg-purple-100 dark:bg-zinc-400 overflow-hidden leading-none z-0'>
                <svg
                    className='relative block w-full h-[25em] md:h-[50em]'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1200 120'
                    preserveAspectRatio='none'
                >
                    <path
                        d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
                        className='fill-white dark:fill-zinc-800'
                        opacity='1'
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default Contact;
