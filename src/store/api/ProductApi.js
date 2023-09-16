import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_BASE_API + "api",
  }),
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: ({ brand, sort }) => `/products/?brand=${brand}&sort=${sort}`,
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getUserOrdersById: builder.query({
      query: (id) => `/order/${id}`,
    }),
  }),
});

export const {
  useGetProductListQuery,
  useGetProductByIdQuery,
  useGetUserOrdersByIdQuery,
} = ProductApi;
