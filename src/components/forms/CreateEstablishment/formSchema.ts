import * as yup from "yup";

export const schema = yup.object({
  establishmentName: yup
    .string()
    .min(3, "Name must be longer than 3 characters ")
    .required("Please name your establishment"),
  category: yup.string().required("Please choose a category"),
  slug: yup.string(),
  amenitites: yup.object({
    shower: yup.bool(),
    office: yup.bool(),
    gym: yup.bool(),
    cleaning: yup.bool(),
    breakfast: yup.bool(),
  }),
  price: yup
    .number()
    .typeError("Please include price per night")
    .min(5, "Price has to be higher than 5")
    .required("Please include a price"),
  bedrooms: yup
    .number()
    .typeError("Please include how many bedrooms you offer")
    .min(1)
    .required("Please include how many bedrooms"),
  distanceToCentre: yup
    .number()
    .typeError("Please include how far it is to the city centre")
    .required(),
  establishmentDescription: yup.string().required("An description is required"),
  files: yup.mixed().required("Please include a image of your establishment"),
});
