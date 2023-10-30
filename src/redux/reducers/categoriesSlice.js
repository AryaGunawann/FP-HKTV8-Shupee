import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    try {
      const resp = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      return resp.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const initialState = {
  categories: [],
  isLoading: false,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        console.log("error", action.error.message);
      });
  },
});

export default categoriesSlice.reducer;
