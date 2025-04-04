import React from 'react';
// Example Icons (choose appropriate ones)
import { FaRegLightbulb, FaHeart, FaUsersCog } from 'react-icons/fa';

// Define type for clarity
type Strength = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

const strengths: Strength[] = [
    {
        icon: <FaRegLightbulb />,
        title: 'Innovative Approach',
        description:
            'We stay ahead of the curve with cutting-edge technology solutions.',
    },
    {
        icon: <FaHeart />, // Example: Represents customer focus
        title: 'Customer-Centric', // Shortened title slightly
        description:
            'Your strategic goals and success are our absolute priority.', // Refined text
    },
    {
        icon: <FaUsersCog />,
        title: 'Expert Team',
        description:
            'Our dedicated team of professionals consistently delivers excellence.', // Refined text
    },
    // Optional: Add more points if needed for balance or content
    // {
    //     icon: <FaShieldAlt />,
    //     title: 'Reliable & Secure',
    //     description: 'Building robust solutions you can depend on.',
    // },
];

const WhyUs: React.FC = () => {
    return (
        // Use implicit theme background, standard padding
        <section className='relative w-full py-24 md:py-32'>
            <div className='container mx-auto px-6'>
                {/* Section Header */}
                <div className='text-center mb-16 animate-fadeInUp'>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4'>
                        Why Choose Us?
                    </h2>
                    <div className='w-20 h-px bg-border mx-auto mb-6'></div>
                    <p className='max-w-xl mx-auto text-foreground-secondary'>
                        Discover the advantages of partnering with Smaatix for
                        your next project.
                    </p>
                </div>

                {/* Strengths Grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                    {strengths.map((strength, index) => (
                        // Apply standard themed card styles
                        <div
                            key={strength.title}
                            className='animate-fadeInUp flex flex-col items-center text-center bg-[--card-background] border border-[--card-border] rounded-xl p-6 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 hover:scale-[1.03]'
                            style={{ animationDelay: `${200 + index * 100}ms` }}
                        >
                            {/* Themed Icon Container */}
                            <div className='mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[--icon-background] text-accent-start'>
                                {React.cloneElement(
                                    strength.icon as React.ReactElement,
                                    { className: 'w-7 h-7' }
                                )}
                            </div>

                            {/* Card Content */}
                            <h3 className='text-xl font-semibold mb-2 text-foreground'>
                                {strength.title}
                            </h3>
                            <p className='text-base text-foreground-secondary flex-grow'>
                                {' '}
                                {/* Added flex-grow if descriptions vary a lot */}
                                {strength.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
