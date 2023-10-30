import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import categoriesSlice from "./reducers/categoriesSlice";
import cartSlice from "./reducers/cartSlice";
import getUserSlice from "./reducers/getUserSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const rootReducers = combineReducers({
  product: productSlice,
  categories: categoriesSlice,
  cart: cartSlice,
  user: getUserSlice,
});

const persisted = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persisted,
  middleware: [thunk],
});

export const persistor = persistStore(store);
