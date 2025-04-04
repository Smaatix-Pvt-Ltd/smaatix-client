import { useState, useEffect, useRef, useContext } from 'react';
import Videogallery from '../components/Training/Videogallery';
import RecentWatchGallery from '../components/Training/ReacentWatchGallery';
import Navbar from '../components/Training/Navbar';
import { Folder } from 'lucide-react';
import { LoginPopUpContext } from '../context/LoginPopContext';
import { AppContext } from '../context/AppContext';

interface Video {
    videoId: number;
    videoTitle: string;
    imgUrl: string;
    videoUrl: string;
    pausedAt: number;
    duration: number;
}

const Training = () => {
    const [activeTab, setActiveTab] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [course, setCourses] = useState<string[]>([]);
    const [courseSelected, setCourse] = useState('');
    const [recentWatches, setRecentWatches] = useState(true);
    const [url, setUrl] = useState('');
    const [isLogin, setLogin] = useState(true)
    const [videoId, setVideoId] = useState('');
    const [progressTime, setProgressTime] = useState(0);
    const [videos, setVideos] = useState<Video[]>([]);
    const { isLoggedin, userData } = useContext(AppContext);
    console.log("User Data:", isLoggedin);
    
    const { handleLoginClick, setPopup, popup, handleLoginClose } = useContext(LoginPopUpContext);

    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (!activeTab) return;
        
        // Reset courses when switching tabs to avoid keeping previous data
        setCourses([]);
        setCourse('');
        setIsLoading(true);
        
        // Check Local Storage for cached data
        const cachedData = localStorage.getItem(`courses_${activeTab}`);
        if (cachedData) {
            const parsedData = JSON.parse(cachedData);
            if (Array.isArray(parsedData) && parsedData.length > 0) {
                setCourses(parsedData);
                setCourse(parsedData[0] || '');
            } else {
                // If cached data is empty, clear it
                localStorage.removeItem(`courses_${activeTab}`);
            }
            setIsLoading(false);
            return;
        }

        fetch(`http://192.168.1.202:8080/api/course/courses/${activeTab}`, {
            method: 'GET',
            headers: {
                'Cache-Control': 'max-age=3600, must-revalidate',
                'If-None-Match': localStorage.getItem(`etag_${activeTab}`) || '',
            }
        })
        .then((res) => {
            if (res.status === 304) {
                // No changes, check if we have valid data
                const cachedData = localStorage.getItem(`courses_${activeTab}`);
                if (cachedData) {
                    const parsedData = JSON.parse(cachedData);
                    if (Array.isArray(parsedData) && parsedData.length > 0) {
                        setCourses(parsedData);
                        setCourse(parsedData[0] || '');
                    } else {
                        // Empty cached data, remove it
                        localStorage.removeItem(`courses_${activeTab}`);
                    }
                }
                setIsLoading(false);
                return null;
            }
            return res.json();
        })
        .then((data) => {
            if (!data) return; // Handle 304 case

            if (Array.isArray(data)) {
                if (data.length > 0) {
                    setCourses(data);
                    setCourse(data[0]);
                    // Cache data
                    localStorage.setItem(`courses_${activeTab}`, JSON.stringify(data));
                    localStorage.setItem(`etag_${activeTab}`, ''); // Simplified for this example
                } else {
                    // API returned empty array - clear courses and cache
                    setCourses([]);
                    setCourse('');
                    localStorage.removeItem(`courses_${activeTab}`);
                }
                console.log("Courses Data:", data);
            }
        })
        .catch((err) => {
            console.error('Error fetching courses:', err);
            // On error, reset to empty state
            setCourses([]);
            setCourse('');
        })
        .finally(() => setIsLoading(false));

    }, [activeTab]);

    useEffect(() => {
        if (!isLogin) {
            handleLoginClick();
            // Removed invalid reference to loginActive
        }
    },[url, handleLoginClick]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let lastLoggedTime = 0; // Track last logged second

        const sendProgressUpdate = async (pausedAt: number) => {
            if (!userData || !userData.userId) return;
            
            const payload = {
                videoId: videoId,
                duration: video.duration,
                pausedAt: pausedAt
            };

            try {
                const response = await fetch(`http://192.168.1.202:8080/api/history/add-history/${userData.userId}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "*/*"
                    },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    console.error("Failed to send video progress");
                }
            } catch (error) {
                console.error("Error sending video progress:", error);
            }
        };

        const handleTimeUpdate = () => {
            const currentTime = Math.floor(video.currentTime);

            if (currentTime > 0 && currentTime % 2 === 0 && currentTime !== lastLoggedTime) {
                lastLoggedTime = currentTime;
                sendProgressUpdate(currentTime);
            }
        };

        video.addEventListener("timeupdate", handleTimeUpdate);

        return () => {
            video.removeEventListener("timeupdate", handleTimeUpdate);
        };

    }, [videoId, url, userData]);

    const fetchVideos = async () => {
        // Check if user is logged in and userId exists before making the API call
        if (!isLoggedin || !userData || !userData.userId) {
          console.log("User not logged in or userId not available");
          setRecentWatches(false);
          setIsLoading(false);
          return;
        }
        
        setIsLoading(true);
        
        try {
          const response = await fetch(`http://192.168.1.202:8080/api/history/recent-watches/${userData.userId}`);
          
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          
          const data = await response.json();
          console.log("Recent Watches Data:", data);
    
          // Check if data is an array before mapping
          if (Array.isArray(data)) {
            const formattedVideos = data.map((video: any) => ({
              videoId: video.videoId,
              videoTitle: video.videoTitle,
              imgUrl: video.imgUrl,
              videoUrl: video.videoUrl,
              pausedAt: video.pausedAt,
              duration: video.duration,
            }));
            
            setVideos(formattedVideos);
            setRecentWatches(formattedVideos.length > 0);
          } else {
            console.error("Expected array but got:", typeof data);
            setVideos([]);
            setRecentWatches(false);
          }
        } catch (error) {
          console.error("Error fetching videos:", error);
          setVideos([]);
          setRecentWatches(false);
        } finally {
          setIsLoading(false);
        }
      };
      
    useEffect(() => {
        fetchVideos();
    }, [userData, isLoggedin, isLogin]); 
    
    const handleCourseSelector = (courseName: string) => {
        setCourse(courseName);
    };

    return (
        <div className="relative">
            {!userData && (
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-10">
                </div>
            )}
    
            <div className={`min-h-screen bg-white dark:bg-[#212121] font-[montserrat] relative ${!isLogin ? 'pointer-events-none opacity-50' : ''}`}>
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
                                    <div key={i} className='px-4 py-2 w-32 h-10 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse'/>
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
    
                        {activeTab && course.length === 0 && !isLoading && (
                            
                                <p className='text-gray-500 text-lg font-medium'>
                                    No courses available in the "{activeTab}" domain.
                                </p>
                        
                        )}
                    </div>

                    {recentWatches && (
                        <RecentWatchGallery  
                            isLogin={isLogin}
                            videos={videos}
                            setProgressTime={setProgressTime} 
                            setUrl={setUrl} 
                            setVideoId={setVideoId}
                            setRecentWatches={setRecentWatches}
                        />
                    )}
    
                    <div className='mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden'>
                        <div className='p-6 border-b border-gray-200 dark:border-gray-700'>
                            <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-200'>
                                Featured Video Tutorials
                            </h2>
                        </div>
                        <div className='p-6'>
                            <Videogallery setProgressTime={setProgressTime} activeTab={activeTab} courseSelected={courseSelected} setUrl={setUrl} setVideoId={setVideoId}/>
                        </div>
                    </div>
    
                    <div className="flex justify-center items-center p-8 px-1">
                        {url && (
                            <video
                                ref={videoRef}
                                controls
                                src={url}
                                className="w-full h-auto"
                                style={{ maxHeight: '800px' }}
                                onLoadedMetadata={(e) => {
                                    if (progressTime) {  // Ensure progress time is available
                                        e.currentTarget.currentTime = progressTime;
                                    }
                                }}
                            ></video>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;