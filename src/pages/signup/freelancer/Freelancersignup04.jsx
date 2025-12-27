import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const MasterHireSkillSelection = () => {
  const [skills, setSkills] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const MAX_SKILLS = 10;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      const newSkill = inputValue.trim();

      if (skills.length < MAX_SKILLS && !skills.includes(newSkill)) {
        setSkills([...skills, newSkill]);
        setInputValue('');
      }
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/bio'); 
  };

  const handleBack = () => {
    navigate('/domain'); 
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4">
      {/* Header/Logo Section */}
      <header className="absolute top-4 left-4">
        <h1 className="text-xl font-bold text-gray-800">MasterHire</h1>
      </header>

      <main className="w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Add your skills -
        </h2>
        <p className="text-gray-600 mb-8">
          Add the specific skills you actively use in your work so clients can understand what you truly offer.
        </p>

        <form className="space-y-6">
          {/* Upper Input Box */}
          <div>
            <input
              type="text"
              placeholder="Enter skills here"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
              disabled={skills.length >= MAX_SKILLS}
            />
            <p className="text-right text-sm text-gray-500 mt-1">
              Max {MAX_SKILLS} skills
            </p>
          </div>

          {/* Lower Display Box for Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your skills</label>
            <div className="min-h-[150px] p-4 border border-gray-300 rounded-lg bg-white flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  // SHAPE CHANGE: changed from rounded-full to rounded-lg
                  className="flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-lg font-medium"
                >
                  <span className="mr-2">{skill}</span>
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    // Button shape adjusted slightly for aesthetics
                    className="p-1 rounded hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    aria-label={`Remove ${skill}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <button
              type="button"
              onClick={handleBack}
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-12 border border-gray-300 rounded-lg shadow-sm transition duration-150 ease-in-out"
            >
              Back
            </button>
            <button
              type="submit"
              onClick={handleNext}
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-12 rounded-lg shadow-md transition duration-150 ease-in-out"
            >
              Next
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default MasterHireSkillSelection;

