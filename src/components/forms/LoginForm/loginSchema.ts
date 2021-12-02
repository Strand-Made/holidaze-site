import * as yup from "yup";

export const schema = yup
  .object({
    email: yup.string().required().email("Please include a valid email"),
    password: yup.string().required(),
  })
  .required();
