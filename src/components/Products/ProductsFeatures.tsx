import React from 'react';
import {
    FaBolt,
    FaBrain,
    FaCloud,
    FaCode,
    FaDatabase,
    FaShieldAlt,
} from 'react-icons/fa';
import Card from './Card';

const ProductsFeatures = () => {
    return (
        <section
            id='features'
            className='py-24 md:py-32  dark:bg-opacity-50'
        >
            {' '}
            {/* Use theme subtle background */}
            <div className='container mx-auto px-6'>
                <div className='text-center mb-16 animate-fadeInUp'>
                    <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
                        Features & Benefits
                    </h2>
                    <div className='w-20 h-px bg-border mx-auto mb-6'></div>
                    <p className='max-w-xl mx-auto text-foreground-secondary'>
                        Explore the powerful features that make Smaatix stand
                        out.
                    </p>
                </div>

                {/* CRUCIAL: Assumes 'Card' component uses theme internally */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto'>
                    {[
                        {
                            logo: <FaCode />,
                            heading: 'Custom Software Development',
                            description:
                                'Tailor-made solutions designed specifically for your business needs',
                            point1: 'Scalable microservices architecture',
                            point2: 'Agile development process',
                        },
                        {
                            logo: <FaShieldAlt />,
                            heading: 'Secure Authentication',
                            description:
                                'Enterprise-grade security for your applications and data',
                            point1: 'OAuth2, JWT, MFA',
                            point2: 'Role-based access control',
                        },
                        {
                            logo: <FaBolt />,
                            heading: 'Real-Time Data Processing',
                            description:
                                'Process and analyze data as it comes in',
                            point1: 'Event-driven architecture',
                            point2: 'Fast, asynchronous handling',
                        },
                        {
                            logo: <FaCloud />,
                            heading: 'Cloud Integration',
                            description:
                                'Seamless integration with popular cloud platforms',
                            point1: 'AWS, Azure, Google Cloud',
                            point2: 'RESTful APIs & Webhooks',
                        },
                        {
                            logo: <FaDatabase />,
                            heading: 'Database Management',
                            description:
                                'Optimized database solutions for performance and security',
                            point1: 'PostgreSQL & NoSQL options',
                            point2: 'Secure file storage',
                        },
                        {
                            logo: <FaBrain />,
                            heading: 'AI-Powered Analytics',
                            description:
                                'Gain insights from your data with advanced analytics',
                            point1: 'Business intelligence dashboards',
                            point2: 'Automated workflow triggers',
                        },
                    ].map((feature, index) => (
                        <div
                            key={feature.heading}
                            className='animate-fadeInUp'
                            style={{
                                animationDelay: `${100 + index * 100}ms`,
                            }}
                        >
                            {/* Pass props or expect Card to use context/theme */}
                            <Card
                                logo={React.cloneElement(
                                    feature.logo as React.ReactElement,
                                    {
                                        className: 'text-accent-start text-3xl',
                                    }
                                )} // Example styling logo
                                heading={feature.heading}
                                description={feature.description}
                                point1={feature.point1}
                                point2={feature.point2}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsFeatures;
