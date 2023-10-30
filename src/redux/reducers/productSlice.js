/* eslint-disable no-unused-expressions */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("product/getProduct", async () => {
  try {
    const resp = await axios.get("https://fakestoreapi.com/products/");
    return resp.data;
  } catch (error) {
    console.error(error); 
  }
});

export const getProductByFilter = createAsyncThunk(
  "product/getProductByFilter",
  async (url) => {
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      console.error(error); 
    }
  }
);

const initialState = {
  product: [],
  filterProduct: [],
  isLoading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateCheckOutProduct: (state, action) => {
      action.payload.forEach((item) => {
        const objectIndex = state.product.findIndex(
          (prod) => prod.id === item.id
        );
        state.product[objectIndex].quantity -= item.quantity;
      });
    },
    updateQuantityProduct: (state, action) => {
      action.payload.forEach((item) => {
        const objectIndex = state.product.findIndex(
          (prod) => prod.id === item.id
        );
        state.product[objectIndex].quantity = item.quantity;
      });
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        if (state.product.length === 0) {
          state.product = action.payload.map((item) => ({
            ...item,
            quantity: 20,
          }));
        }
        state.isLoading = false;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        console.error("Error:", action.error.message); // Menggunakan console.error untuk log error
      })
      // Filter Case
      .addCase(getProductByFilter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductByFilter.fulfilled, (state, action) => {
        state.filterProduct = action.payload.map((item) => {
          const objectQuantity = state.product.find(
            (prod) => prod.id === item.id
          )?.quantity;
          return { ...item, quantity: objectQuantity };
        });
        state.isLoading = false;
      })
      .addCase(getProductByFilter.rejected, (state, action) => {
        state.isLoading = false;
        console.error("Error:", action.error.message); // Menggunakan console.error untuk log error
      });
  },
});

export const { updateQuantityProduct, updateCheckOutProduct } =
  productSlice.actions;
export default productSlice.reducer;
