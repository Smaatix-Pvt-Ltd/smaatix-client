import React from 'react';

interface ProgressBarProps {
  progress: number;
  buffered: number; // Add buffered progress as a prop
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  progressRef: React.RefObject<HTMLDivElement>;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  buffered, 
  onClick, 
  progressRef 
}) => {
  return (
    <div
      className="w-full h-1 bg-gray-700 rounded-full relative cursor-pointer"
      onClick={onClick}
      ref={progressRef}
    >
      {/* Buffered progress (light gray) */}
      <div
        className="h-1 bg-gray-500 rounded-full absolute top-0 left-0"
        style={{ width: `${buffered}%` }}
      ></div>
      
      {/* Current progress (purple) */}
      <div
        className="h-1 bg-purple-500 rounded-full relative z-10"
        style={{ width: `${progress}%` }}
      ></div>
      
      {/* Progress thumb */}
      <div
        className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-sm z-20"
        style={{ left: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;