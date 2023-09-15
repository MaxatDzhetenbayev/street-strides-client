import { configureStore } from "@reduxjs/toolkit";
import { ProductApi } from "./api/ProductApi";
import { userSlice } from "./slices/userSlice";
import { ProductSlice } from "./slices/productSlice";
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    product: ProductSlice.reducer,
    // Add the generated reducer as a specific top-level slice
    [ProductApi.reducerPath]: ProductApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
});
