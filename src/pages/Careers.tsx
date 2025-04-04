import React, { useState, useEffect, useRef, useMemo } from 'react';
import ScrollToTop from '../components/UI/scrollToTop';
import HeroSection from '../components/careers/HeroSection';
import JobListings from '../components/careers/JobListing';
import JobSearch from '../components/careers/JobSearch';
import LifeAtCompany from '../components/careers/LifeAtCompany';

interface Job {
    title: string;
    location: string;
    department: string;
    applyLink: string;
}

const Careers = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [department, setDepartment] = useState('');

    const originalJobs = useRef<Job[]>([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const jobData = [
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
                ];
                originalJobs.current = jobData;
                setJobs(jobData);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching jobs:', err);
                setError('Failed to fetch jobs. Please try again later.');
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    const filteredJobs = useMemo(() => {
        const lowerSearchTerm = searchTerm.toLowerCase();
        const lowerLocation = location.toLowerCase();
        const lowerDepartment = department.toLowerCase();

        return jobs.filter(
            (job) =>
                job.title.toLowerCase().includes(lowerSearchTerm) &&
                (!location || job.location.toLowerCase() === lowerLocation) &&
                (!department ||
                    job.department.toLowerCase() === lowerDepartment)
        );
    }, [jobs, searchTerm, location, department]);

    const handleSearch = (
        searchTerm: string,
        location: string,
        department: string
    ) => {
        setSearchTerm(searchTerm);
        setLocation(location);
        setDepartment(department);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <main className='bg-gradient-to-br from-purple-50/80 via-background to-pink-50/80 dark:from-slate-900 dark:via-slate-800/50 dark:to-purple-950/60'>
            <HeroSection />

            <section id='job-listings'>
                <JobListings
                    jobs={filteredJobs}
                    onSearch={handleSearch}
                />
            </section>
            {/* <LifeAtCompany /> */}
            <ScrollToTop />
        </main>
    );
};

export default Careers;
