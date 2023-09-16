import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost } from "../../http";

export const fetchAddProductForCart = createAsyncThunk(
  "product/fetchAddProductForCart",
  async ({ userId, productId }) => {
    const product = await $authHost.post("/cart/", { userId, productId });

    if (product.status === "OK") {
      return product;
    }
  }
);

export const fetchcreateOrder = createAsyncThunk(
  "product/fetchcreateOrder",
  async ({ userId, productList }) => {
    const product = await $authHost.post("/order/", { userId, productList });

    if (product.status === "OK") {
      return true;
    }

    return false;
  }
);

export const fetchClearCart = createAsyncThunk(
  "product/fetchcreateOrder",
  async (id) => {
    const products = await $authHost.delete(`/cart/${id}`);

    if (products.status === "OK") {
      return products;
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/fetchcreateOrder",
  async (id) => {
    $authHost.delete(`/cart/product/${id}`);
  }
);

export const fetchCartProducts = createAsyncThunk(
  "product/fetchCartProducts",
  async (userId) => {
    const products = await $authHost.get(`cart/${userId}`);
    return products.data;
  }
);

const initialState = {
  cart: null,
  isLoading: true,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCartProducts.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchClearCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
  },
});

export const {} = productSlice.actions;
