import React, { useEffect } from "react";
import { fetchAuthCheck } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { Header } from "../Header/Header";
import { Box } from "@mui/material";

export const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthCheck());
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};
