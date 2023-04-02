import { configureStore } from "@reduxjs/toolkit";
import { createNewProduct } from "./createNewProduct";
import { createNewUser } from "./createNewUser";

export const store = configureStore({
  reducer: {
    user: createNewUser.reducer,
    product: createNewProduct.reducer,
  },
});
