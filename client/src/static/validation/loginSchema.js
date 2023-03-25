import * as yup from "yup";

const Required = "Field required";

export const UserLogSchema = yup.object({
  Email: yup.string().email().required(Required),
  Password: yup.string().min(5).max(20).required(Required),
  CheckTermes: yup.boolean(),
});
