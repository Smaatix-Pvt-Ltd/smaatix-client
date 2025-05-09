import React from 'react';

const ScrollingText = () => {
  const message = "🚀 We're hiring! 💼 Visit our careers portal 🌐 and fill out the application form 📝 to join our amazing team 🙌";

  return (
    <div className="relative w-full bg-red-600 overflow-hidden whitespace-nowrap h-8">
      {/* We create two identical divs - one follows the other to create continuous scrolling */}
      <div className="flex animate-marquee items-center">
        {/* First copy of the content */}
        <div className="flex items-center text-white text-xl whitespace-nowrap">
          <span className="px-4">{message}</span>
          <span className="px-4">{message}</span>
          <span className="px-4">{message}</span>
        </div>
        
        {/* Second copy that follows immediately after */}
        <div className="flex items-center text-white text-xl whitespace-nowrap">
          <span className="px-4">{message}</span>
          <span className="px-4">{message}</span>
          <span className="px-4">{message}</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          width: max-content;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollingText;