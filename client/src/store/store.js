import { configureStore } from "@reduxjs/toolkit";
import { createNewProduct } from "../actions/createNewProduct";
import { createNewUser } from "../actions/createNewUser";
import { createSingleProduct } from "../actions/createSingleProduct";
import { suggestionsSlice } from "../actions/createRelatedProducts";

export const store = configureStore({
  reducer: {
    user: createNewUser.reducer,
    products: createNewProduct.reducer,
    product: createSingleProduct.reducer,
    suggestionsProducts: suggestionsSlice.reducer,
  },
});
