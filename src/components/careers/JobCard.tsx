import { Button } from '../UI/button';

interface Job {
    title: string;
    location: string;
    department: string;
    applyLink: string;
}
const JobCard = ({ job }: { job: Job }) => {
    return (
        <div className='relative gap-1 flex flex-col justify-between border rounded-bl-3xl rounded-t-3xl border-purple-800 bg-purple-300/10 dark:bg-zinc-600/10  hover:bg-purple-300/60 m-1 p-10 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-2xl shadow-purple-800'>
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
