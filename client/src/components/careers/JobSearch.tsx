import { useState } from 'react';
import { Input } from '../UI/input';
import { Button } from '../UI/button';
const JobSearch = ({
    onSearch,
}: {
    onSearch: (
        searchTerm: string,
        location: string,
        department: string
    ) => void;
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [department, setDepartment] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm, location, department);
    };

    return (
        <section className='h-[150px] flex  justify-center sm:w-screen flex-wrap items-center gap-4 mt-5'>
            <Input
                type='text'
                placeholder='Search job titles or keywords'
                className='w-fit h-[40px] border-black'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                required={true}
            />
            <select
                className='px-8 py-2 border border-black rounded-md dark:bg-zinc-700 active:bg-black'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            >
                <option value=''>Location</option>
                <option value='remote'>Remote</option>
                <option value='new-york'>New York</option>
                <option value='san-francisco'>San Francisco</option>
            </select>
            <select
                className='px-8 py-2 border border-black rounded-md dark:bg-zinc-700'
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
            >
                <option value=''>Department</option>
                <option value='engineering'>Engineering</option>
                <option value='marketing'>Marketing</option>
                <option value='hr'>HR</option>
            </select>
            <Button
                variant={'destructive'}
                onClick={handleSearch}
            >
                Search
            </Button>
        </section>
    );
};
export default JobSearch;
