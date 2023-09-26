import { configureStore } from "@reduxjs/toolkit";
import productApi from "./products/productsSlice";
import cartApi from "./carts/cartsSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware, cartApi.middleware),
});

export default store;
