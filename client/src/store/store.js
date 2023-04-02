import { configureStore } from "@reduxjs/toolkit";
import { createNewProduct } from "../actions/createNewProduct";
import { createNewUser } from "../actions/createNewUser";

export const store = configureStore({
  reducer: {
    user: createNewUser.reducer,
    product: createNewProduct.reducer,
  },
});
