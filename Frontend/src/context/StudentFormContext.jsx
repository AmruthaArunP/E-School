import React, { createContext, useState } from 'react';

const StudentFormContext = createContext();

const StudentFormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    basicInformation: {},
    previousSchoolDetails: [],
    fees: []
  });

  const updateFormData = (section, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: data
    }));
  };

  return (
    <StudentFormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </StudentFormContext.Provider>
  );
};

export { StudentFormContext, StudentFormProvider };
