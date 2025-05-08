import React, { useState } from 'react';
import { FormData, ValidationErrors } from './JobApplicationForm';

interface DocumentUploadProps {
  formData: FormData;
  handleFileChange: (name: string, file: File | null) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  errors: ValidationErrors;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({ formData, handleFileChange, handleChange, errors }) => {
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files && e.target.files[0] ? e.target.files[0] : null;
    handleFileChange(fieldName, file);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">🔹 Document Upload</h2>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
            Resume / CV <span className="text-red-500">*</span>
          </label>
          <div className="mt-1 flex items-center">
            <input
              type="file"
              id="resume"
              onChange={(e) => handleFileInputChange(e, 'resume')}
              accept=".pdf,.doc,.docx"
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-50 file:text-indigo-700
                hover:file:bg-indigo-100"
              required
            />
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Accepted file formats: PDF, DOC, DOCX. Maximum size: 5MB
          </p>
          {formData.resume && (
            <p className="text-sm text-green-600 mt-1">
              File selected: {formData.resume.name}
            </p>
          )}
          {errors.resume && (
            <p className="text-sm text-red-600 mt-1">{errors.resume}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="certificates" className="block text-sm font-medium text-gray-700">
            Certificates (Optional)
          </label>
          <div className="mt-1 flex items-center">
            <input
              type="file"
              id="certificates"
              onChange={(e) => handleFileInputChange(e, 'certificates')}
              accept=".pdf,.doc,.docx,.zip"
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-50 file:text-indigo-700
                hover:file:bg-indigo-100"
            />
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Accepted file formats: PDF, DOC, DOCX, ZIP. Maximum size: 10MB
          </p>
          {formData.certificates && (
            <p className="text-sm text-green-600 mt-1">
              File selected: {formData.certificates.name}
            </p>
          )}
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md">
          <h3 className="text-lg font-medium text-gray-800">Legal Questions</h3>
          
          <div className="mt-4 space-y-4">
            <div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="eligible_to_work"
                    name="eligible_to_work"
                    type="checkbox"
                    checked={formData.eligible_to_work || false}
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="eligible_to_work" className="font-medium text-gray-700">I am legally eligible to work in this country <span className="text-red-500">*</span></label>
                </div>
              </div>
              {errors.eligible_to_work && (
                <p className="text-sm text-red-600 mt-1">{errors.eligible_to_work}</p>
              )}
            </div>
            
            <div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="criminal_record"
                    name="criminal_record"
                    type="checkbox"
                    checked={formData.criminal_record || false}
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="criminal_record" className="font-medium text-gray-700">I have no criminal record that would prevent me from performing the job duties <span className="text-red-500">*</span></label>
                </div>
              </div>
              {errors.criminal_record && (
                <p className="text-sm text-red-600 mt-1">{errors.criminal_record}</p>
              )}
            </div>
            
            <div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="background_check"
                    name="background_check"
                    type="checkbox"
                    checked={formData.background_check || false}
                    onChange={handleChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="background_check" className="font-medium text-gray-700">I consent to a background check if required <span className="text-red-500">*</span></label>
                </div>
              </div>
              {errors.background_check && (
                <p className="text-sm text-red-600 mt-1">{errors.background_check}</p>
              )}
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms_accepted"
                name="terms_accepted"
                type="checkbox"
                checked={formData.terms_accepted || false}
                onChange={handleChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms_accepted" className="font-medium text-gray-700">
                I agree to the <button 
                  type="button" 
                  className="text-indigo-600 hover:text-indigo-800 underline"
                  onClick={() => setShowTermsModal(true)}
                >
                  Terms and Conditions
                </button> <span className="text-red-500">*</span>
              </label>
            </div>
          </div>
          {errors.terms_accepted && (
            <p className="text-sm text-red-600 mt-1">{errors.terms_accepted}</p>
          )}
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Make sure all documents contain accurate information. We may verify these documents during the interview process.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Terms and Conditions Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-xl max-w-2xl mx-4 p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Terms and Conditions</h2>
              <button 
                type="button"
                onClick={() => setShowTermsModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="prose prose-sm text-gray-600">
              <h3>1. Application Process</h3>
              <p>By submitting this application, you acknowledge that all information provided is accurate and complete to the best of your knowledge. Any falsification or misrepresentation may disqualify you from consideration or lead to termination if discovered after employment begins.</p>
              
              <h3>2. Data Privacy</h3>
              <p>You consent to the collection, processing, and storage of your personal information for the purpose of evaluating your application and potential employment. Your information will be handled in accordance with applicable data protection laws.</p>
              
              <h3>3. Background Verification</h3>
              <p>You authorize us to verify information provided in this application, including but not limited to work history, educational qualifications, and references. A separate consent form may be required for criminal background checks.</p>
              
              <h3>4. Equal Opportunity Employment</h3>
              <p>We are an equal opportunity employer and do not discriminate on the basis of race, color, religion, gender, sexual orientation, national origin, age, disability, or any other protected status.</p>
              
              <h3>5. No Guarantee of Employment</h3>
              <p>Submission of this application does not guarantee an interview or employment. All hiring decisions are at the sole discretion of the company.</p>
              
              <h3>6. Communication</h3>
              <p>By providing contact information, you agree to receive communications regarding your application status and potential employment opportunities.</p>
            </div>
            
            <div className="mt-5 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowTermsModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  handleChange({
                    target: {
                      name: 'terms_accepted',
                      type: 'checkbox',
                      checked: true
                    }
                  } as React.ChangeEvent<HTMLInputElement>);
                  setShowTermsModal(false);
                }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                I Agree
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentUpload;