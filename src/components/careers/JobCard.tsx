import { Button } from '../UI/button';

interface Job {
    title: string;
    location: string;
    department: string;
    applyLink: string;
}
const JobCard = ({ job }: { job: Job }) => {
    return (
        <div className='flex flex-col bg-[--card-background] border border-[--card-border] rounded-xl p-6 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 hover:scale-[1.03]'>
            <a href={job.applyLink}>
                <span className=' inset-0 absolute z-0'></span>
                <h3 className='text-lg font-semibold'>{job.title}</h3>
            </a>
            <p>Location: {job.location}</p>
            <p>Department: {job.department}</p>

            <Button variant={'link'}>Apply Now</Button>
        </div>
    );
};
export default JobCard;
