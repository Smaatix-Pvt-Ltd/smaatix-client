import { useState, useEffect, useContext } from 'react';
import { Play, Clock } from "lucide-react";
import ProgressLine from "./ProgressLine";
import { AppContext } from '../../context/AppContext';

type Video= {
  videoId: number;
  videoTitle: string;
  imgUrl: string;
  videoUrl: string;
  pausedAt: number;
  duration: number;
}


type RecentWatchGalleryProps = {
    isLogin: boolean;
    setUrl: React.Dispatch<React.SetStateAction<string>>;
    setVideoId: React.Dispatch<React.SetStateAction<string>>;
    setProgressTime: React.Dispatch<React.SetStateAction<number>>;
    setRecentWatches: React.Dispatch<React.SetStateAction<boolean>>;
    videos: Video[]; 
};

const RecentWatchGallery: React.FC<RecentWatchGalleryProps> = ({
  isLogin,
  setUrl,
  setVideoId,
  setProgressTime,
  videos,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { isLoggedin, userData } = useContext(AppContext);
  console.log("Component rendering, userData:", userData);

  useEffect(() => {
    if(videos.length > 0){
      setIsLoading(false);
    }
  }, [isLoggedin, userData, isLogin, isLoading]);


 

  if (isLoading) {
    return (
      <div className="p-6 bg-gray-50 dark:bg-[#1f2835] rounded-xl">
        <div className="flex items-center mb-6">
          <Clock className="mr-3 text-purple-600" size={24} />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Recent Watches
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md animate-pulse">
              <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-t-xl"></div>
              <div className="h-2 bg-gray-300 dark:bg-gray-700 w-full"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <div className="p-6 bg-gray-50 dark:bg-[#1f2835] rounded-xl">
        <div className="flex items-center mb-6">
          <Clock className="mr-3 text-purple-600" size={24} />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Recent Watches
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center h-48">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No recently watched videos found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 dark:bg-[#1f2835] rounded-xl">
      <div className="flex items-center mb-6">
        <Clock className="mr-3 text-purple-600" size={24} />
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Recent Watches
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {videos.map((video) => (
          <div
            key={video.videoId}
            onClick={() => {
              setUrl(video.videoUrl);
              setVideoId(String(video.videoId));
              setProgressTime(video.pausedAt);
            }}
            className="group relative bg-white dark:bg-[#1f2835] rounded-xl shadow-2xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="relative">
              <img
                src={video.imgUrl}
                alt={video.videoTitle}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
                <Play className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={48} />
              </div>
            </div>
            <ProgressLine progress={(Math.round((video.pausedAt / video.duration) * 100))} />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800 dark:text-white truncate">
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