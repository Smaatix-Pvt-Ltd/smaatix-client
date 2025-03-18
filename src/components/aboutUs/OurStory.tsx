import React from 'react';

const OurStory = () => {
    return (
        <section className='min-h-[280px] bg-white text-black dark:bg-zinc-800 dark:text-white  px-5 flex flex-col items-center justify-center'>
            <h2 className='text-4xl m-10 text-purple-800 text-center'>
                Our Story
            </h2>
            <div className='story-content max-w-4xl text-left'>
                <p className='text-lg leading-relaxed mb-5'>
                    Founded in 2015, Smaatix began with a vision to
                    revolutionize industries through innovative technology. Over
                    the years, we've grown into a global leader, delivering 500+
                    projects to satisfied clients worldwide. Our journey is
                    driven by a commitment to excellence, innovation, and
                    customer success.
                </p>
            </div>
        </section>
    );
};

export default OurStory;
