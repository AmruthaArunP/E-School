import React, { useContext, useEffect } from 'react';
import profileImag from '../../assets/user.png';
import { StudentFormContext } from "../../context/StudentFormContext";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import basicInformationSchema from "../../validations/basicInformationSchema";

function BasicInformation({ onNext }) {
  const { formData, updateFormData } = useContext(StudentFormContext);
  

  const formik = useFormik({
    initialValues: formData.basicInformation,
    validationSchema: basicInformationSchema,
    onSubmit: (values) => {
      updateFormData('basicInformation', values);
      onNext();
    },
  });

  useEffect(() => {
    formik.setValues(formData.basicInformation);
  }, [formData.basicInformation]);


  return (
    <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 pt-6 pb-8 mb-4">
      <div className="md:col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Admission No.
            </label>
            <input
              className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.admissionNo && formik.errors.admissionNo ? 'border-red-500' : ''}`}
              id="admissionNo"
              name="admissionNo"
              type="text"
              placeholder="Admission No."
              value={formik.values.admissionNo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.admissionNo && formik.errors.admissionNo && <p className="text-red-500 text-xs italic">{formik.errors.admissionNo}</p>}
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : ''}`}
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName && <p className="text-red-500 text-xs italic">{formik.errors.firstName}</p>}
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : ''}`}
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName && <p className="text-red-500 text-xs italic">{formik.errors.lastName}</p>}
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Father Name
            </label>
            <input
              className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.fatherName && formik.errors.fatherName ? 'border-red-500' : ''}`}
              id="fatherName"
              name="fatherName"
              type="text"
              placeholder="Father Name"
              value={formik.values.fatherName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.fatherName && formik.errors.fatherName && <p className="text-red-500 text-xs italic">{formik.errors.fatherName}</p>}
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Mother Name
            </label>
            <input
              className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.motherName && formik.errors.motherName ? 'border-red-500' : ''}`}
              id="motherName"
              name="motherName"
              type="text"
              placeholder="Mother Name"
              value={formik.values.motherName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.motherName && formik.errors.motherName && <p className="text-red-500 text-xs italic">{formik.errors.motherName}</p>}
          </div>
          <div className="pb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <textarea
              className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.address && formik.errors.address ? 'border-red-500' : ''}`}
              id="address"
              name="address"
              placeholder="Address"
              rows="3"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.touched.address && formik.errors.address && <p className="text-red-500 text-xs italic">{formik.errors.address}</p>}
          </div>
          <div>
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Gender
  </label>
  <div className="flex items-center">
    <input
      className={`mr-2 leading-tight ${formik.touched.gender && formik.errors.gender ? 'border-red-500' : ''}`}
      type="radio"
      id="male"
      name="gender"
      value="Male"
      checked={formik.values.gender === 'Male'}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    <label
      className="block text-gray-700 text-sm font-bold"
      htmlFor="male"
    >
      Male
    </label>
    <input
      className={`ml-4 mr-2 leading-tight ${formik.touched.gender && formik.errors.gender ? 'border-red-500' : ''}`}
      type="radio"
      id="female"
      name="gender"
      value="Female"
      checked={formik.values.gender === 'Female'}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    <label
      className="block text-gray-700 text-sm font-bold"
      htmlFor="female"
    >
      Female
    </label>
  </div>
  {formik.touched.gender && formik.errors.gender && (
    <p className="text-red-500 text-xs italic">{formik.errors.gender}</p>
  )}
</div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date of Birth
            </label>
            <input
              className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.dateOfBirth && formik.errors.dateOfBirth ? 'border-red-500' : ''}`}
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              value={formik.values.dateOfBirth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.dateOfBirth && formik.errors.dateOfBirth && <p className="text-red-500 text-xs italic">{formik.errors.dateOfBirth}</p>}
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Mobile No.
            </label>
            <input
              className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.mobileNo && formik.errors.mobileNo ? 'border-red-500' : ''}`}
              id="mobileNo"
              name="mobileNo"
              type="text"
              placeholder="Mobile No."
              value={formik.values.mobileNo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.mobileNo && formik.errors.mobileNo && <p className="text-red-500 text-xs italic">{formik.errors.mobileNo}</p>}
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Class
            </label>
            <select
              className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.class && formik.errors.class ? 'border-red-500' : ''}`}
              id="class"
              name="class"
              value={formik.values.class}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select Class</option>
              {/* Add options here */}
            </select>
            {formik.touched.class && formik.errors.class && <p className="text-red-500 text-xs italic">{formik.errors.class}</p>}
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Section
            </label>
            <select
              className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.section && formik.errors.section ? 'border-red-500' : ''}`}
              id="section"
              name="section"
              value={formik.values.section}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select Section</option>
              {/* Add options here */}
            </select>
            {formik.touched.section && formik.errors.section && <p className="text-red-500 text-xs italic">{formik.errors.section}</p>}
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date of Admission
            </label>
            <input
              className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.dateOfAdmission && formik.errors.dateOfAdmission ? 'border-red-500' : ''}`}
              id="dateOfAdmission"
              name="dateOfAdmission"
              type="date"
              value={formik.values.dateOfAdmission}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.dateOfAdmission && formik.errors.dateOfAdmission && <p className="text-red-500 text-xs italic">{formik.errors.dateOfAdmission}</p>}
          </div>
          <div>
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Roll No.
  </label>
  <input
    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.rollNo && formik.errors.rollNo ? 'border-red-500' : ''}`}
    name="rollNo"
    type="text"
    placeholder="Roll No."
    value={formik.values.rollNo}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  />
  {formik.touched.rollNo && formik.errors.rollNo && (
    <p className="text-red-500 text-xs italic">{formik.errors.rollNo}</p>
  )}
</div>
<div>
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Select Parent
  </label>
  <select
    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.parent && formik.errors.parent ? 'border-red-500' : ''}`}
    name="parent"
    value={formik.values.parent}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  >
    <option value="">Select Parent</option>
    {/* Add options here */}
  </select>
  {formik.touched.parent && formik.errors.parent && (
    <p className="text-red-500 text-xs italic">{formik.errors.parent}</p>
  )}
</div>
<div>
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Religion
  </label>
  <input
    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.religion && formik.errors.religion ? 'border-red-500' : ''}`}
    name="religion"
    type="text"
    placeholder="Religion"
    value={formik.values.religion}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  />
  {formik.touched.religion && formik.errors.religion && (
    <p className="text-red-500 text-xs italic">{formik.errors.religion}</p>
  )}
</div>
<div>
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Caste
  </label>
  <input
    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.caste && formik.errors.caste ? 'border-red-500' : ''}`}
    name="caste"
    type="text"
    placeholder="Caste"
    value={formik.values.caste}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  />
  {formik.touched.caste && formik.errors.caste && (
    <p className="text-red-500 text-xs italic">{formik.errors.caste}</p>
  )}
</div>

<div>
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Sub-Caste
  </label>
  <input
    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.subCaste && formik.errors.subCaste ? 'border-red-500' : ''}`}
    name="subCaste"
    type="text"
    placeholder="Sub-Caste"
    value={formik.values.subCaste}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  />
  {formik.touched.subCaste && formik.errors.subCaste && (
    <p className="text-red-500 text-xs italic">{formik.errors.subCaste}</p>
  )}
</div>
<div>
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Nationality
  </label>
  <input
    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.nationality && formik.errors.nationality ? 'border-red-500' : ''}`}
    name="nationality"
    type="text"
    placeholder="Nationality"
    value={formik.values.nationality}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  />
  {formik.touched.nationality && formik.errors.nationality && (
    <p className="text-red-500 text-xs italic">{formik.errors.nationality}</p>
  )}
</div>

<div>
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Aadhar No.
  </label>
  <input
    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.aadharNo && formik.errors.aadharNo ? 'border-red-500' : ''}`}
    name="aadharNo"
    type="text"
    placeholder="Aadhar No."
    value={formik.values.aadharNo}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    required
  />
  {formik.touched.aadharNo && formik.errors.aadharNo && (
    <p className="text-red-500 text-xs italic">{formik.errors.aadharNo}</p>
  )}
</div>
<div>
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Aadhar Document
  </label>
  <input
    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.aadharDocument && formik.errors.aadharDocument ? 'border-red-500' : ''}`}
    id="aadharDocument"
    name="aadharDocument"
    type="file"
    onChange={(event) => formik.setFieldValue('aadharDocument', event.currentTarget.files[0])}
    onBlur={formik.handleBlur}
    required
  />
  {formik.touched.aadharDocument && formik.errors.aadharDocument && (
    <p className="text-red-500 text-xs italic">{formik.errors.aadharDocument}</p>
  )}
</div>

<div>
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Disability 
  </label>
  <div className="flex items-center">
    <input
      className="mr-2 leading-tight"
      type="radio"
      id="disabledYes"
      name="isDisabled"
      value="Yes"
      checked={formik.values.isDisabled === 'Yes'}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      required
    />
    <label
      className="block text-gray-700 text-sm font-bold"
      htmlFor="disabledYes"
    >
      Yes
    </label>
    <input
      className="ml-4 mr-2 leading-tight"
      type="radio"
      id="disabledNo"
      name="isDisabled"
      value="No"
      checked={formik.values.isDisabled === 'No'}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      required
    />
    <label
      className="block text-gray-700 text-sm font-bold"
      htmlFor="disabledNo"
    >
      No
    </label>
  </div>
</div>

<div>
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Blood Group
  </label>
  <input
    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.bloodGroup && formik.errors.bloodGroup ? 'border-red-500' : ''}`}
    name="bloodGroup"
    type="text"
    placeholder="Blood Group"
    value={formik.values.bloodGroup}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  />
  {formik.touched.bloodGroup && formik.errors.bloodGroup && (
    <p className="text-red-500 text-xs italic">{formik.errors.bloodGroup}</p>
  )}
</div>

<div>
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Identification Mark
  </label>
  <input
    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${formik.touched.identificationMark && formik.errors.identificationMark ? 'border-red-500' : ''}`}
    name="identificationMark"
    type="text"
    placeholder="Identification Mark (Moles)"
    value={formik.values.identificationMark}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  />
  {formik.touched.identificationMark && formik.errors.identificationMark && (
    <p className="text-red-500 text-xs italic">{formik.errors.identificationMark}</p>
  )}
</div>


          
        </div>
      </div>
      <div>
      <div>
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Profile Image
  </label>
  <div className="flex items-center">
    <img
      src={profileImag}
      alt="Profile"
      className="w-60 h-60 object-cover"
    />
  </div>
  <div className="mt-4 flex items-center">
    <input
      type="file"
      id="profileImage"
      name="profileImage"
      className="hidden"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
    <label
      htmlFor="profileImage"
      className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
    >
      Upload
    </label>
  </div>
</div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default BasicInformation;


// before validation full dat

import React, { useState, useContext, useEffect } from 'react';
import profileImag from '../../assets/user.png';
import { StudentFormContext } from "../../context/StudentFormContext";

function BasicInformation({ onNext }) {
  const { formData, updateFormData } = useContext(StudentFormContext);
  const [data, setData] = useState(formData.basicInformation);

  useEffect(() => {
    setData(formData.basicInformation);
  }, [formData.basicInformation]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const handleNext = () => {
    updateFormData('basicInformation', data);
    onNext();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 pt-6 pb-8 mb-4 ">
      <div className="md:col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Admission No.
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
              id="admissionNo"
              type="text"
              placeholder="Admission No."
              value={data.admissionNo || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
              id="firstName"
              type="text"
              placeholder="First Name"
              value={data.firstName || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
              id="lastName"
              type="text"
              placeholder="Last Name"
              value={data.lastName || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Father Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
              id="fatherName"
              type="text"
              placeholder="Father Name"
              value={data.fatherName || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Mother Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
              id="motherName"
              type="text"
              placeholder="Mother Name"
              value={data.motherName || ''}
              onChange={handleChange}
            />
          </div>
          <div className="pb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
              id="address"
              placeholder="Address"
              rows="3"
              value={data.address || ''}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date of Birth
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
              id="dateOfBirth"
              type="date"
              value={data.dateOfBirth || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Mobile No.
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
              id="mobileNo"
              type="text"
              placeholder="Mobile No."
              value={data.mobileNo || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Class
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
              id="class"
              value={data.class || ''}
              onChange={handleChange}
            >
              <option>Select Class</option>
              {/* Add options here */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Section
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
              id="section"
              value={data.section || ''}
              onChange={handleChange}
            >
              <option>Select Section</option>
              {/* Add options here */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date of Admission
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
              id="dateOfAdmission"
              type="date"
              value={data.dateOfAdmission || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Roll No.
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
              id="rollNo"
              type="text"
              placeholder="Roll No."
              value={data.rollNo || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Parent
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
              id="parent"
              value={data.parent || ''}
              onChange={handleChange}
            >
              <option>Select Parent</option>
              {/* Add options here */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Gender
            </label>
            <div className="flex items-center">
              <input
                className="mr-2 leading-tight"
                type="radio"
                id="male"
                name="gender"
                value="Male"
                checked={data.gender === 'Male'}
                onChange={handleChange}
              />
              <label
                className="block text-gray-700 text-sm font-bold"
                htmlFor="male"
              >
                Male
              </label>
              <input
                className="ml-4 mr-2 leading-tight"
                type="radio"
                id="female"
                name="gender"
                value="Female"
                checked={data.gender === 'Female'}
                onChange={handleChange}
              />
              <label
                className="block text-gray-700 text-sm font-bold"
                htmlFor="female"
              >
                Female
              </label>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Religion
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
              id="religion"
              type="text"
              placeholder="Religion"
              value={data.religion || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Caste
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
              id="caste"
              type="text"
              placeholder="Caste"
              value={data.caste || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Sub-Caste
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
              id="subCaste"
              type="text"
              placeholder="Sub-Caste"
              value={data.subCaste || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nationality
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
              id="nationality"
              type="text"
              placeholder="Nationality"
              value={data.nationality || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Aadhar No.
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
              id="aadharNo"
              type="text"
              placeholder="Aadhar No."
              value={data.aadharNo || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Aadhar Document
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
              id="aadharDocument"
              type="file"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Is Disabled
            </label>
            <div className="flex items-center">
              <input
                className="mr-2 leading-tight"
                type="radio"
                id="disabledYes"
                name="isDisabled"
                value="Yes"
                checked={data.isDisabled === 'Yes'}
                onChange={handleChange}
                required
              />
              <label
                className="block text-gray-700 text-sm font-bold"
                htmlFor="disabledYes"
              >
                Yes
              </label>
              <input
                className="ml-4 mr-2 leading-tight"
                type="radio"
                id="disabledNo"
                name="isDisabled"
                value="No"
                checked={data.isDisabled === 'No'}
                onChange={handleChange}
                required
              />
              <label
                className="block text-gray-700 text-sm font-bold"
                htmlFor="disabledNo"
              >
                No
              </label>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Blood Group
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
              id="bloodGroup"
              type="text"
              placeholder="Blood Group"
              value={data.bloodGroup || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Identification Mark
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: -outline"
              id="identificationMark"
              type="text"
              placeholder="Identification Mark (Moles)"
              value={data.identificationMark || ''}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:col-span-1">
        <img src={profileImag} alt="Profile" className="w-60 h-60 mb-2" />
        <button
          className="border-2 mt-4 w-1/2 hover:bg-gray-400 text-gray-800 text-xl py-2 px-4 rounded focus:outline-none focus: -outline"
          type="button"
        >
          Browse
        </button>
      </div>
      <div className="col-span-1 md:col-span-3 flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus: -outline"
          type="button"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default BasicInformation;
