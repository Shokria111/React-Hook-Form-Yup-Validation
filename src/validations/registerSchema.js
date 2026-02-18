import * as yup from "yup";

export const registerSchema = yup.object({
  fullName: yup
  .string()
  .required( "fullname must be more then 3 char")
  .min(3, 'Fullname must be at least 3 char')
  ,
  email: yup
    .string()//we define it as string, it can be number or whatever 
    .required("Email is required")//its required, if left emty, give this message
    .email("Please enter a valid email"),//this require that email should have the proper email pattern

  password : yup
    .string()
    .required("passowrd is mendatory")
    .min(8, "password must be at least 8 characters")
    .matches(/[a-z]/ , "must contian a lowercase")
    .matches(/\d/, "must contian a number")
    .matches(/[A-Z]/, "Must contian at least an uppercase"),

  confirmPassword: yup
    .string()
    .required("confirming password is requiredd")
    .oneOf([yup.ref('password')], "Password do not match.") ,
    //oneOf function checks tha if this feild is same as one of the above array element like password, or name, 
    // or email, we can ask to rewrite the email 

  terms: yup
    .boolean()
    .oneOf([true], "You must agree with our terms and conditions"),
    
  }) ;
  