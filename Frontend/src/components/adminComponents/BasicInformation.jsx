import React, { useState, useContext, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import profileImag from "../../assets/user.png";
import { StudentFormContext } from "../../context/StudentFormContext";

// Validation schema using Yup
const basicInformationSchema = Yup.object().shape({
  admissionNo: Yup.string().required("Admission No. is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  fatherName: Yup.string().required("Father Name is required"),
  motherName: Yup.string().required("Mother Name is required"),
  address: Yup.string().required("Address is required"),
  dateOfBirth: Yup.date().required("Date of Birth is required"),
  class: Yup.string().required("Class is required"),
  section: Yup.string().required("Section is required"),
  gender: Yup.string().required("Gender is required"),
  parent: Yup.string().required("Parent is required"),
  religion: Yup.string().required("Religion is required"),
  caste: Yup.string().required("Caste is required"),
  subCaste: Yup.string().required("Sub-Caste is required"),
  nationality: Yup.string().required("Nationality is required"),
  aadharNo: Yup.string().required("Aadhar No. is required"),
  isDisabled: Yup.string().required("Is Disabled is required"),
  mobileNo: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid Mobile Number")
    .required("Mobile No. is required"),
  dateOfAdmission: Yup.date().required("Date of Admission is required"),
  bloodGroup: Yup.string().required("Blood Group is required"),
  aadharDocument: Yup.mixed().required("Aadhar Document is required"),
});

function BasicInformation({ onNext }) {
  const { formData, updateFormData } = useContext(StudentFormContext);
  const [data, setData] = useState(formData.basicInformation);

  useEffect(() => {
    setData(formData.basicInformation);
  }, [formData.basicInformation]);

  const formik = useFormik({
    initialValues: {
      admissionNo: data.admissionNo || "",
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      fatherName: data.fatherName || "",
      motherName: data.motherName || "",
      address: data.address || "",
      dateOfBirth: data.dateOfBirth || "",
      class: data.class || "",
      section: data.section || "",
      gender: data.gender || "",
      parent: data.parent || "",
      religion: data.religion || "",
      caste: data.caste || "",
      subCaste: data.subCaste || "",
      nationality: data.nationality || "",
      aadharNo: data.aadharNo || "",
      isDisabled: data.isDisabled || "",
    },
    validationSchema: basicInformationSchema, // Validation schema from Yup
    onSubmit: (values) => {
      updateFormData("basicInformation", values);
      onNext();
    },
  });

  const handleFileChange = (event) => {
    formik.setFieldValue("aadharDocument", event.currentTarget.files[0]);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 pt-6 pb-8 mb-4">
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <label className="all_label">Admission No.</label>
              <input
                type="text"
                name="admission_no"
                className={`form-control ${
                  formik.touched.admissionNo && formik.errors.admissionNo
                    ? "is-invalid"
                    : ""
                }`}
                placeholder="Admission No."
                id="admissionNo"
                {...formik.getFieldProps("admissionNo")}
              />

              {formik.touched.admissionNo && formik.errors.admissionNo ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.admissionNo}
                </p>
              ) : null}
            </div>
            <div className="form-group">
              <label className="all_label">First Name</label>
              <input
                type="text"
                name="firstName"
                className={`form-control ${
                  formik.touched.firstName && formik.errors.firstName
                    ? "is-invalid"
                    : ""
                }`}
                placeholder="First Name"
                id="firstName"
                {...formik.getFieldProps("firstName")}
              />

              {formik.touched.firstName && formik.errors.firstName ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.firstName}
                </p>
              ) : null}
            </div>

            <div className="form-group">
              <label className="all_label">Last Name</label>
              <input
                type="text"
                name="lastName"
                className={`form-control ${
                  formik.touched.lastName && formik.errors.lastName
                    ? "is-invalid"
                    : ""
                }`}
                placeholder="Last Name"
                id="lastName"
                {...formik.getFieldProps("lastName")}
              />

              {formik.touched.lastName && formik.errors.lastName ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.lastName}
                </p>
              ) : null}
            </div>
            <div className="form-group">
              <label className="all_label">Father Name</label>
              <input
                type="text"
                name="fatherName"
                className={`form-control ${
                  formik.touched.fatherName && formik.errors.fatherName
                    ? "is-invalid"
                    : ""
                }`}
                placeholder="Father Name"
                id="fatherName"
                {...formik.getFieldProps("fatherName")}
              />

              {formik.touched.fatherName && formik.errors.fatherName ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.fatherName}
                </p>
              ) : null}
            </div>

            <div className="form-group">
              <label className="all_label">Mother Name</label>
              <input
                type="text"
                name="motherName"
                className={`form-control ${
                  formik.touched.motherName && formik.errors.motherName
                    ? "is-invalid"
                    : ""
                }`}
                placeholder="Mother Name"
                id="motherName"
                {...formik.getFieldProps("motherName")}
              />
              {formik.touched.motherName && formik.errors.motherName ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.motherName}
                </p>
              ) : null}
            </div>
            <div className="form-group">
              <label className="all_label">Address</label>
              <textarea
                name="address"
                className={`form-control ${
                  formik.touched.address && formik.errors.address
                    ? "is-invalid"
                    : ""
                }`}
                placeholder="Address"
                id="address"
                rows="3"
                {...formik.getFieldProps("address")}
              ></textarea>
              {formik.touched.address && formik.errors.address ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.address}
                </p>
              ) : null}
            </div>
            <div className="form-group">
              <label className="all_label">Mobile No.</label>
              <input
                type="text"
                name="mobileNo"
                className={`form-control ${
                  formik.touched.mobileNo && formik.errors.mobileNo
                    ? "is-invalid"
                    : ""
                }`}
                placeholder="Mobile No."
                id="mobileNo"
                value={formik.values.mobileNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.mobileNo && formik.errors.mobileNo ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.mobileNo}
                </p>
              ) : null}
            </div>

            <div className="form-group">
              <label className="all_label">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                className={`form-control ${
                  formik.touched.dateOfBirth && formik.errors.dateOfBirth
                    ? "is-invalid"
                    : ""
                }`}
                id="dateOfBirth"
                {...formik.getFieldProps("dateOfBirth")}
              />
              {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.dateOfBirth}
                </p>
              ) : null}
            </div>
            <div className="form-group">
              <label className="all_label">Class</label>
              <select
                name="class"
                className={`form-control ${
                  formik.touched.class && formik.errors.class
                    ? "is-invalid"
                    : ""
                }`}
                id="class"
                {...formik.getFieldProps("class")}
              >
                <option>Select Class</option>
                {/* Add options here */}
              </select>
              {formik.touched.class && formik.errors.class ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.class}
                </p>
              ) : null}
            </div>
            <div className="form-group">
              <label className="all_label">Section</label>
              <select
                name="section"
                className={`form-control ${
                  formik.touched.section && formik.errors.section
                    ? "is-invalid"
                    : ""
                }`}
                id="section"
                {...formik.getFieldProps("section")}
              >
                <option>Select Section</option>
                {/* Add options here */}
              </select>
              {formik.touched.section && formik.errors.section ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.section}
                </p>
              ) : null}
            </div>
            <div className="form-group">
              <label className="all_label">Date of Admission</label>
              <input
                type="date"
                name="dateOfAdmission"
                className={`form-control ${
                  formik.touched.dateOfAdmission &&
                  formik.errors.dateOfAdmission
                    ? "is-invalid"
                    : ""
                }`}
                id="dateOfAdmission"
                value={formik.values.dateOfAdmission}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.dateOfAdmission &&
              formik.errors.dateOfAdmission ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.dateOfAdmission}
                </p>
              ) : null}
            </div>
            <div className="form-group">
              <label className="all_label">Blood Group</label>
              <input
                type="text"
                name="bloodGroup"
                className={`form-control ${
                  formik.touched.bloodGroup && formik.errors.bloodGroup
                    ? "is-invalid"
                    : ""
                }`}
                placeholder="Blood Group"
                id="bloodGroup"
                value={formik.values.bloodGroup}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.bloodGroup && formik.errors.bloodGroup ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.bloodGroup}
                </p>
              ) : null}
            </div>

            <div className="form-group">
              <label className="all_label">Gender</label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    className="form-radio h-4 w-4 text-gray-700"
                    type="radio"
                    name="gender"
                    value="male"
                    {...formik.getFieldProps("gender")}
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    className="form-radio h-4 w-4 text-gray-700"
                    type="radio"
                    name="gender"
                    value="female"
                    {...formik.getFieldProps("gender")}
                  />
                  <span className="ml-2">Female</span>
                </label>
                {formik.touched.gender && formik.errors.gender ? (
                  <p className="text-red-500 text-xs italic">
                    {formik.errors.gender}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="form-group">
              <label className="all_label">Parent</label>
              <select
                className={`form-control ${
                  formik.touched.parent && formik.errors.parent
                    ? "is-invalid"
                    : ""
                }`}
                id="parent"
                {...formik.getFieldProps("parent")}
              >
                <option>Select Parent</option>
                {/* Add options here */}
              </select>
              {formik.touched.parent && formik.errors.parent ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.parent}
                </p>
              ) : null}
            </div>

            <div className="form-group">
              <label className="all_label">Religion</label>
              <input
                className={`form-control ${
                  formik.touched.religion && formik.errors.religion
                    ? "is-invalid"
                    : ""
                }`}
                id="religion"
                type="text"
                placeholder="Religion"
                {...formik.getFieldProps("religion")}
              />
              {formik.touched.religion && formik.errors.religion ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.religion}
                </p>
              ) : null}
            </div>

            <div className="form-group">
              <label className="all_label">Caste</label>
              <input
                className={`form-control ${
                  formik.touched.caste && formik.errors.caste
                    ? "is-invalid"
                    : ""
                }`}
                id="caste"
                type="text"
                placeholder="Caste"
                {...formik.getFieldProps("caste")}
              />
              {formik.touched.caste && formik.errors.caste ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.caste}
                </p>
              ) : null}
            </div>

            <div className="form-group">
              <label className="all_label">Sub-Caste</label>
              <input
                className={`form-control ${
                  formik.touched.subCaste && formik.errors.subCaste
                    ? "is-invalid"
                    : ""
                }`}
                id="subCaste"
                type="text"
                placeholder="Sub-Caste"
                {...formik.getFieldProps("subCaste")}
              />
              {formik.touched.subCaste && formik.errors.subCaste ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.subCaste}
                </p>
              ) : null}
            </div>

            <div className="form-group">
              <label className="all_label">Nationality</label>
              <input
                className={`form-control ${
                  formik.touched.nationality && formik.errors.nationality
                    ? "is-invalid"
                    : ""
                }`}
                id="nationality"
                type="text"
                placeholder="Nationality"
                {...formik.getFieldProps("nationality")}
              />
              {formik.touched.nationality && formik.errors.nationality ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.nationality}
                </p>
              ) : null}
            </div>

            <div className="form-group">
              <label className="all_label">Aadhar No.</label>
              <input
                className={`form-control ${
                  formik.touched.aadharNo && formik.errors.aadharNo
                    ? "is-invalid"
                    : ""
                }`}
                id="aadharNo"
                type="text"
                placeholder="Aadhar No."
                {...formik.getFieldProps("aadharNo")}
              />
              {formik.touched.aadharNo && formik.errors.aadharNo ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.aadharNo}
                </p>
              ) : null}
            </div>

            <div className="form-group">
              <label className="all_label">Aadhar Document</label>
              <input
                className={`form-control ${
                  formik.touched.aadharDocument && formik.errors.aadharDocument
                    ? "is-invalid"
                    : ""
                }`}
                id="aadharDocument"
                name="aadharDocument"
                type="file"
                onChange={handleFileChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.aadharDocument && formik.errors.aadharDocument ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.aadharDocument}
                </p>
              ) : null}
            </div>
            <div className="form-group">
              <label className="all_label">Disability</label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    className="form-radio h-4 w-4 text-gray-700"
                    type="radio"
                    name="isDisabled"
                    value="yes"
                    {...formik.getFieldProps("isDisabled")}
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    className="form-radio h-4 w-4 text-gray-700"
                    type="radio"
                    name="isDisabled"
                    value="no"
                    {...formik.getFieldProps("isDisabled")}
                  />
                  <span className="ml-2">No</span>
                </label>
                {formik.touched.isDisabled && formik.errors.isDisabled ? (
                  <p className="text-red-500 text-xs italic">
                    {formik.errors.isDisabled}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="form-group">
              <label className="all_label">Identification Mark</label>
              <input
                className={`form-control ${
                  formik.touched.identificationMark &&
                  formik.errors.identificationMark
                    ? "border-red-500"
                    : ""
                }`}
                id="identificationMark"
                name="identificationMark"
                type="text"
                placeholder="Identification Mark (Moles)"
                value={formik.values.identificationMark}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.identificationMark &&
              formik.errors.identificationMark ? (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.identificationMark}
                </p>
              ) : null}
            </div>

          </div>
        </div>
        {/* Profile Image section */}
        <div className="flex flex-col items-center md:col-span-1">
          <img src={profileImag} alt="Profile" className="w-60 h-60 mb-2" />
          <button
            className="border-2 mt-4 w-1/2 hover:bg-rose-50 text-gray-800 text-2xl font-bold py-2 px-4 rounded-2 focus:outline-none"
            type="button"
          >
            Browse
          </button>
        </div>
        {/* Next button */}
        <div className="col-span-1 md:col-span-3 flex justify-end">
          <button
            className="bg-cyan-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded focus:outline-none"
            type="submit"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
}

export default BasicInformation;
