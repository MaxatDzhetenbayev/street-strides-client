import { configureStore } from "@reduxjs/toolkit";
import { ProductApi } from "./api/ProductApi";
import { userSlice } from "./slices/userSlice";
import { productSlice } from "./slices/productSlice";
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    product: productSlice.reducer,
    [ProductApi.reducerPath]: ProductApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
});
