import React from 'react';
import { FormData, ValidationErrors } from './JobApplicationForm';

interface EducationProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  errors: ValidationErrors;
}

const Education: React.FC<EducationProps> = ({ formData, handleChange, errors }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
        <span className="bg-indigo-100 text-indigo-800 p-1 rounded-md mr-2">📚</span>
        Education Details
      </h2>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-1">
            Highest Qualification <span className="text-red-500">*</span>
          </label>
          <select
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            className={`mt-1 text-black block w-full border ${errors.qualification ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200`}
          >
            <option value="">Select qualification</option>
            <option value="High School">High School</option>
            <option value="Associate's Degree">Associate's Degree</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
            <option value="Ph.D">Ph.D</option>
            <option value="Diploma">Diploma</option>
            <option value="Certificate">Certificate</option>
            <option value="Other">Others...</option>
          </select>
          {errors.qualification && (
            <p className="mt-1 text-sm text-red-600">{errors.qualification}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-1">
            Specialization (e.g., Computer Science, Business)
          </label>
          <div className="relative">
            <input
              type="text"
              id="specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              placeholder="Your field of study"
              className="mt-1 text-black block w-full border border-gray-300 rounded-md shadow-sm py-2 pl-3 pr-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">
            University / College Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="university"
              name="university"
              value={formData.university}
              onChange={handleChange}
              placeholder="Institution name"
              className={`mt-1 text-black block w-full border ${errors.university ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 pl-3 pr-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200`}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
          {errors.university && (
            <p className="mt-1 text-sm text-red-600">{errors.university}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="passing_year" className="block text-sm font-medium text-gray-700 mb-1">
            Passing Year <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              id="passing_year"
              name="passing_year"
              value={formData.passing_year}
              onChange={handleChange}
              placeholder="YYYY"
              className={`mt-1 text-black block w-full border ${errors.passing_year ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 pl-3 pr-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200`}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          {errors.passing_year && (
            <p className="mt-1 text-sm text-red-600">{errors.passing_year}</p>
          )}
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="text-sm font-medium text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Education Tips
        </h3>
        <ul className="mt-2 text-sm text-blue-700 list-disc pl-5 space-y-1">
          <li>Include your highest and most relevant qualifications</li>
          <li>Ensure your passing year is in YYYY format (e.g., 2020)</li>
          <li>For recent graduates, highlighting academic achievements can strengthen your application</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;