import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Calendar, ChevronDown } from 'lucide-react'; // Lucide icons का उपयोग किया गया है

const MasterHireBasicDetailsForm = () => {
    const navigate = useNavigate();

  const handleNext = () => {
    navigate('/domain'); 
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-4">
      <div className="w-full max-w-2xl bg-white p-8">
        {/* Header/Logo Section */}
        <header className="absolute top-4 left-4">
        <h1 className="text-xl font-bold text-gray-800">MasterHire</h1>
      </header>

        <main>
          <h2 className="text-lg font-semibold mb-8 text-gray-800">
            Enter your basic details
          </h2>

          <form className="space-y-6">
            {/* Top Section: Photo Upload and Date of Birth/Gender */}
            <div className="flex gap-8 items-start">
              {/* Photo Upload */}
              <div className="flex-shrink-0 w-40 h-48 border border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition duration-150">
                <Upload className="w-8 h-8 text-gray-500 mb-2" />
                <span className="text-sm text-gray-600">Upload Photo</span>
              </div>

              {/* Date of Birth and Gender Fields */}
              <div className="flex-grow space-y-6">
                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">Date of birth</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="dob"
                      placeholder="dd | mm | yyyy"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                    />
                    <Calendar className="absolute inset-y-0 right-0 pr-3 flex items-center h-full w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                  <div className="relative">
                    <select
                      id="gender"
                      className="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:ring-teal-500 focus:border-teal-500 appearance-none"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute inset-y-0 right-0 pr-3 flex items-center h-full w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Street Address Field */}
            <div>
              <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
              <input type="text" id="streetAddress" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
            </div>

            {/* City, State, ZIP Fields */}
            <div className="flex gap-4">
              <div className="w-1/3">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input type="text" id="city" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
              </div>
              <div className="w-1/3">
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State/Province</label>
                <input type="text" id="state" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
              </div>
              <div className="w-1/3">
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">ZIP/Postal code</label>
                <input type="text" id="zip" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
              </div>
            </div>

            {/* Mobile No. Field */}
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile No.</label>
              <div className="flex items-center">
                {/* Flag/Country Code Placeholder - Need actual implementation */}
                <div className="flex items-center border border-gray-300 bg-white p-2 rounded-l-lg h-[42px]">
                  {/* Indian Flag SVG Placeholder */}
                  <div className="w-6 h-4 bg-green-500 relative mr-2">
                      <div className="absolute top-0 left-0 w-full h-1/3 bg-orange-500"></div>
                      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-green-500"></div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
                <input
                  type="tel"
                  id="mobile"
                  className="w-full px-4 py-2 border-t border-r border-b border-gray-300 rounded-r-lg focus:ring-teal-500 focus:border-teal-500 focus:border-l-0"
                />
              </div>
            </div>

            {/* Next Button (Aligned right using flex container) */}
            <div className="flex justify-end pt-4">
              <button type="submit" 
              onClick={handleNext}
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-12 rounded-lg shadow-md transition duration-150 ease-in-out">
                Next
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default MasterHireBasicDetailsForm;

