import WhyUs from '../components/aboutUs/WhyUs';
import OurStory from '../components/aboutUs/OurStory';
import React from 'react';
import Team from '../components/aboutUs/Team';
import ScrollToTop from '../components/UI/scrollToTop';
import AboutHero from '../components/aboutUs/AboutHero';

const AboutUs: React.FC = () => {
    return (
        <div className='font-cambria   scroll-smooth duration-300 text-black dark:text-white'>
          
            {/* Hero Section */}
            <div className='z-10'>
                <AboutHero />
            </div>
            {/* Our Story Section */}
            <OurStory />
            {/* What We Do Section */}
            <section
                id='services'
                className='py-20 px-5 '
            >
                <hr className='w-full border-1  border-black dark:border-zinc-600' />
                <h2 className='text-4xl m-10 text-purple-800 text-center'>
                    What We Do
                </h2>
                <div className='services-grid grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto'>
                    <div className='service-card bg-gray-900 border border-gray-700 rounded-xl p-5 transition-transform hover:translate-y-[-10px] hover:shadow-lg hover:shadow-purple-800/30'>
                        <div className='service-icon text-3xl mb-2 text-purple-800'>
                            💻
                        </div>
                        <h3 className='text-2xl mb-2'>Web Development</h3>
                        <p>
                            Building scalable and responsive web applications.
                        </p>
                    </div>
                    <div className='service-card bg-gray-900 border border-gray-700 rounded-xl p-5 transition-transform hover:translate-y-[-10px] hover:shadow-lg hover:shadow-purple-800/30'>
                        <div className='service-icon text-3xl mb-2 text-purple-800'>
                            🤖
                        </div>
                        <h3 className='text-2xl mb-2'>AI Solutions</h3>
                        <p>Leveraging AI to solve complex business problems.</p>
                    </div>
                    <div className='service-card bg-gray-900 border border-gray-700 rounded-xl p-5 transition-transform hover:translate-y-[-10px] hover:shadow-lg hover:shadow-purple-800/30'>
                        <div className='service-icon text-3xl mb-2 text-purple-800'>
                            ☁
                        </div>
                        <h3 className='text-2xl mb-2'>Cloud Computing</h3>
                        <p>Delivering secure and scalable cloud solutions.</p>
                    </div>
                </div>
            </section>
            {/* Why Choose Us Section */}
            <WhyUs />
            {/* Meet Our Team Section */}
            <Team />
            {/* Life at Smaatix Section */}
            <section className='life-at-smaatix bg-black py-20 px-5'>
                <h2 className='text-4xl mb-10 text-purple-800 text-center'>
                    Life at Smaatix
                </h2>
                <div className='gallery-grid grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto'>
                    <div className='gallery-item rounded-xl overflow-hidden transition-transform hover:scale-105'>
                        <img
                            src='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Unbounded-SocialMedia_1200x628%3Asocial-thumbnail-landscape?ts=1738594614078&dpr=off'
                            alt='Office Image'
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className='gallery-item rounded-xl overflow-hidden transition-transform hover:scale-105'>
                        <img
                            src='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Unbounded-SocialMedia_1200x628%3Asocial-thumbnail-landscape?ts=1738594614078&dpr=off'
                            alt='Team Event'
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className='gallery-item rounded-xl overflow-hidden transition-transform hover:scale-105'>
                        <img
                            src='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Unbounded-SocialMedia_1200x628%3Asocial-thumbnail-landscape?ts=1738594614078&dpr=off'
                            alt='Workspace'
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </section>
            <ScrollToTop />
        </div>
    );
};

export default AboutUs;
