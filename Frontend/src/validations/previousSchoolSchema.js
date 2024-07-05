import * as Yup from 'yup';

const previousSchoolDetailsSchema = Yup.array().of(
  Yup.object().shape({
    schoolName: Yup.string().required('School Name is required'),
    address: Yup.string().required('Address is required'),
    class: Yup.string().required('Class is required'),
    year: Yup.string().required('Year is required'),
  })
);

export default previousSchoolDetailsSchema;
