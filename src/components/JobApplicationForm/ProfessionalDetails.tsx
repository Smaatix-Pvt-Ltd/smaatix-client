// components/ProfessionalDetails.tsx
import React from 'react';
import { FormData, ValidationErrors } from './JobApplicationForm';

interface ProfessionalDetailsProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  errors: ValidationErrors;
}

const ProfessionalDetails: React.FC<ProfessionalDetailsProps> = ({ formData, handleChange, errors }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 flex items-center">
        <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">2</span>
        Professional Details
      </h2>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="job_title" className="block text-sm font-medium text-gray-700">
            Current Job Title
          </label>
          <input
            type="text"
            id="job_title"
            name="job_title"
            value={formData.job_title}
            onChange={handleChange}
            className="mt-1 text-black block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
            placeholder="Enter Role"
          />
        </div>
        
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
            Years of Experience (Eg : 3) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className={`mt-1 text-black block w-full border ${errors.experience ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`}
            placeholder="3"
          />
          {errors.experience && (
            <p className="mt-1 text-sm text-red-600">{errors.experience}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="expected_salary" className="block text-sm font-medium text-gray-700">
            Expected Salary
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">₹</span>
            </div>
            <input
              type="text"
              id="expected_salary"
              name="expected_salary"
              value={formData.expected_salary}
              onChange={handleChange}
              className="block text-black w-full pl-7 pr-12 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
              placeholder="75,000"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">INR/year</span>
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="preferred_role" className="block text-sm font-medium text-gray-700">
            Preferred Job Role <span className="text-red-500">*</span>
          </label>
          <select
            id="preferred_role"
            name="preferred_role"
            value={formData.preferred_role}
            onChange={handleChange}
            required
            className={`mt-1 text-black block w-full border ${errors.preferred_role ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`}
          >
            <option value="">Select job role</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Fullstack Developer">Fullstack Developer</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Product Manager">Product Manager</option>
            <option value="QA Engineer">QA Engineer</option>
            <option value="Others">Others...</option>

          </select>
          {errors.preferred_role && (
            <p className="mt-1 text-sm text-red-600">{errors.preferred_role}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="preferred_location" className="block text-sm font-medium text-gray-700">
            Choose Work Type <span className="text-red-500">*</span>
          </label>
          <select
            id="preferred_location"
            name="preferred_location"
            value={formData.preferred_location}
            onChange={handleChange}
            required
            className={`mt-1 text-black block w-full border ${errors.preferred_location ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`}
          >
            <option value="">Select Work Preference</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
            <option value="Hybrid">Hybrid</option>
          </select>
          {errors.preferred_location && (
            <p className="mt-1 text-sm text-red-600">{errors.preferred_location}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="notice_period" className="block text-sm font-medium text-gray-700">
            Notice Period (in days)
          </label>
          <input
            type="text"
            id="notice_period"
            name="notice_period"
            value={formData.notice_period}
            onChange={handleChange}
            className="mt-1 text-black block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
            placeholder="30"
          />
        </div>
        
        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
            LinkedIn Profile
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              https://
            </span>
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin.replace(/^https?:\/\//, '')}
              onChange={(e) => handleChange({
                ...e,
                target: {
                  ...e.target,
                  name: 'linkedin',
                  value: `https://${e.target.value.replace(/^https?:\/\//, '')}`
                }
              })}
              className={`flex-1 text-black block w-full rounded-none rounded-r-md border ${errors.linkedin ? 'border-red-500' : 'border-gray-300'} py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`}
              placeholder="linkedin.com/in/username"
            />
          </div>
          {errors.linkedin && (
            <p className="mt-1 text-sm text-red-600">{errors.linkedin}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="github" className="block text-sm font-medium text-gray-700">
            GitHub / Portfolio URL
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              https://
            </span>
            <input
              type="text"
              id="github"
              name="github"
              value={formData.github.replace(/^https?:\/\//, '')}
              onChange={(e) => handleChange({
                ...e,
                target: {
                  ...e.target,
                  name: 'github',
                  value: `https://${e.target.value.replace(/^https?:\/\//, '')}`
                }
              })}
              className={`flex-1 text-black block w-full rounded-none rounded-r-md border ${errors.github ? 'border-red-500' : 'border-gray-300'} py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`}
              placeholder="github.com/username"
            />
          </div>
          {errors.github && (
            <p className="mt-1 text-sm text-red-600">{errors.github}</p>
          )}
        </div>
      </div>
      
      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 mt-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-indigo-800">Professional tip</h3>
            <div className="mt-2 text-sm text-indigo-700">
              <p>Providing accurate information about your experience and salary expectations helps us match you with the right opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetails;