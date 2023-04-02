import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  loading: false,
};

const fetchNewProduct = createAsyncThunk(
  "newProduct/fetchNewProduct",
  async () => {
    const response = fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );
    return response;
  }
);

export const createNewProduct = createSlice({
  name: "newProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNewProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNewProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
    });
  },
});
