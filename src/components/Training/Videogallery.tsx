import React, { useEffect, useState } from 'react';
import { Play } from "lucide-react";

interface Video {
  videoUrl: string;
  videoId: string;
  imgUrl: string;
  title: string;
  description: string;
}

type VideoGalleryProps = {
  activeTab: string;
  courseSelected: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  setVideoId: React.Dispatch<React.SetStateAction<string>>;
  setProgressTime: React.Dispatch<React.SetStateAction<number>>;
};

const VideoGallery: React.FC<VideoGalleryProps> = ({ activeTab, courseSelected, setUrl, setVideoId, setProgressTime }) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const ErrorMsg= courseSelected === "" ? `this ${activeTab}` : `this ${courseSelected}`;


  useEffect(() => {
    if (activeTab && courseSelected) {
      setIsLoading(true);
      fetch(`http://192.168.1.202:3000/api/course/courses/${activeTab}/${courseSelected}`)
        .then((res) => res.json())
        .then((responseData) => {
          // Make sure responseData is an array before setting it
          const videosArray = Array.isArray(responseData) ? responseData : [];
          setVideos(videosArray);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
          setVideos([]);
          setIsLoading(false);
        });
    }
  }, [activeTab, courseSelected]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">
        {courseSelected} Videos
      </h2>
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md animate-pulse"
              >
                <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-t-lg"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
              </div>
            ))}
        </div>
      ) : videos.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No videos found for {ErrorMsg}.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <div
              onClick={() => {
                setUrl(video.videoUrl);
                setVideoId(video.videoId);
                setProgressTime(0); // Reset progress time when a new video is selected
              }}
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="relative">
                <img
                  src={video.imgUrl}
                  loading="lazy" 
                  alt={video.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
                  <Play className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={48} />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 dark:text-white">
                  {video.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoGallery;