import { useState, useEffect } from 'react';
import Videogallery from '../components/Training/Videogallery';
import Navbar from '../components/Training/Navbar';
import { Folder, Fullscreen } from 'lucide-react';
import Video from '../components/Training/VideoPlayer/Video';
import LoginPrompt from '../components/Training/LoginPrompt';
import ReactPlayer from 'react-player';

const Training = () => {
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [course, setCourses] = useState([]);
    const [courseSelected, setCourse] = useState('');
    const [url, setUrl] = useState('');
    const [isLogin, setLogin] = useState(false);

    const uuil =
        'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8';

    useEffect(() => {
        if (!activeTab) return;

        fetch(`http://192.168.1.168:8080/api/coursesentity/${activeTab}`)
            .then((res) => res.json())
            .then((data) => {
                if (data && typeof data === 'object' && data[activeTab]) {
                    const courseList = data[activeTab]; // Example: ["J2EE", "Advanced Java", "Hibernate", "Spring"]

                    if (Array.isArray(courseList) && courseList.length > 0) {
                        setCourse(courseList[0]); // Set first course as selected
                        console.log('First Course Selected:', courseList[0]);
                    }
                    setCourses(data[activeTab]);
                }
            })
            .catch((err) => {
                console.error('Error fetching courses:', err);
            });
    }, [activeTab]);

    const handleCourseSelector = (courseName: string) => {
        setCourse(courseName);
    };

    return (
        <div className='min-h-screen bg-white dark:bg-[#212121] font-[montserrat] relative'>
            {isLogin && <LoginPrompt />}
            <div className='relative h-[400px] font-[montserrat]'>
                {/* Background with gradient */}
                <div
                    className={`w-full h-full flex flex-col justify-center items-center text-white bg-gradient-to-r from-purple-900 to-zinc-100 dark:bg-gradient-to-b dark:from-black dark:to-[#212121]`}
                >
                    <div className='container mx-auto px-6 flex flex-col justify-center items-center z-10 relative'>
                        <div className='text-center'>
                            <h3 className='text-xl font-medium mb-4 text-gray-100 tracking-wide'>
                                Empowering Talent with Industry-Ready Training
                                Solutions.
                            </h3>
                            <h1 className='text-6xl md:text-5xl font-bold mb-6 leading-tight'>
                                Training Solutions
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Wave shape */}
                <div className='absolute bottom-0 left-0 w-full overflow-hidden leading-none dark:hidden'>
                    <svg
                        className='relative block w-full h-[200px] transform rotate-180'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 1200 120'
                        preserveAspectRatio='none'
                    >
                        <path
                            d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
                            fill='#ffffff'
                            opacity='1'
                        ></path>
                    </svg>
                </div>

                {/* Large odd-shaped decorative elements */}
                <div
                    className='absolute left-10 top-20 w-80 h-80 opacity-20 blur-sm bg-purple-600 dark:bg-zinc-300 backdrop-blur-2xl shadow-white-6xl'
                    style={{
                        borderRadius: '50% 30% 70% 40% / 60% 40% 70% 50%',
                        transform: 'rotate(45deg)',
                    }}
                ></div>

                <div
                    className='absolute right-20 bottom-40 w-96 h-96 opacity-20 blur-sm bg-purple-900'
                    style={{
                        borderRadius: '30% 70% 50% 50% / 50% 50% 70% 30%',
                        transform: 'rotate(-30deg)',
                    }}
                ></div>

                {/* Additional large odd-shaped element using clip-path */}
                <div
                    className='absolute left-40 bottom-20 w-72 h-72 opacity-20 blur-lg bg-purple-500'
                    style={{
                        clipPath:
                            'polygon(50% 0%, 80% 10%, 100% 35%, 90% 70%, 50% 100%, 10% 70%, 0% 35%, 20% 10%)',
                    }}
                ></div>
            </div>

            {/* Main Content */}
            <div className='container mx-auto px-4 py-8 '>
                {/* Intro Section */}
                <div className='mb-8'>
                    <h2 className='font-bold text-2xl text-gray-800 dark:text-gray-200 mb-4'>
                        Master Every Skill in One Destination
                    </h2>
                    <p className='text-gray-600 dark:text-gray-300 max-w-3xl'>
                        Explore our comprehensive library of training materials
                        designed to help you excel in your professional journey.
                        Choose from various categories below to find the
                        resources you need.
                    </p>
                </div>

                {/* Navigation Section */}
                <Navbar
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />

                {/* Folder Contents */}
                <div className='p-6'>
                    <div className='flex flex-wrap gap-4'>
                        {isLoading
                            ? Array(5)
                                  .fill(null)
                                  .map((_, i) => (
                                      <div
                                          key={i}
                                          className='px-4 py-2 w-32 h-10 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse'
                                      ></div>
                                  ))
                            : course.map((item, index) => (
                                  <button
                                      key={index}
                                      onClick={() => handleCourseSelector(item)}
                                      className={`
                          flex items-center px-4 py-2 rounded-full transition-all duration-200
                          ${
                              courseSelected === item
                                  ? 'bg-purple-600 dark:bg-purple-700 shadow-lg'
                                  : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 shadow-md hover:shadow-lg'
                          }
                        `}
                                  >
                                      <div
                                          className={`text-md font-medium ${
                                              courseSelected === item
                                                  ? 'text-white dark:text-white font-bold'
                                                  : 'text-gray-800 dark:text-gray-200'
                                          }`}
                                      >
                                          {item}
                                      </div>
                                  </button>
                              ))}
                    </div>

                    {/* Corrected conditional rendering */}
                    {activeTab !== null && course.length === 0 && (
                        <div className='flex flex-col items-center justify-center text-center h-64'>
                            <Folder className='h-8 w-8 text-gray-400' />
                            <p className='text-gray-500 text-lg font-medium'>
                                The "{activeTab}" folder is empty.
                            </p>
                        </div>
                    )}
                </div>

                {/* Video Gallery Section */}
                <div className='mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden'>
                    <div className='p-6 border-b border-gray-200 dark:border-gray-700'>
                        <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-200'>
                            Featured Video Tutorials
                        </h2>
                    </div>
                    <div className='p-6'>
                        <Videogallery
                            activeTab={activeTab}
                            courseSelected={courseSelected}
                            setUrl={setUrl}
                        />
                    </div>
                </div>

                {/* <div className="flex justify-center items-center p-8">
          <Video
            src={uuil}
            title="Sample Video"
            width="100%"
            height="auto"
            autoPlay={false}
          />
        </div> */}

                {/* <div className="flex justify-center items-center p-8">
          <Video
            src="https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8"
            title="Sample Video"
            width="100%"
            height="auto"
            autoPlay={false}
          />
        </div> */}

                <ReactPlayer
                    url='https://www.youtube.com/watch?v=XD00TJ-6WSw'
                    playing={true}
                    controls={true} // Enables playback controls
                    width='100%'
                    height='500px' // Set a proper height
                    config={{ file: { attributes: { preload: 'auto' } } }} // Enables buffering
                />
            </div>
        </div>
    );
};

export default Training;
