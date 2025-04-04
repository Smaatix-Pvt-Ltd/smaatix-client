import React from 'react';

import {
    FaPlay,
    FaAws,
    FaGoogle,
    FaMicrosoft,
    FaStripe,
    FaPaypal,
    FaWhatsapp,
    FaSms,
    FaSalesforce,
} from 'react-icons/fa';

import ThreeDCard from '../components/Products/ThreedCard';
import Marquee from 'react-fast-marquee';
import { Button } from '../components/UI/button';

import ProductsHero from '../components/Products/ProductsHero';
import ProductOverview from '../components/Products/ProductOverview';
import ProductsFeatures from '../components/Products/ProductsFeatures';
import AllProducts from '../components/Products/AllProducts';

const Products: React.FC = () => {
    return (
        <div className='font-sans bg-gradient-to-br from-purple-50/80 via-background to-pink-50/80 dark:from-slate-900 dark:via-slate-800/50 dark:to-purple-950/60 '>
            {/* Hero Section */}
            <ProductsHero />
            {/* Overview Section */}
            <ProductOverview />

            {/* Features Section */}
            <ProductsFeatures />

            {/* Products Section */}
            <AllProducts />

            {/* Workflow Section */}
            <section
                id='workflow'
                className='py-24 md:py-32 bg-background dark:bg-opacity-50'
            >
                <div className='container mx-auto px-6'>
                    <div className='text-center mb-16 animate-fadeInUp'>
                        <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
                            How It Works
                        </h2>
                        <div className='w-20 h-px bg-border mx-auto mb-6'></div>
                        <p className='max-w-xl mx-auto text-foreground-secondary'>
                            Our proven process to deliver outstanding results.
                        </p>
                    </div>

                    {/* Workflow Steps - Using themed cards */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16 max-w-screen-xl mx-auto'>
                        {[
                            {
                                num: 1,
                                title: 'Discovery',
                                desc: 'Understand needs & define scope',
                            },
                            {
                                num: 2,
                                title: 'Design',
                                desc: 'Architecture & UI/UX design',
                            },
                            {
                                num: 3,
                                title: 'Develop',
                                desc: 'Agile building & integration',
                            },
                            {
                                num: 4,
                                title: 'Test & Secure',
                                desc: 'QA testing & security audits',
                            },
                            {
                                num: 5,
                                title: 'Deploy & Support',
                                desc: 'Cloud deployment & maintenance',
                            },
                        ].map((step, index) => (
                            <div
                                key={step.num}
                                className='animate-fadeInUp text-center bg-[--card-background] border border-[--card-border] rounded-lg p-6 shadow-sm transition-shadow hover:shadow-md' // Use card styles, simpler hover maybe
                                style={{
                                    animationDelay: `${100 + index * 100}ms`,
                                }}
                            >
                                <div className='mb-3 flex mx-auto h-10 w-10 items-center justify-center rounded-full bg-accent-start text-white font-semibold'>
                                    {step.num}
                                </div>
                                <h4 className='text-md font-semibold mb-1 text-foreground'>
                                    {step.title}
                                </h4>
                                <p className='text-sm text-foreground-secondary'>
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Video Placeholder */}
                    <div
                        className='max-w-4xl mx-auto text-center animate-fadeInUp'
                        style={{ animationDelay: '600ms' }}
                    >
                        <h3 className='text-2xl font-semibold text-foreground mb-6'>
                            See How It Works
                        </h3>
                        <div className='relative bg-[--card-background] border border-[--card-border] rounded-lg aspect-video flex items-center justify-center overflow-hidden shadow-md'>
                            {/* Replace with actual video embed or thumbnail */}
                            <div className='text-center p-4'>
                                <p className='text-foreground-secondary mb-4'>
                                    Watch Our Demo Video
                                </p>
                                <Button
                                    variant='default'
                                    size='iconLg'
                                    aria-label='Play Demo Video'
                                >
                                    {' '}
                                    {/* Use themed button */}
                                    <FaPlay className='h-6 w-6' />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrations Section */}
            <section
                id='integrations'
                className='py-24 md:py-32'
            >
                <div className='container mx-auto px-6'>
                    <div className='text-center mb-16 animate-fadeInUp'>
                        <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
                            Integrations
                        </h2>
                        <div className='w-20 h-px bg-border mx-auto mb-6'></div>
                        <p className='max-w-xl mx-auto text-foreground-secondary'>
                            Seamlessly connect with your favorite platforms.
                        </p>
                    </div>

                    {/* Marquee Styling */}
                    {/* Note: react-fast-marquee might need specific styling adjustments */}
                    <div
                        className='w-full animate-fadeInUp'
                        style={{ animationDelay: '200ms' }}
                    >
                        <Marquee
                            speed={40}
                            gradient={true}
                            gradientColor={
                                [
                                    255, 255, 255,
                                ] /* Adjust gradient color based on light/dark theme potentially */
                            }
                            pauseOnHover
                        >
                            {[
                                { Icon: FaAws, name: 'AWS' },
                                { Icon: FaGoogle, name: 'Google Cloud' },
                                { Icon: FaMicrosoft, name: 'Azure' },
                                { Icon: FaStripe, name: 'Stripe' },
                                { Icon: FaPaypal, name: 'PayPal' },
                                { Icon: FaWhatsapp, name: 'WhatsApp API' },
                                { Icon: FaSms, name: 'Twilio' },
                                { Icon: FaSalesforce, name: 'Salesforce' },
                                // Duplicate for seamless loop if needed by marquee config
                                { Icon: FaAws, name: 'AWS' },
                                { Icon: FaGoogle, name: 'Google Cloud' },
                                { Icon: FaMicrosoft, name: 'Azure' },
                            ].map((item, index) => (
                                // Style each marquee item subtly
                                <div
                                    key={index}
                                    className='flex flex-col items-center justify-center p-6 text-center mx-6 w-36 h-36' // Consistent size
                                >
                                    <item.Icon className='text-4xl md:text-5xl text-foreground-secondary group-hover:text-accent-start transition-colors duration-300 mb-3' />
                                    <span className='text-sm font-medium text-foreground-secondary group-hover:text-foreground transition-colors duration-300'>
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
