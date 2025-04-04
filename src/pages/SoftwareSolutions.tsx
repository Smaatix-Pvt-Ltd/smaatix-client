import React from 'react';
import CardLinks from '../components/UI/cardLinks';
import {
    IoSettingsOutline,
    IoBagHandleSharp,
    IoColorPalette,
    IoDesktop,
    IoSparkles,
} from 'react-icons/io5';

// Define type for card items
type CardItem = {
    icon: React.ReactNode;
    title: string;
    description: string;
    // isMore prop seems unused based on the code, removed for now
};

const SoftwareSolutions: React.FC = () => {
    const cardItems: CardItem[] = [
        {
            icon: <IoSettingsOutline size={24} />, // Pass size for consistency
            title: 'Custom Development',
            description:
                'We design and build custom software applications tailored precisely to your requirements.', // Slightly refined text
        },
        {
            icon: <IoSparkles size={24} />,
            title: 'Responsive Development',
            description:
                'Developing progressive web applications accessible and optimized for all devices.',
        },
        {
            icon: <IoColorPalette size={24} />,
            title: 'Design Strategy',
            description:
                'Leveraging user psychology and design habits to maximize ROI and user engagement.',
        },
        {
            icon: <IoDesktop size={24} />,
            title: 'SAP Development',
            description:
                'End-to-end SAP expertise, including implementation, consulting, and customization services.',
        },
        {
            icon: <IoBagHandleSharp size={24} />,
            title: 'E-Commerce Solutions', // Renamed slightly
            description:
                'Helping you build robust and scalable e-commerce platforms for your products or services.',
        },
    ];

    return (
        <main className='relative w-full py-10 md:py-12 has-corner-glows z-10'>
            <div className='container mx-auto px-6 relative z-10'>
                {/* Section Header */}
                <div className='text-center mb-16 animate-fadeInUp'>
                    {/* Subtitle */}
                    <h3 className='text-base font-medium uppercase tracking-wider text-foreground-secondary mb-3'>
                        Software Development Roadmap
                    </h3>
                    {/* Main Title */}
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4'>
                        One-Stop Software Solutions
                    </h1>
                    {/* Divider */}
                    <div className='w-20 h-px bg-border mx-auto mb-6'></div>
                    <p
                        className='max-w-2xl mx-auto text-foreground-secondary animate-fadeInUp'
                        style={{ animationDelay: '150ms' }}
                    >
                        Step-by-step guidance to success through expertly
                        crafted software development services.
                    </p>
                </div>

                {/* Services Cards Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
                    {cardItems.map((item, index) => (
                        <div
                            key={item.title}
                            className='animate-fadeInUp group relative flex flex-col bg-[--card-background] border border-[--card-border] rounded-xl p-6 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 hover:scale-[1.03]'
                            style={{ animationDelay: `${200 + index * 100}ms` }}
                        >
                            <CardLinks
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default SoftwareSolutions;
