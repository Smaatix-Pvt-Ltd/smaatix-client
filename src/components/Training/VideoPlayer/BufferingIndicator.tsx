import React from 'react';

const BufferingIndicator: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="text-white">Buffering...</div>
    </div>
  );
};

export default BufferingIndicator;