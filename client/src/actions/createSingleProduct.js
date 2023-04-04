import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  product: {},
  loading: false,
};

export const fetchSingleProduct = createAsyncThunk(
  "product/fetchSingleProduct",
  async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/v1/product/${id}`
    ).then((res) => res.json());
    return response;
  }
);

export const createSingleProduct = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
    });
  },
});
