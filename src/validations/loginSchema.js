import * as yup from "yup";

export const LoginSchema = yup.object({//this object contians all the configuration and roles that we defined for our login
  email: yup
  .string()//we de
  .required()
  .email("Please enenter a valid email"),

  password: yup
  .string()
  .required("passowrd is mendatory")
  .min(8, "password must be at least 8 characters"), 
  
})
//this libaray can be used elsewhere in react, angular or whatever langusagt