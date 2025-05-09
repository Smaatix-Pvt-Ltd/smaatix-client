import React, { useState, useEffect } from 'react';
import PersonalInfo from './PersonalInfo';
import ProfessionalDetails from './ProfessionalDetails';
import Education from './Education';
import Skills from './Skills';
import AdditionalInfo from './AdditionalInfo';
import DocumentUpload from './DocumentUpload';
import ProgressBar from './ProgressBar';
import SubmitSuccess from './SubmitSuccess';

// Define the shape of our form data
export interface FormData {
  // Personal Information
  full_name: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  address: string;
  countryCode:string;
  // Professional Details
  job_title: string;
  experience: string;
  expected_salary: string;
  preferred_role: string;
  preferred_location: string;
  notice_period: string;
  linkedin: string;
  github: string;
  
  // Education
  qualification: string;
  specialization: string;
  university: string;
  passing_year: string;
  
  // Skills
  skills: string[];
  tools: string[];
  certifications: string;
  
  // Additional Information
  cover_letter: string;
  relocation: boolean;
  shifts: boolean;
  source: string;
  
  // Legal Questions
  eligible_to_work?: boolean;
  criminal_record?: boolean;
  background_check?: boolean;
  terms_accepted?: boolean;
  
  // Documents
  resume: File | null;
  certificates: File | null;
}

// Define validation errors interface
export interface ValidationErrors {
  [key: string]: string;
}

const JobApplicationForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [formData, setFormData] = useState<FormData>({
    // Personal Information
    full_name: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    address: '',
    countryCode:'',
    // Professional Details
    job_title: '',
    experience: '',
    expected_salary: '',
    preferred_role: '',
    preferred_location: '',
    notice_period: '',
    linkedin: '',
    github: '',
    
    // Education
    qualification: '',
    specialization: '',
    university: '',
    passing_year: '',
    
    // Skills
    skills: [],
    tools: [],
    certifications: '',
    
    // Additional Information
    cover_letter: '',
    relocation: false,
    shifts: false,
    source: '',
    
    // Legal Questions
    eligible_to_work: false,
    criminal_record: false,
    background_check: false,
    terms_accepted: false,
    
    // Documents
    resume: null,
    certificates: null,
  });

  const totalSteps = 6;

  // Validate current step
  const validateStep = (currentStep: number): boolean => {
    const newErrors: ValidationErrors = {};
    
    switch(currentStep) {
      case 1: // Personal Info
        if (!formData.full_name.trim()) newErrors.full_name = 'Full name is required';
        if (!formData.dob.trim()) newErrors.dob = 'Data of Birth is Required';
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email';
        }
        if (!formData.phone.trim()) {
          newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10,15}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
          newErrors.phone = 'Please enter a valid phone number';
        }
        break;
        
      case 2: // Professional Details
        if (!formData.experience.trim()) newErrors.experience = 'Years of experience is required';
        if (!formData.preferred_role) newErrors.preferred_role = 'Preferred job role is required';
        if (!formData.preferred_location) newErrors.preferred_location = 'Preferred location is required';
        if (formData.linkedin && !/^https?:\/\/linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/.test(formData.linkedin)) {
          newErrors.linkedin = 'Please enter a valid LinkedIn URL';
        }
        if (formData.github && !/^https?:\/\/github\.com\/[a-zA-Z0-9_-]+\/?$/.test(formData.github)) {
          newErrors.github = 'Please enter a valid GitHub URL';
        }
        break;
        
      case 3: // Education
        if (!formData.qualification) newErrors.qualification = 'Qualification is required';
        if (!formData.university.trim()) newErrors.university = 'University/Institution is required';
        if (!formData.passing_year.trim()) {
          newErrors.passing_year = 'Passing year is required';
        } else if (!/^\d{4}$/.test(formData.passing_year) || 
                   parseInt(formData.passing_year) < 1950 || 
                   parseInt(formData.passing_year) > new Date().getFullYear()) {
          newErrors.passing_year = 'Please enter a valid year';
        }
        break;
        
      case 4: // Skills
        if (formData.skills.length === 0) newErrors.skills = 'Please add at least one skill';
        break;
        
      case 5: // Additional Info
        // No required fields
        break;
        
      case 6: // Documents
        if (!formData.resume) newErrors.resume = 'Resume is required';
        if (!formData.eligible_to_work) newErrors.eligible_to_work = 'You must confirm your eligibility to work';
        if (!formData.criminal_record) newErrors.criminal_record = 'You must confirm your criminal record status';
        if (!formData.background_check) newErrors.background_check = 'You must consent to a background check';
        if (!formData.terms_accepted) newErrors.terms_accepted = 'You must accept the terms and conditions';
        break;
        
      default:
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      if (step < totalSteps) {
        setStep(step + 1);
        window.scrollTo(0, 0);
      }
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors({...errors, [name]: ''});
    }
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: checkbox.checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleArrayChange = (name: string, value: string[]) => {
    // Clear error when field is changed
    if (errors[name]) {
      setErrors({...errors, [name]: ''});
    }
    
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (name: string, file: File | null) => {
    // Clear error when field is changed
    if (errors[name]) {
      setErrors({...errors, [name]: ''});
    }
    
    setFormData({ ...formData, [name]: file });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateStep(step)) return;

  setIsLoading(true);

  try {
    formData.phone=formData.countryCode+" "+formData.phone;

    const formDataToSend = new FormData();
    console.log(formDataToSend);
    

    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'skills' || key === 'tools') {
        formDataToSend.append(key, JSON.stringify(value));
      } else if (key === 'resume' || key === 'certificates') {
        if (value) {
          formDataToSend.append(key, value);
        }
      } else if (typeof value === 'boolean') {
        formDataToSend.append(key, value.toString());
      } else if (value !== null && value !== undefined) {
        formDataToSend.append(key, value.toString());
      }
    });

    
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/register/add`, {
      method: 'POST',
      body: formDataToSend,
    });

    if (response.status === 409) {
      const errorData = await response.json();
      alert(errorData.message || "User with this email or phone number already exists.");
      return;
    }

    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Server response:', result);
    setIsSubmitted(true);
  } catch (error) {
    console.error('Error submitting form:', error);
    alert("Something went wrong. Please try again.");
  } finally {
    setIsLoading(false);
  }
};

  
  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <PersonalInfo 
            formData={formData} 
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 2:
        return (
          <ProfessionalDetails 
            formData={formData} 
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 3:
        return (
          <Education 
            formData={formData} 
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 4:
        return (
          <Skills 
            formData={formData} 
            handleChange={handleChange}
            handleArrayChange={handleArrayChange}
            errors={errors}
          />
        );
      case 5:
        return (
          <AdditionalInfo 
            formData={formData} 
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 6:
        return (
          <DocumentUpload 
            formData={formData}
            handleFileChange={handleFileChange}
            handleChange={handleChange}
            errors={errors}
          />
        );
      default:
        return null;
    }
  };
  
  if (isSubmitted) {
    return <SubmitSuccess />;
  }

  return (
    <div className="min-h-screen  border-b border-[--header-border] bg-[--header-background] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-indigo-600 py-4">
          <h1 className="text-3xl font-bold text-center text-white">
            Job Application Form
          </h1>
          <p className="text-center text-indigo-100 mt-1">Fill out the form to apply for your dream job</p>
        </div>
        
        <div className="p-8">
          <ProgressBar currentStep={step} totalSteps={totalSteps} />
          
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {renderStep()}
            
            <div className="flex justify-between pt-5 border-t border-gray-200">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={step === 1}
                className={`px-4 py-2.5 rounded-md transition-all duration-200 ${
                  step === 1 
                  ? 'bg-gray-300 cursor-not-allowed' 
                  : 'bg-gray-600 text-white hover:bg-gray-700 hover:shadow-md'
                }`}
              >
                ← Previous
              </button>
              
              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-4 py-2.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all duration-200 hover:shadow-md flex items-center"
                >
                  Next →
                </button>
              ) : (
                <button
                  type="submit"
                  className={`px-6 py-2.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-200 hover:shadow-md flex items-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationForm;