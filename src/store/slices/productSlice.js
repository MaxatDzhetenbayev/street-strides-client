import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost } from "../../http";

export const fetchAddProductForCart = createAsyncThunk(
  "product/fetchAddProductForCart",
  async (userId, productId) => {
    const product = await $authHost.post("/cart/", { userId, productId });

	 if(product.status === "OK"){
		return product
	 }
  }
);

const initialState = {
  cart: [],
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = productSlice.actions;

export const ProductSlice = productSlice.reducer;
