import React, { useState } from 'react';

const Contact = ({ colorTheme, setColorTheme }) => {
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
            iconColor: 'text-purple-500',
            lightBg: 'bg-purple-50',
            gradientStart: '#7e22ce',
            gradientEnd: '#a855f7',
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
            iconColor: 'text-teal-500',
            lightBg: 'bg-teal-50',
            gradientStart: '#0d9488',
            gradientEnd: '#14b8a6',
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
            iconColor: 'text-emerald-500',
            lightBg: 'bg-emerald-50',
            gradientStart: '#059669',
            gradientEnd: '#10b981',
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
            iconColor: 'text-blue-500',
            lightBg: 'bg-blue-50',
            gradientStart: '#1d4ed8',
            gradientEnd: '#3b82f6',
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
            iconColor: 'text-rose-500',
            lightBg: 'bg-rose-50',
            gradientStart: '#be123c',
            gradientEnd: '#fb7185',
        },
    };

    const currentTheme = themes[colorTheme];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form logic would go here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className={`relative ${currentTheme.lightBg} py-16`}>
            {/* Background elements */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div
                    className='absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-10'
                    style={{
                        background: `radial-gradient(circle, ${currentTheme.gradientEnd} 0%, transparent 70%)`,
                    }}
                ></div>
                <div
                    className='absolute top-40 right-10 w-32 h-32 rounded-full opacity-10'
                    style={{
                        background: `radial-gradient(circle, ${currentTheme.gradientStart} 0%, transparent 70%)`,
                    }}
                ></div>
            </div>

            <div className='container mx-auto px-4 relative z-10'>
                {/* Section Header */}
                <div className='text-center mb-12'>
                    <h2
                        className={`text-3xl md:text-4xl font-bold mb-3 ${currentTheme.textColor}`}
                    >
                        Do You Want To Boost Your Business?
                    </h2>
                    <div
                        className='w-20 h-1 mx-auto mb-6'
                        style={{ backgroundColor: currentTheme.gradientStart }}
                    ></div>
                    <p className='max-w-2xl mx-auto text-gray-600'>
                        drop us a line and keep in touch
                    </p>
                </div>

                {/* Content Section */}
                <div className='flex flex-col lg:flex-row gap-12 items-center justify-between'>
                    {/* Contact Form */}
                    <div className='w-full lg:w-7/12'>
                        <form
                            onSubmit={handleSubmit}
                            className={`w-full p-8 rounded-xl shadow-lg border ${currentTheme.borderColor} bg-white`}
                        >
                            <div className='mb-6'>
                                <label
                                    htmlFor='name'
                                    className='block text-gray-700 font-medium mb-2'
                                >
                                    Your Name
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${currentTheme.borderColor} focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                                    style={{
                                        focusRing: currentTheme.gradientStart,
                                    }}
                                    placeholder='John Doe'
                                    required
                                />
                            </div>

                            <div className='mb-6'>
                                <label
                                    htmlFor='email'
                                    className='block text-gray-700 font-medium mb-2'
                                >
                                    Email Address
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${currentTheme.borderColor} focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                                    style={{
                                        focusRing: currentTheme.gradientStart,
                                    }}
                                    placeholder='your@email.com'
                                    required
                                />
                            </div>

                            <div className='mb-6'>
                                <label
                                    htmlFor='message'
                                    className='block text-gray-700 font-medium mb-2'
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows='5'
                                    className={`w-full px-4 py-3 rounded-lg border ${currentTheme.borderColor} focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                                    style={{
                                        focusRing: currentTheme.gradientStart,
                                    }}
                                    placeholder='How can we help you?'
                                    required
                                ></textarea>
                            </div>

                            <button
                                type='submit'
                                className={`px-6 py-3 rounded-lg text-white font-medium ${currentTheme.button} transition-all duration-300 hover:shadow-lg w-full md:w-auto`}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className='w-full lg:w-4/12'>
                        <div className={`p-8 rounded-xl bg-white shadow-lg`}>
                            <h3
                                className={`text-2xl font-bold mb-6 ${currentTheme.textColor}`}
                            >
                                Contact Information
                            </h3>

                            <div className='space-y-6'>
                                <div className='flex items-start'>
                                    <div
                                        className={`flex-shrink-0 w-10 h-10 rounded-full ${currentTheme.button} flex items-center justify-center text-white mr-4`}
                                    >
                                        <svg
                                            className='w-5 h-5'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                                            ></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className='font-medium text-gray-800'>
                                            Phone
                                        </h4>
                                        <p className='text-gray-600 mt-1'>
                                            +1 (555) 123-4567
                                        </p>
                                    </div>
                                </div>

                                <div className='flex items-start'>
                                    <div
                                        className={`flex-shrink-0 w-10 h-10 rounded-full ${currentTheme.button} flex items-center justify-center text-white mr-4`}
                                    >
                                        <svg
                                            className='w-5 h-5'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                                            ></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className='font-medium text-gray-800'>
                                            Email
                                        </h4>
                                        <p className='text-gray-600 mt-1'>
                                            contact@yourcompany.com
                                        </p>
                                    </div>
                                </div>

                                <div className='flex items-start'>
                                    <div
                                        className={`flex-shrink-0 w-10 h-10 rounded-full ${currentTheme.button} flex items-center justify-center text-white mr-4`}
                                    >
                                        <svg
                                            className='w-5 h-5'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                                            ></path>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                                            ></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className='font-medium text-gray-800'>
                                            Location
                                        </h4>
                                        <p className='text-gray-600 mt-1'>
                                            123 Business Ave, Suite 100
                                            <br />
                                            San Francisco, CA 94107
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-8'>
                                <h4
                                    className={`font-medium mb-4 ${currentTheme.textColor}`}
                                >
                                    Follow Us
                                </h4>
                                <div className='flex space-x-4'>
                                    <a
                                        href='#'
                                        className={`w-10 h-10 rounded-full ${currentTheme.button} flex items-center justify-center text-white hover:opacity-90 transition-opacity`}
                                    >
                                        <svg
                                            className='w-5 h-5'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
                                        </svg>
                                    </a>
                                    <a
                                        href='#'
                                        className={`w-10 h-10 rounded-full ${currentTheme.button} flex items-center justify-center text-white hover:opacity-90 transition-opacity`}
                                    >
                                        <svg
                                            className='w-5 h-5'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'></path>
                                        </svg>
                                    </a>
                                    <a
                                        href='#'
                                        className={`w-10 h-10 rounded-full ${currentTheme.button} flex items-center justify-center text-white hover:opacity-90 transition-opacity`}
                                    >
                                        <svg
                                            className='w-5 h-5'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path d='M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z'></path>
                                        </svg>
                                    </a>
                                    <a
                                        href='#'
                                        className={`w-10 h-10 rounded-full ${currentTheme.button} flex items-center justify-center text-white hover:opacity-90 transition-opacity`}
                                    >
                                        <svg
                                            className='w-5 h-5'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Wave at the Bottom - Positioned at the bottom */}
            <div className='absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0'>
                <svg
                    className='relative block w-full h-[50em]'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1200 120'
                    preserveAspectRatio='none'
                >
                    <path
                        d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
                        fill='#ffffff'
                        opacity='1'
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default Contact;
