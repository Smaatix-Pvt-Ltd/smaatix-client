import React, { useState } from 'react';
import { FormData, ValidationErrors } from './JobApplicationForm';

interface SkillsProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleArrayChange: (name: string, value: string[]) => void;
  errors: ValidationErrors;
}

const SKILL_OPTIONS = [
  'JavaScript', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 
  'Express', 'Python', 'Django', 'Flask', 'Ruby', 'Rails', 'PHP', 'Laravel',
  'Java', 'Spring Boot', 'C#', '.NET', 'Swift', 'Kotlin', 'SQL', 'MongoDB',
  'PostgreSQL', 'MySQL', 'Redis', 'GraphQL', 'REST API', 'CSS', 'Sass',
  'Tailwind CSS', 'Bootstrap', 'Material UI', 'HTML5', 'Docker', 'Kubernetes',
  'AWS', 'Azure', 'GCP', 'CI/CD', 'Git', 'GitHub Actions', 'Jenkins'
];

const TOOL_OPTIONS = [
  'Visual Studio Code', 'IntelliJ IDEA', 'PyCharm', 'WebStorm', 'Eclipse',
  'Sublime Text', 'Atom', 'Git', 'GitHub', 'GitLab', 'Bitbucket', 'JIRA',
  'Trello', 'Asana', 'Slack', 'Microsoft Teams', 'Zoom', 'Postman', 'Insomnia',
  'Docker', 'Kubernetes', 'AWS Console', 'Azure Portal', 'GCP Console',
  'DBeaver', 'MongoDB Compass', 'Figma', 'Adobe XD', 'Sketch', 'Webpack',
  'Babel', 'NPM', 'Yarn', 'Terminal', 'Jenkins', 'CircleCI', 'Travis CI'
];

const SKILL_CATEGORIES = {
  "Frontend": ['JavaScript', 'TypeScript', 'React', 'Angular', 'Vue.js', 'CSS', 'Sass', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'HTML5'],
  "Backend": ['Node.js', 'Express', 'Python', 'Django', 'Flask', 'Ruby', 'Rails', 'PHP', 'Laravel', 'Java', 'Spring Boot', 'C#', '.NET'],
  "Mobile": ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Xamarin'],
  "Database": ['SQL', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
  "DevOps": ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'CI/CD', 'Git', 'GitHub Actions', 'Jenkins'],
  "API": ['GraphQL', 'REST API', 'gRPC', 'WebSockets']
};

const Skills: React.FC<SkillsProps> = ({ formData, handleChange, handleArrayChange, errors }) => {
  const [skillInput, setSkillInput] = useState<string>('');
  const [toolInput, setToolInput] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleSkillChange = (skill: string) => {
    const updatedSkills = formData.skills.includes(skill)
      ? formData.skills.filter(s => s !== skill)
      : [...formData.skills, skill];
    
    handleArrayChange('skills', updatedSkills);
  };

  const handleToolChange = (tool: string) => {
    const updatedTools = formData.tools.includes(tool)
      ? formData.tools.filter(t => t !== tool)
      : [...formData.tools, tool];
    
    handleArrayChange('tools', updatedTools);
  };

  const addCustomSkill = () => {
    if (skillInput.trim() !== '' && !formData.skills.includes(skillInput)) {
      handleArrayChange('skills', [...formData.skills, skillInput]);
      setSkillInput('');
    }
  };

  const addCustomTool = () => {
    if (toolInput.trim() !== '' && !formData.tools.includes(toolInput)) {
      handleArrayChange('tools', [...formData.tools, toolInput]);
      setToolInput('');
    }
  };

  const handleSkillInputKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addCustomSkill();
    }
  };

  const handleToolInputKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addCustomTool();
    }
  };

  const filteredSkillOptions = activeCategory === "All" 
    ? SKILL_OPTIONS 
    : SKILL_OPTIONS.filter(skill => SKILL_CATEGORIES[activeCategory]?.includes(skill));

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
        <span className="bg-purple-100 text-purple-800 p-1 rounded-md mr-2">⚡</span>
        Technical Expertise
      </h2>
      
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-5 rounded-lg border border-indigo-100">
          <label className="block text-sm font-medium text-gray-800 mb-3">
            Technical Skills <span className="text-red-500">*</span>
          </label>
          
          {formData.skills.length > 0 ? (
            <div className="flex flex-wrap gap-2 mb-4 min-h-8">
              {formData.skills.map(skill => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 bg-indigo-100 text-indigo-800 rounded-full text-sm flex items-center shadow-sm hover:shadow-md transition-all duration-200"
                >
                  {skill}
                  <button 
                    type="button" 
                    onClick={() => handleSkillChange(skill)}
                    className="ml-2 text-indigo-600 hover:text-indigo-800 focus:outline-none"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          ) : (
            <div className="mb-4 py-2 text-sm text-gray-500 italic">
              {errors.skills ? (
                <p className="text-red-500">{errors.skills}</p>
              ) : (
                "No skills selected yet. Add from the list below or enter custom skills."
              )}
            </div>
          )}
          
          <div className="flex gap-2">
            <div className="relative flex-grow">
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyPress={handleSkillInputKeyPress}
                placeholder="Add a custom skill"
                className="block w-full border border-indigo-300 rounded-md shadow-sm py-2 pl-3 pr-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <button
              type="button"
              onClick={addCustomSkill}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all duration-200 hover:shadow-md flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add
            </button>
          </div>
          
          <div className="mt-4 mb-2 flex gap-2 overflow-x-auto pb-2">
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
                activeCategory === "All" 
                ? "bg-indigo-600 text-white" 
                : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
              } transition-all duration-200`}
            >
              All Skills
            </button>
            {Object.keys(SKILL_CATEGORIES).map(category => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
                  activeCategory === category 
                  ? "bg-indigo-600 text-white" 
                  : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                } transition-all duration-200`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="mt-2 max-h-56 overflow-y-auto border border-indigo-200 rounded-md p-3 bg-white">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {filteredSkillOptions.map(skill => (
                <label key={skill} className="inline-flex items-center cursor-pointer p-1.5 hover:bg-indigo-50 rounded-md transition-all duration-200">
                  <input
                    type="checkbox"
                    checked={formData.skills.includes(skill)}
                    onChange={() => handleSkillChange(skill)}
                    className="form-checkbox h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{skill}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-50 to-teal-50 p-5 rounded-lg border border-green-100">
          <label className="block text-sm font-medium text-gray-800 mb-3">
            Tools & Platforms You Use
          </label>
          
          <div className="flex flex-wrap gap-2 mb-4 min-h-8">
            {formData.tools.map(tool => (
              <span 
                key={tool} 
                className="px-3 py-1.5 bg-green-100 text-green-800 rounded-full text-sm flex items-center shadow-sm hover:shadow-md transition-all duration-200"
              >
                {tool}
                <button 
                  type="button" 
                  onClick={() => handleToolChange(tool)}
                  className="ml-2 text-green-600 hover:text-green-800 focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            ))}
            {formData.tools.length === 0 && (
              <span className="py-2 text-sm text-gray-500 italic">
                No tools selected yet. Add from the list below or enter custom tools.
              </span>
            )}
          </div>
          
          <div className="flex gap-2">
            <div className="relative flex-grow">
              <input
                type="text"
                value={toolInput}
                onChange={(e) => setToolInput(e.target.value)}
                onKeyPress={handleToolInputKeyPress}
                placeholder="Add a custom tool"
                className="block w-full border border-green-300 rounded-md shadow-sm py-2 pl-3 pr-10 focus:outline-none focus:ring-green-500 focus:border-green-500 transition-all duration-200"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <button
              type="button"
              onClick={addCustomTool}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-200 hover:shadow-md flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add
            </button>
          </div>
          
          <div className="mt-3 max-h-48 overflow-y-auto border border-green-200 rounded-md p-3 bg-white">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {TOOL_OPTIONS.map(tool => (
                <label key={tool} className="inline-flex items-center cursor-pointer p-1.5 hover:bg-green-50 rounded-md transition-all duration-200">
                  <input
                    type="checkbox"
                    checked={formData.tools.includes(tool)}
                    onChange={() => handleToolChange(tool)}
                    className="form-checkbox h-4 w-4 text-green-600 rounded focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{tool}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <label htmlFor="certifications" className="block text-sm font-medium text-gray-700 mb-2">
            Professional Certifications (Optional)
          </label>
          <p className="text-xs text-gray-500 mb-3">List your certifications with the issuing authority and year</p>
          <textarea
            id="certifications"
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
            rows={3}
            placeholder="E.g., AWS Certified Solutions Architect - Amazon Web Services (2023)"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
          />
        </div>
      </div>

      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 mt-6">
        <h3 className="text-sm font-medium text-indigo-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Pro Tips
        </h3>
        <ul className="mt-2 text-sm text-indigo-700 list-disc pl-5 space-y-1">
          <li>Be specific about your technical skills - highlight your expertise level if possible</li>
          <li>Include both hard technical skills and soft skills that make you stand out</li>
          <li>Add relevant certifications that demonstrate your commitment to professional growth</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;