import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = Math.round((currentStep / totalSteps) * 100);
  
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-indigo-700">Step {currentStep} of {totalSteps}</span>
        <span className="text-sm font-medium text-indigo-700">{progress}% Complete</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between mt-2">
        <div className="text-xs text-gray-500">Personal Info</div>
        <div className="text-xs text-gray-500">Professional</div>
        <div className="text-xs text-gray-500">Education</div>
        <div className="text-xs text-gray-500">Skills</div>
        <div className="text-xs text-gray-500">Additional</div>
        <div className="text-xs text-gray-500">Documents</div>
      </div>
    </div>
  );
};

export default ProgressBar;



