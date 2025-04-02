import React from 'react';

export const Stats = () => {
    // Services data
    const services = [
        {
            icon: (
                <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-6 h-6'
                >
                    <rect
                        x='2'
                        y='3'
                        width='20'
                        height='14'
                        rx='2'
                        ry='2'
                    ></rect>
                    <line
                        x1='8'
                        y1='21'
                        x2='16'
                        y2='21'
                    ></line>
                    <line
                        x1='12'
                        y1='17'
                        x2='12'
                        y2='21'
                    ></line>
                </svg>
            ),
            title: 'Software Solutions',
            description:
                'Find your niche requirement with our technology experts.',
            path: '/software-solutions',
        },
        {
            icon: (
                <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-6 h-6'
                >
                    <line
                        x1='12'
                        y1='20'
                        x2='12'
                        y2='10'
                    ></line>
                    <line
                        x1='18'
                        y1='20'
                        x2='18'
                        y2='4'
                    ></line>
                    <line
                        x1='6'
                        y1='20'
                        x2='6'
                        y2='16'
                    ></line>
                    <polyline points='2 20 22 20'></polyline>
                </svg>
            ),
            title: 'Training',
            description:
                'Upgrade / Upskill the latest technology with our experienced team.',
            path: '/training',
        },
        {
            icon: (
                <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-6 h-6'
                >
                    <circle
                        cx='12'
                        cy='8'
                        r='7'
                    ></circle>
                    <polyline points='8.21 13.89 7 23 12 20 17 23 15.79 13.88'></polyline>
                </svg>
            ),
            title: 'Staffing Solution',
            description:
                'Fill your needs of experts with our talent hunting acquisition team.',
            path: '/staffing-solutions',
        },
        {
            icon: (
                <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-6 h-6'
                >
                    <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                    <polyline points='22 4 12 14.01 9 11.01'></polyline>
                </svg>
            ),
            title: 'Products',
            description: 'Check out our products.',
            path: '/products',
        },
        {
            icon: (
                <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-6 h-6'
                >
                    <rect
                        x='3'
                        y='3'
                        width='18'
                        height='18'
                        rx='2'
                        ry='2'
                    ></rect>
                    <circle
                        cx='8.5'
                        cy='8.5'
                        r='1.5'
                    ></circle>
                    <polyline points='21 15 16 10 5 21'></polyline>
                </svg>
            ),
            title: 'Careers',
            description:
                'Give your employees, partners and clients the gift of choice.',
            path: '/careers',
        },
        {
            icon: (
                <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-6 h-6'
                >
                    <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'></path>
                    <polyline points='14 2 14 8 20 8'></polyline>
                    <line
                        x1='16'
                        y1='13'
                        x2='8'
                        y2='13'
                    ></line>
                    <line
                        x1='16'
                        y1='17'
                        x2='8'
                        y2='17'
                    ></line>
                    <polyline points='10 9 9 9 8 9'></polyline>
                </svg>
            ),
            title: 'About Us',
            description: 'Take your time to know about our company.',
            path: '/about-us',
        },
    ];

    return (
        <section className='relative w-full bg:transparent dark:text-white p-16 overflow-hidden'>
            {/* Section Header */}
            <div className='container   mx-auto px-4 mb-12 text-center'>
                <h2
                    className={`sm:text-3xl md:text-4xl lg:text-5xl font-bold  font-serif mb-3 text-purple-900`}
                >
                    Our Services
                </h2>
                <div className='w-20 h-1 mx-auto mb-6'></div>
                <p className='max-w-2xl mx-auto text-gray-600 dark:text-gray-200'>
                    Comprehensive business solutions tailored to meet your
                    specific needs
                </p>
            </div>

            {/* Services cards grid */}
            <div className=' mx-auto z-10 bg-transparent'>
                <div className='bg-transparent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-8'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='relative bg-purple-200 dark:bg-black/40 dark:border dark:border-zinc-600  rounded-xl shadow-lg hover:shadow-xltransition-shadow  overflow-hidden group hover:-translate-x-1 hover:-translate-y-2 transition-transform duration-300'
                        >
                            <div className='p-6 h-full flex flex-col'>
                                {/* Icon with themed background */}
                                <div
                                    className={`w-10 h-10 rounded-lg flex items-center bg-zinc-200  dark:bg-zinc-600 justify-center  mb-6 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <div>{service.icon}</div>
                                </div>

                                {/* Content */}
                                <a href={service.path}>
                                    <span className='absolute inset-0 cursor-pointer z-0'></span>
                                    <h3
                                        className={`text-xl font-semibold mb-3 group-hover:transition-colors duration-300`}
                                    >
                                        {service.title}
                                    </h3>
                                </a>
                                <p className='text-gray-600 dark:text-gray-100 mb-6 flex-grow'>
                                    {service.description}
                                </p>

                                {/* Button with theme color */}
                                <div className='inline-flex items-center justify-start '>
                                    Learn More
                                    <svg
                                        className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M9 5l7 7-7 7'
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
