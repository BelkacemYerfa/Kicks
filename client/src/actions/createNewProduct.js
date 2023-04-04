import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
};

const url = "http://localhost:5000/api/v1/newProduct";

export const fetchNewProduct = createAsyncThunk(
  "newProduct/fetchNewProduct",
  async () => {
    const response = fetch(url).then((res) => res.json());
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
      state.products = action.payload;
      state.loading = false;
    });
  },
});
