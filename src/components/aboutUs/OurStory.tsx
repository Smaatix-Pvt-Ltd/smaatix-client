import React from 'react';

const OurStory: React.FC = () => {
    return (
        // Use theme background implicitly. Apply standard vertical padding.
        <section className='relative w-full py-24 md:py-32'>
            <div className='container mx-auto px-6'>
                {/* Section Header - Centered */}
                <div className='text-center mb-12 animate-fadeInUp'>
                    <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
                        Our Story
                    </h2>
                    {/* Optional subtle divider */}
                    <div className='w-20 h-px bg-border mx-auto mb-6'></div>
                </div>

                {/* Story Content - Centered and constrained width for readability */}
                <div
                    className='max-w-3xl mx-auto text-center animate-fadeInUp' // Constrained width, centered text
                    style={{ animationDelay: '150ms' }} // Slight delay
                >
                    {/* Use theme secondary text color, increased line height */}
                    <p className='text-lg md:text-xl leading-relaxed text-foreground-secondary'>
                        Founded in 2015, Smaatix began with a vision to
                        revolutionize industries through innovative technology.
                        Over the years, we've grown into a global leader,
                        delivering 500+ projects to satisfied clients worldwide.
                        Our journey is driven by a commitment to excellence,
                        innovation, and customer success.
                    </p>
                    {/* Optional: Add another paragraph if the story continues */}
                    {/* <p className='mt-6 text-lg md:text-xl leading-relaxed text-foreground-secondary'>
                        Another paragraph about the company's values or future outlook.
                    </p> */}
                </div>
            </div>
        </section>
    );
};

export default OurStory;
