import React, { useState, useContext, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { StudentFormContext } from '../../context/StudentFormContext';
import previousSchoolDetailsSchema from '../../validations/previousSchoolSchema';

function PreviousSchoolDetails({ onNext, onPrevious, onSkip }) {
  const { formData, updateFormData } = useContext(StudentFormContext);
  const [schoolDetails, setSchoolDetails] = useState(
    formData.previousSchoolDetails.length > 0
      ? formData.previousSchoolDetails
      : [{ schoolName: '', address: '', class: '', year: '' }]
  );

  useEffect(() => {
    if (formData.previousSchoolDetails.length === 0) {
      setSchoolDetails([{ schoolName: '', address: '', class: '', year: '' }]);
    } else {
      setSchoolDetails(formData.previousSchoolDetails);
    }
  }, [formData.previousSchoolDetails]);

  const formik = useFormik({
    initialValues: {
      previousSchoolDetails: schoolDetails,
    },
    validationSchema: previousSchoolDetailsSchema,
    onSubmit: (values) => {
      updateFormData('previousSchoolDetails', values.previousSchoolDetails);
      onNext();
    },
  });

  const handleChange = (e, index) => {
    const { id, value } = e.target;
    const updatedSchoolDetails = [...schoolDetails];
    updatedSchoolDetails[index] = { ...updatedSchoolDetails[index], [id]: value };
    setSchoolDetails(updatedSchoolDetails);
  };

  const handleAddSchool = () => {
    setSchoolDetails([...schoolDetails, { schoolName: '', address: '', class: '', year: '' }]);
  };

  const handleRemoveSchool = (index) => {
    const updatedSchoolDetails = [...schoolDetails];
    updatedSchoolDetails.splice(index, 1);
    setSchoolDetails(updatedSchoolDetails);
  };

  const handleNext = () => {
    formik.handleSubmit();
  };

  const handleSkip = () => {
    onSkip(); // Navigate to Fees component
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 pt-6 pb-8 mb-4">
      <div className="md:col-span-2">
        {schoolDetails.map((school, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="form-group">
              <label className="all_label">School Name</label>
              <input
                className={`form-control ${
                  formik.touched[`previousSchoolDetails.${index}.schoolName`] &&
                  formik.errors[`previousSchoolDetails.${index}.schoolName`]
                    ? 'is-invalid'
                    : ''
                }`}
                id={`previousSchoolDetails.${index}.schoolName`}
                type="text"
                placeholder="School Name"
                value={school.schoolName}
                onChange={(e) => handleChange(e, index)}
                onBlur={formik.handleBlur}
              />
              {formik.touched[`previousSchoolDetails.${index}.schoolName`] &&
              formik.errors[`previousSchoolDetails.${index}.schoolName`] ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors[`previousSchoolDetails.${index}.schoolName`]}
                </p>
              ) : null}
            </div>
            <div className="form-group">
              <label className="all_label">Address</label>
              <textarea
                className={`form-control ${
                  formik.touched[`previousSchoolDetails.${index}.address`] &&
                  formik.errors[`previousSchoolDetails.${index}.address`]
                    ? 'is-invalid'
                    : ''
                }`}
                id={`previousSchoolDetails.${index}.address`}
                placeholder="Address"
                rows="3"
                value={school.address}
                onChange={(e) => handleChange(e, index)}
                onBlur={formik.handleBlur}
              ></textarea>
              {formik.touched[`previousSchoolDetails.${index}.address`] &&
              formik.errors[`previousSchoolDetails.${index}.address`] ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors[`previousSchoolDetails.${index}.address`]}
                </p>
              ) : null}
            </div>
            <div className="form-group">
              <label className="all_label">Class</label>
              <input
                className={`form-control ${
                  formik.touched[`previousSchoolDetails.${index}.class`] &&
                  formik.errors[`previousSchoolDetails.${index}.class`]
                    ? 'is-invalid'
                    : ''
                }`}
                id={`previousSchoolDetails.${index}.class`}
                type="text"
                placeholder="Class"
                value={school.class}
                onChange={(e) => handleChange(e, index)}
                onBlur={formik.handleBlur}
              />
              {formik.touched[`previousSchoolDetails.${index}.class`] &&
              formik.errors[`previousSchoolDetails.${index}.class`] ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors[`previousSchoolDetails.${index}.class`]}
                </p>
              ) : null}
            </div>
            <div className="form-group">
              <label className="all_label">Year</label>
              <input
                className={`form-control ${
                  formik.touched[`previousSchoolDetails.${index}.year`] &&
                  formik.errors[`previousSchoolDetails.${index}.year`]
                    ? 'is-invalid'
                    : ''
                }`}
                id={`previousSchoolDetails.${index}.year`}
                type="text"
                placeholder="Year"
                value={school.year}
                onChange={(e) => handleChange(e, index)}
                onBlur={formik.handleBlur}
              />
              {formik.touched[`previousSchoolDetails.${index}.year`] &&
              formik.errors[`previousSchoolDetails.${index}.year`] ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors[`previousSchoolDetails.${index}.year`]}
                </p>
              ) : null}
            </div>
            {index > 0 && (
              <button
                className="text-red-500 text-sm mt-2 focus:outline-none"
                type="button"
                onClick={() => handleRemoveSchool(index)}
              >
                X
              </button>
            )}
          </div>
        ))}
        <button
          className="bg-cyan-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          type="button"
          onClick={handleAddSchool}
        >
          Add Another School
        </button>
      </div>
      <div className="col-span-1 md:col-span-3 flex justify-between mt-4">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={onPrevious}
        >
          Previous
        </button>
        <div>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            type="button"
            onClick={handleSkip}
          >
            Skip
          </button>
          <button
            className="bg-cyan-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreviousSchoolDetails;
