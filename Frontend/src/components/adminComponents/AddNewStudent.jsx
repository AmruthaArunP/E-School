import React, { useState } from "react";
import BasicInformation from "./BasicInformation";
import PreviousSchoolDetails from "./PreviousSchoolDetails";
import Fees from './Fees ';
import  { StudentFormProvider } from '../../context/StudentFormContext'

function AddNewStudent() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleNext = () => {
    setCurrentTab(currentTab + 1);
  };

  const handleSkip = () => {
    setCurrentTab(2); // Navigate directly to Fees
  };


  const handlePrevious = () => {
    setCurrentTab(currentTab - 1);
  };



  const renderTabContent = () => {
    switch (currentTab) {
      case 0:
        return <BasicInformation onNext={handleNext} />;
      case 1:
        return <PreviousSchoolDetails onNext={handleNext} onPrevious={handlePrevious} onSkip={handleSkip} />;
      case 2:
        return <Fees onPrevious={handlePrevious} />;
      default:
        return null;
    }
  };

  return (
    <StudentFormProvider>
      <div className="max-w mx-auto p-20 border">
        <div className="bg-white border-2 rounded">
          <div className="bg-gradient-to-b from-white via-rose-50 to-rose-50 p-2 border-b-2">
            <h2 className="text-3xl font-bold mb-4 text-cyan-500 px-8">Add Student</h2>
          </div>
          <div className="flex bg-rose-50 justify-around border-b">
            <button
              className={`p-4 ${currentTab === 0 ? 'font-bold text-cyan-500 bg-white border ' : 'text-cyan-500'}`}
              onClick={() => setCurrentTab(0)}
            >
              Basic Information
            </button>
            <button
              className={`p-4 ${currentTab === 1 ? 'font-bold text-cyan-500 bg-white border' : 'text-cyan-500'}`}
              onClick={() => setCurrentTab(1)}
            >
              Previous School Details
            </button>
            <button
              className={`p-4 ${currentTab === 2 ? 'font-bold text-cyan-500 bg-white border' : 'text-cyan-500'}`}
              onClick={() => setCurrentTab(2)}
            >
              Fees
            </button>
          </div>
          <div className="p-4">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </StudentFormProvider>
  );
}

export default AddNewStudent;
