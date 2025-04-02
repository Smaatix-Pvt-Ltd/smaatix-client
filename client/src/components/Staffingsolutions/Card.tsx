import React from 'react';

interface CardProps {
  logo?: React.ReactNode;
  heading: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
}

const Card: React.FC<CardProps> = ({ 
  logo, 
  heading, 
  description, 
  linkText = "Learn More", 
  linkUrl = "#" 
}) => {
    return (
        <div className="max-w-sm min-w-[320px] min-h-[340px] w-full rounded-2xl rounded-bl-[80px] shadow-lg bg-white dark:bg-gray-800 p-6 flex flex-col justify-between z-10 opacity-90 relative box-shadow-xl">
            
            {/* Blob Background */}
            <div className="absolute -top-3 left-2 w-16 h-16 pt-6">
                <svg viewBox="0 0 150 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="url(#blobGradient)" d="M40,-69.3C50.6,-58.9,56.2,-43.9,61.4,-29.9C66.6,-15.9,71.4,-2.9,69.9,9C68.3,21,60.4,32,51.3,40.5C42.2,49,31.9,55.1,21,57.3C10.1,59.5,-1.5,57.7,-16,57.3C-30.5,56.8,-47.8,57.7,-58.1,49.6C-68.4,41.5,-71.6,24.5,-73.8,7.9C-76.1,-8.7,-77.5,-24,-68.9,-32.6C-60.2,-41.2,-41.6,-43,-27.5,-50.9C-13.3,-58.9,-6.7,-72.9,5.4,-80.5C17.5,-88.1,35,-89.7,40,-69.3Z" transform="translate(100 100)" />
                    <defs>
                        <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#6b21a8" /> {/* Purple */}
                            <stop offset="100%" stopColor="#d4d4d4" /> {/* Zinc */}
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Card Content */}
            <div className="flex flex-col relative pt-2">
              {logo && (
                <div className="mb-4 pb-7 relative z-10">
                  {logo}
                </div>
              )}
              <div className="font-bold text-xl mb-2 text-gray-800 dark:text-white">{heading}</div>
              <p className="text-gray-700 dark:text-gray-300 text-base">
                {description}
              </p>
            </div>

            {/* Link */}
            <div className="mt-4 pt-2 pb-3">
              <a 
                href={linkUrl} 
                className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-600 font-medium"
              >
                {linkText} →
              </a>
            </div>
        </div>
      );
};

export default Card;
