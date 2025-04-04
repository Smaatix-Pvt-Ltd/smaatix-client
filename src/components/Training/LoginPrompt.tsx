import React from "react";

const LoginPrompt: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-10">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white text-center">
        <p className="text-lg font-semibold">Please log in to continue</p>
        <a
          href="/login"
          className="inline-flex items-center justify-center mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-md font-medium transition-colors"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default LoginPrompt;
