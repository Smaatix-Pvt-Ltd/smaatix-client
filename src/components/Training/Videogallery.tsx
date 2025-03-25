import React, { useEffect, useState } from 'react';

const VideoGallery = ({ activeTab, courseSelected, setUrl }) => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (activeTab && courseSelected) {
      fetch(`http://192.168.1.168:8080/api/coursesentity/${activeTab}/${courseSelected}`)
        .then((res) => res.json())
        .then((responseData) => {
          setData(responseData);
        })
        .catch((err) => console.error("Error fetching data:", err));
    }
  }, [activeTab, courseSelected]);

  console.log(data);
  


  useEffect(() => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      if (data[activeTab] && data[activeTab][courseSelected]) {
        setVideos(data[activeTab][courseSelected]);
        console.log("videos",videos);
      } else {
        setVideos([]);
      }
      setIsLoading(false);
    }, 1000); // Simulate 1-second loading delay
  }, [activeTab, courseSelected, data]);

  

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
            No videos found for {courseSelected}.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <div
              onClick={() => setUrl(video.videourl)}
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={video.imgurl}
                alt={video.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
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