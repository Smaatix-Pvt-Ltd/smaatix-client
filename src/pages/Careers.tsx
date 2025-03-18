import HeroSection from '../components/careers/HeroSection';
import JobListings from '../components/careers/JobListing';
import JobSearch from '../components/careers/JobSearch';
import LifeAtCompany from '../components/careers/LifeAtCompany'; // Fixed typo here
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface Job {
    title: string;
    location: string;
    department: string;
    applyLink: string;
}

const Careers = () => {
    const [jobs, setJobs] = useState<Job[]>([
        {
            title: 'Software Engineer',
            location: 'Remote',
            department: 'Engineering',
            applyLink: '#',
        },
        {
            title: 'Product Manager',
            location: 'New York',
            department: 'Product',
            applyLink: '#',
        },
        {
            title: 'Marketing Specialist',
            location: 'San Francisco',
            department: 'Marketing',
            applyLink: '#',
        },
        {
            title: 'HR Manager',
            location: 'Remote',
            department: 'HR',
            applyLink: '#',
        },
        {
            title: 'Software Engineer',
            location: 'Remote',
            department: 'Engineering',
            applyLink: '#',
        },
        {
            title: 'Product Manager',
            location: 'New York',
            department: 'Product',
            applyLink: '#',
        },
        {
            title: 'Marketing Specialist',
            location: 'San Francisco',
            department: 'Marketing',
            applyLink: '#',
        },
        {
            title: 'HR Manager',
            location: 'Remote',
            department: 'HR',
            applyLink: '#',
        },
        {
            title: 'Software Engineer',
            location: 'Remote',
            department: 'Engineering',
            applyLink: '#',
        },
        {
            title: 'Product Manager',
            location: 'New York',
            department: 'Product',
            applyLink: '#',
        },
        {
            title: 'Marketing Specialist',
            location: 'San Francisco',
            department: 'Marketing',
            applyLink: '#',
        },
        {
            title: 'HR Manager',
            location: 'Remote',
            department: 'HR',
            applyLink: '#',
        },
    ]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const originalJobs = useRef(jobs); // Store original jobs
    const navigate = useNavigate();
    const location = useLocation();
    const jobListingsRef = useRef<HTMLElement>(null);

    const handleSearch = (
        searchTerm: string,
        location: string,
        department: string
    ) => {
        const filteredJobs = originalJobs.current.filter((job) => {
            return (
                job.title.toLowerCase().includes(searchTerm) &&
                (location === '' || job.location.toLowerCase() === location) &&
                (department === '' ||
                    job.department.toLowerCase() === department)
            );
        });
        setJobs(filteredJobs);
    };

    // const handleClick = () => {
    //     navigate(`/careers#job-listings`);
    // };

    const scrollToTabs = () => {
        if (jobListingsRef.current) {
            jobListingsRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    useEffect(() => {
        console.log(location.hash); // Check hash
        if (location.hash === '#job-listings' && jobListingsRef.current) {
            jobListingsRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start', // Adjust as needed
            });
        }
    }, [location.hash]);

    return (
        <main className='dark:bg-zinc-800 dark:text-white'>
            <HeroSection  />
            <JobSearch onSearch={handleSearch} />
            <section
                id='job-listings'
                ref={jobListingsRef}
                className='job-listings '
            >
                <JobListings jobs={jobs} />
            </section>
            <LifeAtCompany />
        </main>
    );
};

export default Careers;
