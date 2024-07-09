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
    validationSchema: Yup.object({
      previousSchoolDetails: previousSchoolDetailsSchema,
    }),
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
    formik.setFieldValue(`previousSchoolDetails.${index}.${id}`, value);
  };

  const handleAddSchool = () => {
    const newSchool = { schoolName: '', address: '', class: '', year: '' };
    setSchoolDetails([...schoolDetails, newSchool]);
    formik.setFieldValue('previousSchoolDetails', [...schoolDetails, newSchool]);
  };

  const handleRemoveSchool = (index) => {
    const updatedSchoolDetails = [...schoolDetails];
    updatedSchoolDetails.splice(index, 1);
    setSchoolDetails(updatedSchoolDetails);
    formik.setFieldValue('previousSchoolDetails', updatedSchoolDetails);
  };

  const handleNext = async () => {
    const isValid = await formik.validateForm();
    formik.submitForm();
    if (Object.keys(isValid).length === 0) {
      onNext();
    }
  };

  const handleSkip = () => {
    onSkip(); // Navigate to Fees component
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 pt-6 pb-8 mb-4">
        <div className="md:col-span-2">
          {schoolDetails.map((school, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="form-group">
                <label className="all_label">School Name</label>
                <input
                  className={`form-control ${
                    formik.touched.previousSchoolDetails?.[index]?.schoolName &&
                    formik.errors.previousSchoolDetails?.[index]?.schoolName
                      ? 'is-invalid'
                      : ''
                  }`}
                  id={`schoolName`}
                  type="text"
                  placeholder="School Name"
                  value={school.schoolName}
                  onChange={(e) => handleChange(e, index)}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.previousSchoolDetails?.[index]?.schoolName &&
                formik.errors.previousSchoolDetails?.[index]?.schoolName ? (
                  <p className="text-red-500 text-xs italic">
                    {formik.errors.previousSchoolDetails[index].schoolName}
                  </p>
                ) : null}
              </div>
              <div className="form-group">
                <label className="all_label">Address</label>
                <input
                  className={`form-control ${
                    formik.touched.previousSchoolDetails?.[index]?.address &&
                    formik.errors.previousSchoolDetails?.[index]?.address
                      ? 'is-invalid'
                      : ''
                  }`}
                  id={`address`}
                  type="text"
                  placeholder="Address"
                  value={school.address}
                  onChange={(e) => handleChange(e, index)}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.previousSchoolDetails?.[index]?.address &&
                formik.errors.previousSchoolDetails?.[index]?.address ? (
                  <p className="text-red-500 text-xs italic">
                    {formik.errors.previousSchoolDetails[index].address}
                  </p>
                ) : null}
              </div>
              <div className="form-group">
                <label className="all_label">Class</label>
                <input
                  className={`form-control ${
                    formik.touched.previousSchoolDetails?.[index]?.class &&
                    formik.errors.previousSchoolDetails?.[index]?.class
                      ? 'is-invalid'
                      : ''
                  }`}
                  id={`class`}
                  type="text"
                  placeholder="Class"
                  value={school.class}
                  onChange={(e) => handleChange(e, index)}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.previousSchoolDetails?.[index]?.class &&
                formik.errors.previousSchoolDetails?.[index]?.class ? (
                  <p className="text-red-500 text-xs italic">
                    {formik.errors.previousSchoolDetails[index].class}
                  </p>
                ) : null}
              </div>
              <div className="form-group">
                <label className="all_label">Year</label>
                <input
                  className={`form-control ${
                    formik.touched.previousSchoolDetails?.[index]?.year &&
                    formik.errors.previousSchoolDetails?.[index]?.year
                      ? 'is-invalid'
                      : ''
                  }`}
                  id={`year`}
                  type="text"
                  placeholder="Year"
                  value={school.year}
                  onChange={(e) => handleChange(e, index)}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.previousSchoolDetails?.[index]?.year &&
                formik.errors.previousSchoolDetails?.[index]?.year ? (
                  <p className="text-red-500 text-xs italic">
                    {formik.errors.previousSchoolDetails[index].year}
                  </p>
                ) : null}
              </div>
              <div className="col-span-2 flex justify-end">
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleRemoveSchool(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddSchool}
          >
            Add Another School
          </button>
        </div>
        <div className="md:col-span-1 flex flex-col items-end">
          <button
            type="button"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={onPrevious}
          >
            Previous
          </button>
          <button
            type="button"
            className="bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={handleNext}
          >
            Next
          </button>
          <button
            type="button"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSkip}
          >
            Skip
          </button>
        </div>
      </div>
    </form>
  );
}

export default PreviousSchoolDetails;
