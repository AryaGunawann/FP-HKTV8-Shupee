import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCart = createAsyncThunk("cart/getCart", async (userID) => {
  try {
    const resp = await axios.get(
      `https://fakestoreapi.com/carts/user/${userID}`
    );
    return resp.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  cart: [],
  recapCheckOut: [],
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      const { id, quantity } = action.payload;
      const objectIndex = state.cart.findIndex((item) => item.id === id);
      if (objectIndex === -1) {
        state.cart.push({ ...action.payload, quantity: quantity });
      } else {
        state.cart[objectIndex].quantity += quantity;
      }
    },
    updateQuantityCart: (state, action) => {
      const { id, quantity } = action.payload;
      const objectIndex = state.cart.findIndex((item) => item.id === id);
      state.cart[objectIndex].quantity = quantity;
    },
    checkOutCart: (state, action) => {
      const { id } = action.payload;
      const newArray = state.cart.filter((cart) => {
        return !action.payload.some((payload) => payload.id === cart.id);
      });
      state.cart = newArray;
    },
    updateRecapCheckOut: (state, action) => {
      action.payload.forEach((item) => {
        const objectIndex = state.recapCheckOut.findIndex(
          (recap) => recap.id === item.id
        );
        if (objectIndex === -1) {
          state.recapCheckOut.push({ ...item });
        } else {
          state.recapCheckOut[objectIndex].quantity += item.quantity;
        }
      });
    },
    // Tambahkan fungsi removeProduct
    removeProduct: (state, action) => {
      const id = action.payload;
      const newArray = state.cart.filter((cart) => cart.id !== id);
      state.cart = newArray;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.isLoading = false;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.isLoading = false;
        console.log("error", action.error.message);
      });
  },
});

export const {
  setCart,
  updateQuantityCart,
  checkOutCart,
  updateRecapCheckOut,
  removeProduct, 
} = cartSlice.actions;
export default cartSlice.reducer;
