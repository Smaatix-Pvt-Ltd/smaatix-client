import React, { useEffect, useState } from 'react';
import { Play, Clock } from 'lucide-react';
import ProgressLine from './ProgressLine';
import { set } from 'react-hook-form';

interface Video {
    videoId: number;
    videoTitle: string;
    imgUrl: string;
    videoUrl: string;
    pausedAt: number;
    duration: number;
}

type RecentWatchGalleryProps = {
    setUrl: React.Dispatch<React.SetStateAction<string>>;
    setVideoId: React.Dispatch<React.SetStateAction<string>>;
    setProgressTime: React.Dispatch<React.SetStateAction<number>>;
    setRecentWatches: React.Dispatch<React.SetStateAction<boolean>>;
};

const RecentWatchGallery: React.FC<RecentWatchGalleryProps> = ({
    setUrl,
    setVideoId,
    setProgressTime,
    setRecentWatches,
}) => {
    const [videos, setVideos] = useState<Video[]>([]);
    const userid = 1;

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(
                    `http://192.168.1.168:8080/api/histories/user/${userid}`
                );
                const data = await response.json();

                const formattedVideos = data.map((video: any) => ({
                    videoId: video.videoId,
                    videoTitle: video.videoTitle,
                    imgUrl: video.imgUrl,
                    videoUrl: video.videoUrl,
                    pausedAt: video.pausedAt,
                    duration: video.duration,
                }));

                setVideos(formattedVideos);
                setRecentWatches(true);
            } catch (error) {
                console.error('Error fetching videos:', error);
                setRecentWatches(false);
            }
        };

        fetchVideos();
    }, [userid]);

    return (
        <div className='p-6 bg-gray-50 dark:bg-gray-900'>
            <div className='flex items-center mb-6'>
                <Clock
                    className='mr-3 text-purple-600'
                    size={24}
                />
                <h2 className='text-2xl font-semibold text-gray-800 dark:text-white'>
                    Recent Watches
                </h2>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                {videos.map((video) => (
                    <div
                        key={video.videoId}
                        onClick={() => {
                            setUrl(video.videoUrl);
                            setVideoId(String(video.videoId));
                            setProgressTime(video.pausedAt);
                        }}
                        className='group relative bg-white dark:bg-[#1f2835] rounded-xl shadow-2xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden'
                    >
                        <div className='relative'>
                            <img
                                src={video.imgUrl}
                                alt={video.videoTitle}
                                className='w-full h-48 object-cover rounded-t-xl'
                            />
                            <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300'>
                                <Play
                                    className='text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                                    size={48}
                                />
                            </div>
                        </div>
                        <ProgressLine
                            progress={Math.round(
                                (video.pausedAt / video.duration) * 100
                            )}
                        />
                        <div className='p-4'>
                            <h3 className='text-lg font-medium text-gray-800 dark:text-white truncate'>
                                {video.videoTitle}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentWatchGallery;
