import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {},
  loading: false,
};

const url = "http://localhost:5000/api/v1/register";

export const fetchNewUser = createAsyncThunk(
  "user/fetchNewUser",
  async (data) => {
    const response = await axios.post(url, data);
    return response.data;
  }
);

export const createNewUser = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNewUser.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchNewUser.fulfilled, (state, action) => {
        (state.user = action.payload), (state.loading = false);
      });
  },
});
