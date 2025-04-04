import {
    FaBriefcase,
    FaBuilding,
    FaExpandArrowsAlt,
    FaLaptopCode,
    FaLock,
} from 'react-icons/fa';

const ProductOverview = () => {
    return (
        <section
            id='products-ocerview'
            className='py-24 md:py-32'
        >
            <div className='container mx-auto px-6'>
                <div className='max-w-6xl mx-auto'>
                    {/* Standard Header */}
                    <div className='text-center mb-16 animate-fadeInUp'>
                        <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
                            Product Overview
                        </h2>
                        <div className='w-20 h-px bg-border mx-auto mb-6'></div>
                        <p className='max-w-xl mx-auto text-foreground-secondary'>
                            Discover what Smaatix can do for your business.
                        </p>
                    </div>

                    <div className='grid md:grid-cols-2 gap-12 lg:gap-16 items-center'>
                        {/* Left Text Content */}
                        <div
                            className='animate-fadeInUp'
                            style={{ animationDelay: '100ms' }}
                        >
                            <h3 className='text-2xl font-semibold text-foreground mb-4'>
                                What is Smaatix?
                            </h3>
                            <p className='text-base md:text-lg leading-relaxed text-foreground-secondary mb-8'>
                                Smaatix is a software IT company specializing in
                                building modern, scalable, and secure
                                applications using the latest technologies. Our
                                solutions focus on automation, data security,
                                and seamless integration for businesses of all
                                sizes.
                            </p>

                            <h4 className='text-xl font-semibold text-foreground mb-4'>
                                Who is it for?
                            </h4>
                            <div className='space-y-5 mb-8'>
                                {/* Styled List Items */}
                                <div className='flex items-start gap-3'>
                                    <FaBuilding className='text-accent-start text-xl mt-1 flex-shrink-0' />
                                    <span className='text-foreground-secondary'>
                                        <strong className='text-foreground'>
                                            Startups & Enterprises
                                        </strong>{' '}
                                        looking for custom software tailored to
                                        their needs.
                                    </span>
                                </div>
                                <div className='flex items-start gap-3'>
                                    <FaLaptopCode className='text-accent-start text-xl mt-1 flex-shrink-0' />
                                    <span className='text-foreground-secondary'>
                                        <strong className='text-foreground'>
                                            Developers & IT Teams
                                        </strong>{' '}
                                        needing robust backend solutions with
                                        Spring Boot.
                                    </span>
                                </div>
                                <div className='flex items-start gap-3'>
                                    <FaBriefcase className='text-accent-start text-xl mt-1 flex-shrink-0' />
                                    <span className='text-foreground-secondary'>
                                        <strong className='text-foreground'>
                                            Businesses
                                        </strong>{' '}
                                        requiring secure authentication, API
                                        integrations, and database management.
                                    </span>
                                </div>
                            </div>

                            {/* Key Benefits (Removed extra padding/bg) */}
                            <div className='space-y-5'>
                                <div className='flex items-start gap-3'>
                                    <FaExpandArrowsAlt className='text-accent-start text-xl mt-1 flex-shrink-0' />
                                    <div>
                                        <h5 className='font-semibold text-foreground'>
                                            Scalability
                                        </h5>
                                        <p className='text-foreground-secondary'>
                                            Our cloud-native architecture
                                            ensures high availability and
                                            performance.
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-3'>
                                    <FaLock className='text-accent-start text-xl mt-1 flex-shrink-0' />
                                    <div>
                                        <h5 className='font-semibold text-foreground'>
                                            Security
                                        </h5>
                                        <p className='text-foreground-secondary'>
                                            Advanced authentication (OAuth2,
                                            JWT) and data encryption.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Image*/}

                        <div
                            className='animate-fadeInUp aspect-video bg-[--card-background] border border-[--card-border] rounded-lg flex items-center justify-center shadow-sm'
                            style={{ animationDelay: '200ms' }}
                        >
                            <div className='text-center p-4'>
                                {/* Replace with actual image/video embed */}
                                <FaLaptopCode className='text-5xl text-foreground-secondary opacity-50 mx-auto mb-4' />
                                <p className='text-foreground-secondary text-sm'>
                                    Application Dashboard Preview
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductOverview;
