import * as Yup from 'yup';

const basicInformationSchema = Yup.object().shape({
  admissionNo: Yup.string().required('Admission No. is required'),
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  fatherName: Yup.string().required('Father Name is required'),
  motherName: Yup.string().required('Mother Name is required'),
  address: Yup.string().required('Address is required'),
  dateOfBirth: Yup.date().required('Date of Birth is required'),
  class: Yup.string().required('Class is required'),
  section: Yup.string().required('Section is required'),
  gender: Yup.string().required('Gender is required'),
  parent: Yup.string().required('Parent is required'),
  religion: Yup.string().required('Religion is required'),
  caste: Yup.string().required('Caste is required'),
  subCaste: Yup.string().required('Sub-Caste is required'),
  nationality: Yup.string().required('Nationality is required'),
  aadharNo: Yup.string().required('Aadhar No. is required'),
  isDisabled: Yup.string().required('Is Disabled is required'),
  });
  

export default basicInformationSchema;