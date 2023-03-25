import * as yup from "yup";

const Required = "Field required";

export const UserRegisterSchema = yup.object({
  FirstName: yup.string().required(Required),
  LastName: yup.string().required(Required),
  Email: yup.string().email().required(Required),
  Password: yup.string().min(5).max(20).required(Required),
  CheckLogTermes: yup.boolean(),
  CheckLongTermes: yup.boolean().required(Required),
});
