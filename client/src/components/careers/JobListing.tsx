import JobCard from './JobCard';
interface Job {
    title: string;
    location: string;
    department: string;
    applyLink: string;
}
const JobListings = ({ jobs }: { jobs: Job[] }) => {
    return (
        <section
            id='job-listings'
            className='flex flex-col  mt-5 items-center'
        >
            <h2 className='text-4xl font-bold font-serif mb-10 text-purple-900'>
                Open Positions
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 z-10'>
                {jobs.length > 0 ? (
                    jobs.map((job, index) => (
                        <JobCard
                            key={index}
                            job={job}
                        />
                    ))
                ) : (
                    <div className='no-jobs-message'>
                        <p>No Jobs Available</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default JobListings;
