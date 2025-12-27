import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MasterHireHourlyRatePage = () => {
  const navigate = useNavigate();
  // State for the hourly rate input, defaulted to '20' as seen in the image
  const [hourlyRate, setHourlyRate] = useState('20');

  // Function to handle moving to the previous page (e.g., Work Experience)
  const handleBack = () => {
    // Navigate back to the previous step in the flow, e.g., '/experience' or simply go back in browser history
    navigate('/experience'); 
    // Alternative: navigate(-1); 
  };

  // Function to handle completing the profile/moving next (e.g., to review/skills)
  const handleCompleteProfile = () => {
    // Navigate to the next step, e.g., '/profile-complete' or '/skills'
    navigate('/');
    // You can also save the hourlyRate state here before navigating
    console.log("Saving hourly rate:", hourlyRate);
  };


  return (
    <div className="min-h-screen bg-white flex flex-col justify-between p-4">
      {/* Header/Logo Section (Top Left) */}
      <header className="absolute top-4 left-4">
        <h1 className="text-xl font-bold text-gray-800">MasterHire</h1>
      </header>

      {/* Main Content Area (Centered) */}
      <main className="w-full max-w-lg mx-auto mt-20 md:mt-0 md:flex md:flex-col md:justify-center md:h-[calc(100vh-100px)]">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Set your Hourly Rate
        </h2>
        <p className="text-gray-600 mb-10">
          Set your hourly rate based on your skills and experience. You can adjust it later as your profile grows.
        </p>

        {/* Input Field Section */}
        <div className="flex flex-col mb-20">
          <label htmlFor="hourly-rate" className="text-lg font-semibold text-gray-800 mb-2">
            Hourly Rate
          </label>
          <p className="text-gray-600 mb-4">
            The amount you'll receive.
          </p>
          <div className="flex items-center">
            <input
              type="number"
              id="hourly-rate"
              name="hourlyRate"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              className="w-40 px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-lg"
              placeholder="0"
              min="0"
            />
            <span className="ml-3 text-gray-600">/hr</span>
          </div>
        </div>
      </main>

      {/* Navigation Buttons (Bottom) */}
      <footer className="w-full max-w-lg mx-auto flex justify-between items-center pt-6 pb-4">
        <button
          type="button"
          onClick={handleBack}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-12 border border-gray-300 rounded-lg shadow-sm transition duration-150 ease-in-out"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleCompleteProfile}
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-12 rounded-lg shadow-md transition duration-150 ease-in-out"
        >
          Complete your Profile
        </button>
      </footer>
    </div>
  );
};

export default MasterHireHourlyRatePage;
