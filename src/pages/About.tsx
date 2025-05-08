// src/pages/AboutUs.tsx (or wherever it resides)
import React from 'react';
import {
    FaLaptopCode,
    FaBrain,
    FaCloud,
    FaRegImages,
    FaUsersCog,
    FaBuilding,
} from 'react-icons/fa'; // Example icons
import WhyUs from '../components/aboutUs/WhyUs'; // Assuming styled internally
import OurStory from '../components/aboutUs/OurStory'; // Assuming styled internally
import Team from '../components/aboutUs/Team'; // Assuming styled internally
import ScrollToTop from '../components/UI/scrollToTop'; // Assuming styled internally
import AboutHero from '../components/aboutUs/AboutHero'; // Assuming styled internally
import LifeAtCompany from '../components/careers/LifeAtCompany';

const AboutUs: React.FC = () => {
    // Data for "What We Do" section
    const whatWeDoItems = [
        {
            icon: <FaLaptopCode />,
            title: 'Web Development',
            description: 'Building scalable and responsive web applications.',
        },
        {
            icon: <FaBrain />,
            title: 'AI Solutions',
            description: 'Leveraging AI to solve complex business problems.',
        },
        {
            icon: <FaCloud />,
            title: 'Cloud Computing',
            description: 'Delivering secure and scalable cloud solutions.',
        },
    ];

    // Placeholder data for Gallery
    const galleryImages = [
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', // Placeholder Image 1
        'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', // Placeholder Image 2
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', // Placeholder Image 3
    ];

    return (
        // Remove explicit font/color, rely on body styles
        <div className='scroll-smooth duration-300 bg-gradient-to-br from-purple-50/80 via-background to-pink-50/80 dark:from-slate-900 dark:via-slate-800/50 dark:to-purple-950/60'>
            {/* Hero Section */}
            <AboutHero />
            {/* Our Story Section */}
            <OurStory />
            {/* What We Do Section */}
            <section
                id='services'
                className='py-24 md:py-32 px-4'
            >
                {' '}
                {/* Standard padding */}
                {/* Use theme border color */}
                <hr className='w-full border-t border-[--color-border]' />
                <div className='container mx-auto mt-16 md:mt-24'>
                    {/* Standard header */}
                    <div className='text-center mb-16 animate-fadeInUp'>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4'>
                            What We Do
                        </h2>
                        <div className='w-20 h-px bg-border mx-auto mb-6'></div>
                        <p className='max-w-xl mx-auto text-foreground-secondary'>
                            Delivering innovative solutions across key
                            technology areas.
                        </p>
                    </div>
                    {/* Grid using standard themed cards */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                        {whatWeDoItems.map((item, index) => (
                            <div
                                key={item.title}
                                className='animate-fadeInUp flex flex-col items-center text-center bg-[--card-background] border border-[--card-border] rounded-xl p-6 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 hover:scale-[1.03]'
                                style={{
                                    animationDelay: `${200 + index * 100}ms`,
                                }}
                            >
                                <div className='mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[--icon-background] text-accent-start'>
                                    {React.cloneElement(
                                        item.icon as React.ReactElement,
                                        { className: 'w-7 h-7' }
                                    )}
                                </div>
                                <h3 className='text-xl font-semibold mb-2 text-foreground'>
                                    {item.title}
                                </h3>
                                <p className='text-foreground-secondary text-base'>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Why Choose Us Section */}
            <WhyUs />
            {/* Meet Our Team Section  */}
            {/* <Team /> */}
            {/* Life at Smaatix Section */}

            <section className='py-24 md:py-32 px-4 bg-background dark:bg-opacity-50'>
                <div className='container mx-auto'>
                    <LifeAtCompany />
                </div>
            </section>
            {/* Scroll To Top Button */}
            <ScrollToTop />
        </div>
    );
};

export default AboutUs;
