// components/PersonalInfo.tsx
import React from 'react';
import { FormData, ValidationErrors } from './JobApplicationForm';

interface PersonalInfoProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  errors: ValidationErrors;
}

const countryPhoneLengthMap = {
  '+1': 10,       // USA/Canada – standard 10-digit numbers
  '+7': 10,       // Russia/Kazakhstan – typically 10 digits
  '+20': 10,      // Egypt – usually 10 digits
  '+27': 9,       // South Africa – typically 9 digits
  '+30': 10,      // Greece – usually 10 digits
  '+31': 9,       // Netherlands – typically 9 digits
  '+32': 9,       // Belgium – usually 9 digits
  '+33': 9,       // France – typically 9 digits
  '+34': 9,       // Spain – usually 9 digits
  '+36': 9,       // Hungary – typically 9 digits
  '+39': 10,      // Italy – usually 10 digits (9 for mobile)
  '+40': 9,       // Romania – typically 9 digits
  '+41': 9,       // Switzerland – usually 9 digits
  '+43': 10,      // Austria – typically 10 digits (variable)
  '+44': 10,      // UK – typically 10 digits after removing leading 0
  '+45': 8,       // Denmark – usually 8 digits
  '+46': 9,       // Sweden – typically 9 digits
  '+47': 8,       // Norway – usually 8 digits
  '+48': 9,       // Poland – typically 9 digits
  '+49': 11,      // Germany – common max length for mobile/landline
  '+51': 9,       // Peru – usually 9 digits
  '+52': 10,      // Mexico – typically 10 digits
  '+53': 8,       // Cuba – usually 8 digits
  '+54': 10,      // Argentina – typically 10 digits
  '+55': 11,      // Brazil – usually 11 digits (9 after area code)
  '+56': 9,       // Chile – typically 9 digits
  '+57': 10,      // Colombia – usually 10 digits
  '+58': 10,      // Venezuela – typically 10 digits
  '+60': 9,       // Malaysia – usually 9-10 digits
  '+61': 9,       // Australia – usually 9 digits after country code
  '+62': 10,      // Indonesia – typically 10-12 digits
  '+63': 10,      // Philippines – usually 10 digits
  '+64': 9,       // New Zealand – typically 9 digits
  '+65': 8,       // Singapore – usually 8 digits
  '+66': 9,       // Thailand – typically 9 digits
  '+81': 10,      // Japan – generally 10 digits (may vary slightly)
  '+82': 9,       // South Korea – typically 9-10 digits
  '+84': 9,       // Vietnam – usually 9-10 digits
  '+86': 11,      // China – typically 11 digits
  '+90': 10,      // Turkey – usually 10 digits
  '+91': 10,      // India – standard 10-digit mobile numbers
  '+92': 10,      // Pakistan – typically 10 digits
  '+93': 9,       // Afghanistan – usually 9 digits
  '+94': 9,       // Sri Lanka – typically 9 digits
  '+95': 8,       // Myanmar – usually 8-9 digits
  '+98': 10,      // Iran – typically 10 digits
  '+212': 9,      // Morocco – usually 9 digits
  '+213': 9,      // Algeria – typically 9 digits
  '+216': 8,      // Tunisia – usually 8 digits
  '+218': 9,      // Libya – typically 9 digits
  '+220': 7,      // Gambia – usually 7 digits
  '+221': 9,      // Senegal – typically 9 digits
  '+222': 8,      // Mauritania – usually 8 digits
  '+223': 8,      // Mali – typically 8 digits
  '+224': 8,      // Guinea – usually 8 digits
  '+225': 10,     // Ivory Coast – typically 10 digits
  '+226': 8,      // Burkina Faso – usually 8 digits
  '+227': 8,      // Niger – typically 8 digits
  '+228': 8,      // Togo – usually 8 digits
  '+229': 8,      // Benin – typically 8 digits
  '+230': 7,      // Mauritius – usually 7 digits
  '+231': 7,      // Liberia – typically 7-8 digits
  '+232': 8,      // Sierra Leone – usually 8 digits
  '+233': 9,      // Ghana – typically 9 digits
  '+234': 10,     // Nigeria – usually 10 digits
  '+235': 8,      // Chad – typically 8 digits
  '+236': 8,      // Central African Republic – usually 8 digits
  '+237': 9,      // Cameroon – typically 9 digits
  '+238': 7,      // Cape Verde – usually 7 digits
  '+239': 7,      // Sao Tome and Principe – typically 7 digits
  '+240': 9,      // Equatorial Guinea – usually 9 digits
  '+241': 7,      // Gabon – typically 7 digits
  '+242': 9,      // Republic of the Congo – usually 9 digits
  '+243': 9,      // DR Congo – typically 9 digits
  '+244': 9,      // Angola – usually 9 digits
  '+245': 7,      // Guinea-Bissau – typically 7 digits
  '+246': 7,      // British Indian Ocean Territory – usually 7 digits
  '+248': 7,      // Seychelles – typically 7 digits
  '+249': 9,      // Sudan – usually 9 digits
  '+250': 9,      // Rwanda – typically 9 digits
  '+251': 9,      // Ethiopia – usually 9 digits
  '+252': 8,      // Somalia – typically 8 digits
  '+253': 8,      // Djibouti – usually 8 digits
  '+254': 9,      // Kenya – typically 9 digits
  '+255': 9,      // Tanzania – usually 9 digits
  '+256': 9,      // Uganda – typically 9 digits
  '+257': 8,      // Burundi – usually 8 digits
  '+258': 9,      // Mozambique – typically 9 digits
  '+260': 9,      // Zambia – usually 9 digits
  '+261': 9,      // Madagascar – typically 9 digits
  '+262': 9,      // Mayotte/Reunion – usually 9 digits
  '+263': 9,      // Zimbabwe – typically 9 digits
  '+264': 9,      // Namibia – usually 9 digits
  '+265': 9,      // Malawi – typically 9 digits
  '+266': 8,      // Lesotho – usually 8 digits
  '+267': 8,      // Botswana – typically 8 digits
  '+268': 8,      // Eswatini – usually 8 digits
  '+269': 7,      // Comoros – typically 7 digits
  '+290': 4,      // Saint Helena – usually 4 digits
  '+291': 7,      // Eritrea – typically 7 digits
  '+297': 7,      // Aruba – usually 7 digits
  '+298': 6,      // Faroe Islands – typically 6 digits
  '+299': 6,      // Greenland – usually 6 digits
  '+350': 8,      // Gibraltar – typically 8 digits
  '+351': 9,      // Portugal – usually 9 digits
  '+352': 9,      // Luxembourg – typically 9 digits
  '+353': 9,      // Ireland – usually 9 digits
  '+354': 7,      // Iceland – typically 7 digits
  '+355': 9,      // Albania – usually 9 digits
  '+356': 8,      // Malta – typically 8 digits
  '+357': 8,      // Cyprus – usually 8 digits
  '+358': 9,      // Finland – typically 9 digits
  '+359': 9,      // Bulgaria – usually 9 digits
  '+370': 8,      // Lithuania – typically 8 digits
  '+371': 8,      // Latvia – usually 8 digits
  '+372': 8,      // Estonia – typically 7-8 digits
  '+373': 8,      // Moldova – usually 8 digits
  '+374': 8,      // Armenia – typically 8 digits
  '+375': 9,      // Belarus – usually 9 digits
  '+376': 6,      // Andorra – typically 6 digits
  '+377': 8,      // Monaco – usually 8 digits
  '+378': 10,     // San Marino – typically 10 digits
  '+379': 10,     // Vatican City – usually 10 digits
  '+380': 9,      // Ukraine – typically 9 digits
  '+381': 9,      // Serbia – usually 9 digits
  '+382': 8,      // Montenegro – typically 8 digits
  '+383': 8,      // Kosovo – usually 8 digits
  '+385': 9,      // Croatia – typically 9 digits
  '+386': 8,      // Slovenia – usually 8 digits
  '+387': 8,      // Bosnia and Herzegovina – typically 8 digits
  '+389': 8,      // North Macedonia – usually 8 digits
  '+420': 9,      // Czech Republic – typically 9 digits
  '+421': 9,      // Slovakia – usually 9 digits
  '+423': 7,      // Liechtenstein – typically 7 digits
  '+500': 5,      // Falkland Islands – usually 5 digits
  '+501': 7,      // Belize – typically 7 digits
  '+502': 8,      // Guatemala – usually 8 digits
  '+503': 8,      // El Salvador – typically 8 digits
  '+504': 8,      // Honduras – usually 8 digits
  '+505': 8,      // Nicaragua – typically 8 digits
  '+506': 8,      // Costa Rica – usually 8 digits
  '+507': 8,      // Panama – typically 8 digits
  '+508': 6,      // Saint Pierre and Miquelon – usually 6 digits
  '+509': 8,      // Haiti – typically 8 digits
  '+590': 9,      // Guadeloupe/Saint Martin – usually 9 digits
  '+591': 8,      // Bolivia – typically 8 digits
  '+592': 7,      // Guyana – usually 7 digits
  '+593': 9,      // Ecuador – typically 9 digits
  '+594': 9,      // French Guiana – usually 9 digits
  '+595': 9,      // Paraguay – typically 9 digits
  '+596': 9,      // Martinique – usually 9 digits
  '+597': 7,      // Suriname – typically 7 digits
  '+598': 8,      // Uruguay – usually 8 digits
  '+599': 7,      // Curaçao/Caribbean Netherlands – typically 7 digits
  '+670': 7,      // East Timor – usually 7 digits
  '+672': 5,      // Antarctica – typically 5 digits
  '+673': 7,      // Brunei – usually 7 digits
  '+674': 7,      // Nauru – typically 7 digits
  '+675': 8,      // Papua New Guinea – usually 8 digits
  '+676': 7,      // Tonga – typically 5-7 digits
  '+677': 7,      // Solomon Islands – usually 7 digits
  '+678': 7,      // Vanuatu – typically 7 digits
  '+679': 7,      // Fiji – usually 7 digits
  '+680': 7,      // Palau – typically 7 digits
  '+681': 6,      // Wallis and Futuna – usually 6 digits
  '+682': 5,      // Cook Islands – typically 5 digits
  '+683': 4,      // Niue – usually 4 digits
  '+685': 7,      // Samoa – typically 5-7 digits
  '+686': 8,      // Kiribati – usually 8 digits
  '+687': 6,      // New Caledonia – typically 6 digits
  '+688': 5,      // Tuvalu – usually 5 digits
  '+689': 6,      // French Polynesia – typically 6 digits
  '+690': 4,      // Tokelau – usually 4 digits
  '+691': 7,      // Micronesia – typically 7 digits
  '+692': 7,      // Marshall Islands – usually 7 digits
  '+850': 10,     // North Korea – typically 10 digits
  '+852': 8,      // Hong Kong – usually 8 digits
  '+853': 8,      // Macau – typically 8 digits
  '+855': 9,      // Cambodia – usually 9 digits
  '+856': 10,     // Laos – typically 10 digits
  '+872': 9,      // Inmarsat – usually 9 digits
  '+880': 10,     // Bangladesh – typically 10 digits
  '+886': 9,      // Taiwan – usually 9 digits
  '+960': 7,      // Maldives – typically 7 digits
  '+961': 8,      // Lebanon – usually 8 digits
  '+962': 9,      // Jordan – typically 9 digits
  '+963': 9,      // Syria – usually 9 digits
  '+964': 10,     // Iraq – typically 10 digits
  '+965': 8,      // Kuwait – usually 8 digits
  '+966': 9,      // Saudi Arabia – typically 9 digits
  '+967': 9,      // Yemen – usually 9 digits
  '+968': 8,      // Oman – typically 8 digits
  '+970': 9,      // Palestine – usually 9 digits
  '+971': 9,      // UAE – typically 9 digits
  '+972': 9,      // Israel – usually 9 digits
  '+973': 8,      // Bahrain – typically 8 digits
  '+974': 8,      // Qatar – usually 8 digits
  '+975': 8,      // Bhutan – typically 8 digits
  '+976': 8,      // Mongolia – usually 8 digits
  '+977': 10,     // Nepal – typically 10 digits
  '+992': 9,      // Tajikistan – usually 9 digits
  '+993': 8,      // Turkmenistan – typically 8 digits
  '+994': 9,      // Azerbaijan – usually 9 digits
  '+995': 9,      // Georgia – typically 9 digits
  '+996': 9,      // Kyrgyzstan – usually 9 digits
  '+998': 9       // Uzbekistan – typically 9 digits
};

const PersonalInfo: React.FC<PersonalInfoProps> = ({ formData, handleChange, errors }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 flex items-center">
        <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm">1</span>
        Personal Information
      </h2>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            required
            className={`mt-1 text-black block w-full border ${errors.full_name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`}
            placeholder="Enter Full Name"
          />
          {errors.full_name && (
            <p className="mt-1 text-sm text-red-600">{errors.full_name}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`mt-1 text-black block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`}
            placeholder="Enter Email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
        
      <div>
  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
    Phone Number <span className="text-red-500">*</span>
  </label>

  <div className="flex space-x-2 mt-1">
    {/* Country Code Dropdown */}
    <select
      id="countryCode"
      name="countryCode"
      value={formData.countryCode}
      onChange={handleChange}
      required
      className="text-black block w-28 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
    >
      {Object.entries(countryPhoneLengthMap).map(([code]) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </select>

    {/* Phone Input */}
    <input
      type="tel"
      id="phone"
      name="phone"
      value={formData.phone}
      onChange={(e) => {
        const value = e.target.value;
        const maxLength = countryPhoneLengthMap[formData.countryCode] || 10;
        if (/^\d*$/.test(value) && value.length <= maxLength) {
          handleChange(e);
        }
      }}
      required
      className={`text-black block w-full border ${
        errors.phone ? 'border-red-500' : 'border-gray-300'
      } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150`}
      placeholder={`Enter up to ${
        countryPhoneLengthMap[formData.countryCode] || 10
      } digits`}
    />
  </div>

  {errors.phone && (
    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
  )}
</div>

        
        <div>
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            required
            value={formData.dob}
            onChange={handleChange}
            className="mt-1 text-black block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
          />
           {errors.dob && (
            <p className="mt-1 text-sm text-red-600">{errors.dob}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 text-black block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address (City, State, Country)
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 text-black block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
            placeholder="Enter Full Address"
          />
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">Important information</h3>
            <div className="mt-2 text-sm text-blue-700">
              <p>Fields marked with <span className="text-red-500">*</span> are required. Please ensure your contact information is accurate as we'll use it to reach out to you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;