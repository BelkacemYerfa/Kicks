import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  suggestionsProducts: [],
  loading: false,
};

export const fetchRelatedProducts = createAsyncThunk(
  "suggestions/fetchRelatedProducts",
  async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/v1/products/recommendations/${id}`
    ).then((res) => res.json());
    return response.data;
  }
);

export const suggestionsSlice = createSlice({
  name: "suggestions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRelatedProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchRelatedProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.suggestionsProducts = action.payload;
    });
  },
});
