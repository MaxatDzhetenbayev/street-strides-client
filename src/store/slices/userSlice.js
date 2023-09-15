import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { $authHost, $host } from "../../http";

export const fetchUserRegistration = createAsyncThunk(
  "user/fetchUserRegister",
  async (dataEnter) => {
    const response = await $host.post("/auth/registration", { ...dataEnter });
    const user = jwt_decode(
      response.data.token,
      import.meta.env.VITE_SECRET_OF_PRIVATE_KEY
    );
    window.localStorage.setItem("token", response.data.token);
    return user;
  }
);

export const fetchUserLogin = createAsyncThunk(
  "user/fetchUserLogin",
  async (dataEnter) => {
    const response = await $host.post("/auth/login", { ...dataEnter });
    const user = jwt_decode(
      response.data.token,
      import.meta.env.VITE_SECRET_OF_PRIVATE_KEY
    );
    window.localStorage.setItem("token", response.data.token);
    return user;
  }
);

export const fetchAuthCheck = createAsyncThunk(
  "user/fetchAuthCheck",
  async () => {
    const response = await $authHost.get("/auth/check");
    const user = jwt_decode(
      response.data.token,
      import.meta.env.VITE_SECRET_OF_PRIVATE_KEY
    );
    window.localStorage.setItem("token", response.data.token);
    return user;
  }
);

export const fetchAddOrder = createAsyncThunk(
  "order/fetchAddOrder",
  async (userId, productId) => {
    const response = await $authHost.post("product/order", {
      userId,
      productId,
    });

    if (response.status === "OK") {
      return true;
    }

    return false;
  }
);

const initialState = {
  user: null,
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, payload) => {
      console.log("logout");
      state.user = null;
      state.isAuth = false;
      window.localStorage.removeItem("token");
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserRegistration.fulfilled, (state, action) => {
      state.user = { ...action.payload };
    });
    builder.addCase(fetchUserLogin.fulfilled, (state, action) => {
      state.user = { ...action.payload };
    });
    builder.addCase(fetchAuthCheck.fulfilled, (state, action) => {
      state.user = { ...action.payload };
    });
  },
});

export const { setIsAuth, logout } = userSlice.actions;
