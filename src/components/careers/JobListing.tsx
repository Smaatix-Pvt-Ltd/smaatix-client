import React from 'react';
import JobCard from './JobCard'; // Assuming this component is styled using the theme
import JobSearch from './JobSearch';

interface Job {
    // id: string | number;
    title: string;
    location: string;
    department: string;
    applyLink: string;
}

interface JobListingsProps {
    jobs: Job[];
    onSearch: (
        searchTerm?: string | undefined,
        location?: string | undefined,
        department?: string | undefined
    ) => void;
}

const JobListings: React.FC<JobListingsProps> = ({ jobs, onSearch }) => {
    return (
        <section
            id='job-listings'
            className='relative w-full py-24 md:py-32'
        >
            <div className='container mx-auto px-6'>
                {/* Section Header - Apply theme colors and consistent styling */}
                <div className='text-center mb-5 animate-fadeInUp'>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4'>
                        Open Positions
                    </h2>
                    {/* Optional Divider */}
                    <div className='w-20 h-px bg-border mx-auto mb-6'></div>
                    <p className='max-w-xl mx-auto text-foreground-secondary'>
                        Find your next career opportunity and grow with us.
                    </p>
                </div>
                <JobSearch onSearch={onSearch} />

                {/* Job Listings Grid */}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10'>
                    {jobs && jobs.length > 0 ? (
                        jobs.map((job, index) => (
                            // Wrap JobCard for animation staggering
                            <div
                                key={job.title + index}
                                className='animate-fadeInUp'
                                style={{
                                    animationDelay: `${200 + index * 100}ms`,
                                }}
                            >
                                <JobCard job={job} />
                            </div>
                        ))
                    ) : (
                        // Styled fallback message
                        <div className='col-span-full text-center py-12 animate-fadeInUp'>
                            <p className='text-lg text-foreground-secondary'>
                                There are currently no open positions available.
                                Please check back later.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default JobListings;
