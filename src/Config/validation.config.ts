import * as Yup from 'yup';

 // Define Yup schema for validation
export const signUpValidation = Yup.object().shape({
  fullname: Yup.string()
    .required("Please enter your full name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email address"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});