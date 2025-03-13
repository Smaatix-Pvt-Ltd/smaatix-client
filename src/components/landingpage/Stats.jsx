import React from 'react';

export const Stats = ({ colorTheme, setColorTheme }) => {
  // Theme configuration
  const themes = {
    purple: {
      topBar: "bg-purple-900",
      navGradient: "bg-gradient-to-r from-black via-purple-900 to-purple-500",
      heroGradient: "bg-gradient-to-r from-black via-purple-900 to-purple-500",
      hoverText: "hover:text-purple-200",
      button: "bg-purple-600 hover:bg-purple-700",
      contactButton: "text-purple-900 hover:bg-purple-50",
      dropdownHover: "hover:bg-purple-50",
      decorCircle1: "bg-purple-700",
      decorCircle2: "bg-purple-300",
      textColor: "text-purple-800",
      borderColor: "border-purple-200",
      blobColor: "from-purple-500/30 to-purple-300/20",
      iconColor: "text-purple-500",
      lightBg: "bg-purple-50",
      gradientStart: "#7e22ce",
      gradientEnd: "#a855f7"
    },
    teal: {
      topBar: "bg-teal-900",
      navGradient: "bg-gradient-to-r from-black via-teal-900 to-teal-500",
      heroGradient: "bg-gradient-to-r from-black via-teal-900 to-teal-500",
      hoverText: "hover:text-teal-200",
      button: "bg-teal-600 hover:bg-teal-700",
      contactButton: "text-teal-900 hover:bg-teal-50",
      dropdownHover: "hover:bg-teal-50",
      decorCircle1: "bg-teal-700",
      decorCircle2: "bg-teal-300",
      textColor: "text-teal-800",
      borderColor: "border-teal-200",
      blobColor: "from-teal-500/30 to-teal-300/20",
      iconColor: "text-teal-500",
      lightBg: "bg-teal-50",
      gradientStart: "#0d9488",
      gradientEnd: "#14b8a6"
    },
    emerald: {
      topBar: "bg-emerald-900",
      navGradient: "bg-gradient-to-r from-black via-emerald-900 to-emerald-500",
      heroGradient: "bg-gradient-to-r from-black via-emerald-900 to-emerald-500",
      hoverText: "hover:text-emerald-200",
      button: "bg-emerald-600 hover:bg-emerald-700",
      contactButton: "text-emerald-900 hover:bg-emerald-50",
      dropdownHover: "hover:bg-emerald-50",
      decorCircle1: "bg-emerald-700",
      decorCircle2: "bg-emerald-300",
      textColor: "text-emerald-800",
      borderColor: "border-emerald-200",
      blobColor: "from-emerald-500/30 to-emerald-300/20",
      iconColor: "text-emerald-500",
      lightBg: "bg-emerald-50",
      gradientStart: "#059669",
      gradientEnd: "#10b981"
    },
    blue: {
      topBar: "bg-blue-900",
      navGradient: "bg-gradient-to-r from-black via-blue-900 to-blue-500",
      heroGradient: "bg-gradient-to-r from-black via-blue-900 to-blue-500",
      hoverText: "hover:text-blue-200",
      button: "bg-blue-600 hover:bg-blue-700",
      contactButton: "text-blue-900 hover:bg-blue-50",
      dropdownHover: "hover:bg-blue-50",
      decorCircle1: "bg-blue-700",
      decorCircle2: "bg-blue-300",
      textColor: "text-blue-800",
      borderColor: "border-blue-200",
      blobColor: "from-blue-500/30 to-blue-300/20",
      iconColor: "text-blue-500",
      lightBg: "bg-blue-50",
      gradientStart: "#1d4ed8",
      gradientEnd: "#3b82f6"
    },
    rose: {
      topBar: "bg-rose-900",
      navGradient: "bg-gradient-to-r from-black via-rose-900 to-rose-500",
      heroGradient: "bg-gradient-to-r from-black via-rose-900 to-rose-500",
      hoverText: "hover:text-rose-200",
      button: "bg-rose-600 hover:bg-rose-700",
      contactButton: "text-rose-900 hover:bg-rose-50",
      dropdownHover: "hover:bg-rose-50",
      decorCircle1: "bg-rose-700",
      decorCircle2: "bg-rose-300",
      textColor: "text-rose-800",
      borderColor: "border-rose-200",
      blobColor: "from-rose-500/30 to-rose-300/20",
      iconColor: "text-rose-500",
      lightBg: "bg-rose-50",
      gradientStart: "#be123c",
      gradientEnd: "#fb7185"
    }
  };
  
  const currentTheme = themes[colorTheme];
  
  // Services data
  const services = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: "Software Solutions",
      description: "Find your niche requirement with our technology experts."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <line x1="12" y1="20" x2="12" y2="10"></line>
          <line x1="18" y1="20" x2="18" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="16"></line>
          <polyline points="2 20 22 20"></polyline>
        </svg>
      ),
      title: "Training",
      description: "Upgrade / Upskill the latest technology with our experienced team."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      ),
      title: "Staffing Solution",
      description: "Fill your needs of experts with our talent hunting acquisition team."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
      title: "Finance Service",
      description: "Get one stop pack for your financial needs Personal / Corporate."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      ),
      title: "Corporate Gifting",
      description: "Give your employees, partners and clients the gift of choice."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      title: "Digital Marketing",
      description: "Take an Expert Opinion about Your Digital Strategy. Let Our Creative Strategists Help You!"
    }
  ];

  return (
    <section className="relative w-full bg-white py-16 overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${currentTheme.textColor}`}>Our Services</h2>
        <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: currentTheme.gradientStart }}></div>
        <p className="max-w-2xl mx-auto text-gray-600">Comprehensive business solutions tailored to meet your specific needs</p>
      </div>

      {/* Background SVG shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          
          
          <path 
            d="M0,100 Q250,250 500,150 T1000,100 L1000,0 L0,0 Z" 
            fill={`url(#${colorTheme}Gradient)`} 
            opacity="0.1" 
          />
          <path 
            d="M300,300 C400,200 600,400 700,300 S800,400 900,300 L900,100 L300,100 Z" 
            fill={`url(#${colorTheme}Gradient)`} 
            opacity="0.15" 
          />
          <defs>
            <linearGradient id={`${colorTheme}Gradient`} x1="0" y1="0" x2="100%" y2="100%">
              <stop offset="0%" stopColor={currentTheme.gradientStart} />
              <stop offset="100%" stopColor={currentTheme.gradientEnd} />
            </linearGradient>
          </defs>
          
          {/* Blob shapes */}
          <path 
            d="M700,400 C750,350 800,450 750,500 S650,550 600,500 S650,420 700,400 Z" 
            fill={currentTheme.gradientEnd}
            opacity="0.2" 
          />
          <path 
            d="M200,600 C250,550 350,600 300,650 S150,700 100,650 S150,650 200,600 Z" 
            fill={currentTheme.gradientStart}
            opacity="0.2" 
          />
        </svg>
      </div>
      
      {/* Services cards grid */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Icon with themed background */}
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${currentTheme.lightBg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={currentTheme.iconColor}>{service.icon}</div>
                </div>
                
                {/* Content */}
                <h3 className={`text-xl font-semibold mb-3 group-hover:${currentTheme.textColor.replace('text-', '')} transition-colors duration-300`}>
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>
                
                {/* Button with theme color */}
                <a
                  href="#"
                  className={`inline-flex items-center text-sm font-medium ${currentTheme.textColor} hover:underline mt-auto`}
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;