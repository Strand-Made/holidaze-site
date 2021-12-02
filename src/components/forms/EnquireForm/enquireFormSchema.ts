import * as yup from "yup";

export const schema = yup.object({
  firstName: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});
