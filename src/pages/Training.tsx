import { useState, useEffect } from 'react';
import Videogallery from '../components/Training/Videogallery';
import Navbar from '../components/Training/Navbar';
import { Folder } from 'lucide-react';

const Training = () => {
    const [activeTab, setActiveTab] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [course, setCourses] = useState<string[]>([]);
    const [courseSelected, setCourse] = useState('');
    const [url, setUrl] = useState('');
    

    useEffect(() => {
        if (!activeTab) return;

        // Check Local Storage for cached data
        const cachedData = localStorage.getItem(`courses_${activeTab}`);
        if (cachedData) {
            setCourses(JSON.parse(cachedData));
            setCourse(JSON.parse(cachedData)[0] || '');
            return;
        }

        setIsLoading(true);
        
        fetch(`http://192.168.1.202:8080/api/coursesentity/${activeTab}`, {
            method: 'GET',
            headers: {
                'Cache-Control': 'max-age=3600, must-revalidate', // Cache response for 1 hour
                'If-None-Match': localStorage.getItem(`etag_${activeTab}`) || '', // Use ETag for cache validation
            }
        })
            .then((res) => {
                if (res.status === 304) {
                    // No changes, use cached version
                    setIsLoading(false);
                    return;
                }
                return res.json().then((data) => {
                    if (data && typeof data === 'object' && data[activeTab]) {
                        const courseList = data[activeTab];
                        if (Array.isArray(courseList) && courseList.length > 0) {
                            setCourse(courseList[0]);                    
                        }
                        setCourses(courseList);

                        // Store data & ETag in localStorage
                        localStorage.setItem(`courses_${activeTab}`, JSON.stringify(courseList));
                        if (res.headers.get('ETag')) {
                            localStorage.setItem(`etag_${activeTab}`, res.headers.get('ETag') || '');
                        }
                    }
                });
            })
            .catch((err) => {
                console.error('Error fetching courses:', err);
            })
            .finally(() => setIsLoading(false));

    }, [activeTab]);

    const handleCourseSelector = (courseName: string) => {
        setCourse(courseName);
    };

    return (
        <div className='min-h-screen bg-white dark:bg-[#212121] font-[montserrat] relative'>
            <div className='relative h-[400px] font-[montserrat]'>
                <div className={`w-full h-full flex flex-col justify-center items-center text-white bg-gradient-to-r from-purple-900 to-zinc-100 dark:bg-gradient-to-b dark:from-black dark:to-[#212121]`}>
                    <div className='container mx-auto px-6 flex flex-col justify-center items-center z-10 relative'>
                        <div className='text-center'>
                            <h3 className='text-xl font-medium mb-4 text-gray-100 tracking-wide'>
                                Empowering Talent with Industry-Ready Training Solutions.
                            </h3>
                            <h1 className='text-6xl md:text-5xl font-bold mb-6 leading-tight'>
                                Training Solutions
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto px-4 py-8'>
                <div className='mb-8'>
                    <h2 className='font-bold text-2xl text-gray-800 dark:text-gray-200 mb-4'>
                        Master Every Skill in One Destination
                    </h2>
                    <p className='text-gray-600 dark:text-gray-300 max-w-3xl'>
                        Explore our comprehensive library of training materials designed to help you excel in your professional journey.
                    </p>
                </div>

                <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

                <div className='p-6'>
                    <div className='flex flex-wrap gap-4'>
                        {isLoading
                            ? Array(5).fill(null).map((_, i) => (
                                <div key={i} className='px-4 py-2 w-32 h-10 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse'></div>
                            ))
                            : course.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleCourseSelector(item)}
                                    className={`flex items-center px-4 py-2 rounded-full transition-all duration-200 ${courseSelected === item ? 'bg-purple-600 dark:bg-purple-700 shadow-lg' : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 shadow-md hover:shadow-lg'}`}
                                >
                                    <div className={`text-md font-medium ${courseSelected === item ? 'text-white dark:text-white font-bold' : 'text-gray-800 dark:text-gray-200'}`}>{item}</div>
                                </button>
                            ))}
                    </div>

                    {activeTab && course.length === 0 && (
                        <div className='flex flex-col items-center justify-center text-center h-64'>
                            <Folder className='h-8 w-8 text-gray-400' />
                            <p className='text-gray-500 text-lg font-medium'>
                                The "{activeTab}" folder is empty.
                            </p>
                        </div>
                    )}
                </div>

                <div className='mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden'>
                    <div className='p-6 border-b border-gray-200 dark:border-gray-700'>
                        <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-200'>
                            Featured Video Tutorials
                        </h2>
                    </div>
                    <div className='p-6'>
                        <Videogallery activeTab={activeTab} courseSelected={courseSelected} setUrl={setUrl} />
                    </div>
                </div>

                <div className='flex justify-center items-center p-8'>
                     {url && <video controls  src={url} className='w-full h-auto ' style={{ maxHeight: '800px' }}></video>}
                </div>
            </div>
        </div>
    );
};

export default Training;
