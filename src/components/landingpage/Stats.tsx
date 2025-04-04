// src/components/Stats.tsx
import React from 'react';
import {
    FaArrowRight,
    FaCode,
    FaChalkboardTeacher,
    FaUsers,
    FaBoxOpen,
    FaBriefcase,
    FaInfoCircle,
} from 'react-icons/fa'; // More specific icons

// Define Service type
type Service = {
    icon: React.ReactNode;
    title: string;
    description: string;
    path: string;
};

// Using more specific icons
const serviceIcons = {
    software: <FaCode />,
    training: <FaChalkboardTeacher />,
    staffing: <FaUsers />,
    products: <FaBoxOpen />,
    careers: <FaBriefcase />,
    about: <FaInfoCircle />,
};

const services: Service[] = [
    {
        icon: serviceIcons.software,
        title: 'Software Solutions',
        description: 'Find your niche requirement with our technology experts.',
        path: '/software-solutions',
    },
    {
        icon: serviceIcons.training,
        title: 'Training',
        description:
            'Upgrade / Upskill the latest technology with our experienced team.',
        path: '/training',
    },
    {
        icon: serviceIcons.staffing,
        title: 'Staffing Solution',
        description:
            'Fill your needs of experts with our talent hunting acquisition team.',
        path: '/staffing-solutions',
    },
    {
        icon: serviceIcons.products,
        title: 'Products',
        description: 'Check out our products.',
        path: '/products',
    },
    {
        icon: serviceIcons.careers,
        title: 'Careers',
        description: 'Explore opportunities to grow with our dynamic team.',
        path: '/careers',
    },
    {
        icon: serviceIcons.about,
        title: 'About Us',
        description: 'Take your time to know about our company and values.',
        path: '/about-us',
    },
];

export const ServicesSectionAlt: React.FC = () => {
    // Renamed component
    return (
        <section className='relative w-full py-24 md:py-32'>
            {/* Section Header (Remains similar) */}
            <div className='container mx-auto px-6 mb-16 text-center animate-fadeInUp'>
                <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4'>
                    Our Services
                </h2>
                <div className='w-20 h-px bg-border mx-auto mb-6'></div>
                <p
                    className='max-w-2xl mx-auto text-foreground-secondary animate-fadeInUp'
                    style={{ animationDelay: '150ms' }}
                >
                    Comprehensive business solutions tailored to meet your
                    specific needs.
                </p>
            </div>

            {/* Services "List" Grid */}
            <div className='container mx-auto px-6 relative z-10'>
                {/* Use grid, but styling focuses on the item, not distinct cards initially */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12'>
                    {services.map((service, index) => (
                        // Each item container - minimal initial styling, hover reveals background
                        <div
                            key={service.path}
                            className='animate-fadeInUp group relative rounded-lg p-6 transition-colors duration-300 hover:bg-[--feature-item-hover-bg]' // Background appears on hover
                            style={{ animationDelay: `${200 + index * 100}ms` }}
                        >
                            {/* Use a flex layout for icon and text */}
                            <div className='flex flex-col sm:flex-row sm:items-start gap-4'>
                                {/* Icon - Simpler, no background initially */}
                                <div className='flex-shrink-0 text-accent-start mt-1'>
                                    {/* Adjust icon size */}
                                    {React.cloneElement(
                                        service.icon as React.ReactElement,
                                        { className: 'w-7 h-7' }
                                    )}
                                </div>

                                {/* Text Content */}
                                <div className='flex-grow'>
                                    {/* Title as main link target */}
                                    <h3 className='text-xl font-semibold mb-2 text-foreground'>
                                        <a
                                            href={service.path}
                                            className='focus:outline-none focus:underline'
                                        >
                                            {/* Invisible overlay for full "card" click area */}
                                            <section
                                                className='absolute inset-0'
                                                aria-hidden='true'
                                            ></section>
                                            {service.title}
                                        </a>
                                    </h3>
                                    {/* Description */}
                                    <p className='text-foreground-secondary text-base'>
                                        {service.description}
                                    </p>
                                    {/* Show link arrow on hover */}
                                    <div className='mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                        <span className='inline-flex items-center text-sm font-medium text-accent-start group/link'>
                                            Learn More
                                            <FaArrowRight className='ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1' />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSectionAlt;
