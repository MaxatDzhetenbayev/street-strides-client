import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_BASE_API + "api",
  }),
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: () => `/products`,
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductListQuery, useGetProductByIdQuery } = ProductApi;
