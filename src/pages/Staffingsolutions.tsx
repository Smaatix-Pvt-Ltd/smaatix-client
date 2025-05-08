import React from 'react';
import {
    Briefcase,
    Shield,
    Users,
    FileText,
    UserCheck,
    Layers,
} from 'react-feather';
import Card from '../components/Staffingsolutions/Card';
import { Button } from '../components/UI/button';
import Solutions from '../assets/Images/solutions.png'; // Adjusted import path
// import PlaceholderImage from '../assets/Images/placeholder-staffing.jpg'; // Example path

type Solution = {
    logo: React.ReactNode;
    heading: string;
    description: string;
    linkText: string;
    linkUrl: string;
};

const solutions: Solution[] = [
    {
        logo: <FileText size={28} />, // Adjusted size slightly
        heading: 'HR / Payroll Consulting', // Refined title
        description:
            'Expert consulting to manage your HR and Payroll requirements.', // Refined text
        linkText: 'Learn More',
        linkUrl: '/hr-services',
    },
    {
        logo: <Briefcase size={28} />,
        heading: 'Contract Staffing (IT / Non-IT)', // Refined title
        description: 'Providing skilled experts on a project or term basis.', // Refined text
        linkText: 'Learn More',
        linkUrl: '/business-consulting',
    },
    {
        logo: <Shield size={28} />,
        heading: 'Recruitment Services (IT / Non-IT)', // Refined title
        description:
            'Finding the right experts matching your JDs via our talent management team.', // Refined text
        linkText: 'Learn More',
        linkUrl: '/cybersecurity', // Link seems mismatched, adjust if needed
    },
    {
        logo: <Users size={28} />,
        heading: 'Hire, Train & Deploy Programs', // Refined title
        description:
            'Custom training packages followed by deployment into your projects.', // Refined text
        linkText: 'Learn More',
        linkUrl: '/global-expansion', // Link seems mismatched, adjust if needed
    },
    {
        logo: <UserCheck size={28} />,
        heading: 'Campus Placement Support', // Refined title
        description:
            'Comprehensive placement training and support for campus recruitment drives.', // Refined text
        linkText: 'Learn More',
        linkUrl: '/global-expansion', // Link seems mismatched, adjust if needed
    },
    {
        logo: <Layers size={28} />,
        heading: 'Custom & Freelance Staffing', // Refined title
        description:
            'Sourcing off-site professionals and freelancers for your specific needs.', // Refined text
        linkText: 'Learn More',
        linkUrl: '/global-expansion', // Link seems mismatched, adjust if needed
    },
];

const StaffingSolutions: React.FC = () => {
    return (
        <div className='bg-gradient-to-br from-purple-50/80 via-background to-pink-50/80 dark:from-slate-900 dark:via-slate-800/50 dark:to-purple-950/60 has-corner-glows'>
            {/* --- Hero Section --- */}
            <section className='relative w-full  py-12 md:py-16 text-center'>
                <div className='container mx-auto px-6 relative z-10'>
                    <div className='max-w-3xl mx-auto animate-fadeInUp'>
                        <h3 className='text-base font-medium uppercase tracking-wider text-foreground-secondary mb-3'>
                            Find the right talent
                        </h3>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight'>
                            Staffing Solutions
                        </h1>
                        {/*  Subtitle paragraph */}
                        <p className='text-lg md:text-xl text-foreground-secondary'>
                            Connecting businesses with skilled professionals.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- Services Grid Section --- */}
            <section className='relative w-full py-12 md:py-14'>
                <div className='container mx-auto px-6 relative z-10'>
                    {/* Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto'>
                        {solutions.map((solution, index) => (
                            <div
                                key={solution.heading}
                                className='animate-fadeInUp'
                                style={{
                                    animationDelay: `${100 + index * 100}ms`,
                                }}
                            >
                                <Card
                                    logo={React.cloneElement(
                                        solution.logo as React.ReactElement,
                                        { className: 'text-accent-start' }
                                    )}
                                    heading={solution.heading}
                                    description={solution.description}

                                    // linkText={solution.linkText}
                                    // linkUrl={solution.linkUrl}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Concluding Section --- */}
            <section className='relative w-full py-24 md:py-32'>
                <div className='container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16'>
                    {/* Left Column - Text */}
                    <div className='lg:w-1/2 text-center lg:text-left animate-fadeInUp'>
                        <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-snug'>
                            We strive to make our clients happy. Let's build
                            success together.
                        </h2>
                        <p className='text-lg text-foreground-secondary'>
                            Partner with us to find the expert talent that fits
                            your unique needs and drives your business forward.
                        </p>
                        {/* Optional Button */}
                        <div className='mt-8'>
                            <Button
                                variant='default'
                                size='lg'
                                asChild
                            >
                                <a href='/contact'>Get Started</a>
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    {/* Simplified image presentation */}
                    <div
                        className='lg:w-2/5 w-full animate-fadeInUp'
                        style={{ animationDelay: '200ms' }}
                    >
                        <img
                            src={Solutions} // Use a relevant placeholder or actual image
                            alt='Team collaborating on staffing solutions'
                            // Elegant image styling
                            className='w-full h-auto object-cover rounded-xl shadow-[var(--card-shadow)] border border-[--card-border]'
                        />
                        {/* Removed complex background elements and badge */}
                    </div>
                </div>
                {/* Removed final SVG Wave */}
            </section>
        </div>
    );
};

export default StaffingSolutions;
