const HeroSection = () => {
    return (
        <section className='relative has-corner-glows pt-0 px-5 min-h-[90vh] text-center flex items-center justify-center z-20'>
            {/* <div className='absolute w-96 h-96 rounded-full bg-gradient-to-br from-purple-900 to-purple-700 dark:from-purple-800 dark:to-purple-300 blur-3xl opacity-900 animate-blob animation-delay-2000 z-0'></div> */}
            <div className='hero-content z-10'>
                <h1 className='mb-6 max-w-4xl text-4xl font-bold leading-tight heading-gradient sm:text-5xl md:text-6xl lg:text-7xl animate-fadeInUp duration-200'>
                    Join Our Team and shape the future of Technology
                </h1>
                <p className='text-2xl mb-8 animate-fadeInUp duration-200'>
                    Explore exciting career opportunities with Smaatix
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fadeInUp duration-200">
                    <a
                        href='#job-listings'
                        className='w-full sm:w-auto py-4 px-6 rounded-md border border-gray-600 text-xl shadow-md hover:bg-gray-300 transition-colors z-60'
                    >
                        Open Positions
                    </a>
                    <a
                        href='/Application-Form'
                        className='w-full sm:w-auto py-4 px-6 rounded-md border border-gray-600 text-xl shadow-md hover:bg-gray-300 transition-colors z-60'
                    >
                        Apply for a Job
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;