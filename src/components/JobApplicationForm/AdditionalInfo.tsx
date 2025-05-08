import React, { useState } from 'react';
import { FormData, ValidationErrors } from './JobApplicationForm';

interface AdditionalInfoProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  errors: ValidationErrors;
}

const JOB_SOURCE_OPTIONS = [
  { value: "Job Board", label: "Job Board", icon: "📋" },
  { value: "LinkedIn", label: "LinkedIn", icon: "🔗" },
  { value: "Company Website", label: "Company Website", icon: "🏢" },
  { value: "Referral", label: "Referral", icon: "👥" },
  { value: "Social Media", label: "Social Media", icon: "📱" },
  { value: "University/College", label: "University/College", icon: "🎓" },
  { value: "Career Fair", label: "Career Fair", icon: "🎪" },
  { value: "Search Engine", label: "Search Engine", icon: "🔍" },
  { value: "Other", label: "Other", icon: "✨" }
];

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ formData, handleChange, errors }) => {
  const [charCount, setCharCount] = useState<number>(formData.cover_letter.length);
  const maxChars = 1000;

  const handleCoverLetterChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setCharCount(value.length);
    handleChange(e);
  };

  const renderCharCount = () => {
    const remaining = maxChars - charCount;
    let className = "text-xs";
    if (remaining < 50) className += " text-red-500";
    else if (remaining < 200) className += " text-yellow-600";
    else className += " text-gray-500";
    
    return (
      <div className={`flex justify-end mt-1 ${className}`}>
        {charCount}/{maxChars} characters
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
        <span className="bg-blue-100 text-blue-800 p-1 rounded-md mr-2">🌟</span>
        Additional Information
      </h2>
      
      <div className="space-y-8">
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="cover_letter" className="block text-sm font-medium text-gray-700">
              Cover Letter / Why Should We Hire You?
            </label>
            <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">
              Recommended
            </span>
          </div>
          
          <p className="text-xs text-gray-500 mb-3">
            Share your unique qualities, experience, and motivation. Help us understand why you're the perfect fit.
          </p>
          
          <textarea
            id="cover_letter"
            name="cover_letter"
            value={formData.cover_letter}
            onChange={handleCoverLetterChange}
            rows={5}
            maxLength={maxChars}
            placeholder="Tell us about your passion, relevant experience, and what makes you the ideal candidate..."
            className="mt-1 text-black block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          />
          {renderCharCount()}
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-lg border border-indigo-100">
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="relocation"
                name="relocation"
                checked={formData.relocation}
                onChange={handleChange}
                className="h-5 w-5 text-black text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded transition-all duration-200"
              />
              <label htmlFor="relocation" className="ml-3 block text-sm font-medium text-gray-800">
                Willing to relocate if required
              </label>
            </div>
            <p className="text-xs text-gray-600 ml-8">
              This indicates your flexibility to move to a different location for the job if necessary.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg border border-purple-100">
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="shifts"
                name="shifts"
                checked={formData.shifts}
                onChange={handleChange}
                className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded transition-all duration-200"
              />
              <label htmlFor="shifts" className="ml-3 block text-sm font-medium text-gray-800">
                Can work in different shifts if needed
              </label>
            </div>
            <p className="text-xs text-gray-600 ml-8">
              This shows your availability to work during non-standard hours, including evenings or weekends.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-2">
            How did you hear about us?
          </label>
          
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
            {JOB_SOURCE_OPTIONS.map(option => (
              <label 
                key={option.value} 
                className={`flex flex-col items-center justify-center p-3 rounded-lg cursor-pointer transition-all duration-200 border ${
                  formData.source === option.value 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-blue-200 hover:bg-blue-50/30'
                }`}
              >
                <input
                  type="radio"
                  name="source"
                  value={option.value}
                  checked={formData.source === option.value}
                  onChange={handleChange}
                  className="sr-only"
                />
                <span className="text-2xl mb-1">{option.icon}</span>
                <span className="text-xs text-center text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
          
          {formData.source === "Referral" && (
            <div className="mt-4 p-3 border border-blue-100 rounded-md bg-blue-50">
              <label htmlFor="referral_name" className="block text-sm font-medium text-gray-700 mb-1">
                Who referred you? (Name and Department)
              </label>
              <input
                type="text"
                id="referral_name"
                name="referral_name"
                placeholder="Jane Doe - Marketing"
                className="block w-full text-black border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 mt-6">
        <h3 className="text-sm font-medium text-yellow-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Important Note
        </h3>
        <p className="mt-2 text-sm text-yellow-700">
          By submitting this application, you certify that all information provided is accurate and complete.
          Misrepresentation may disqualify you from consideration or result in termination if discovered after hiring.
        </p>
      </div>
    </div>
  );
};

export default AdditionalInfo;