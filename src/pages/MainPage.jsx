import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import { Welcome } from "./AuthPage/components/Welcome/Welcome";
import { ProductList } from "../components/ProductList/ProductList";

export const MainPage = () => {
  return (
    <>
      <Welcome />
      <Container maxWidth="xl">
        <Box>
          <Typography
            sx={{ textAlign: "center", mt: "40px", fontWeight: "bold" }}
            variant="h2"
          >
            SNEAKERS
          </Typography>
        </Box>
        <Paper>
          <ProductList />
        </Paper>
      </Container>
    </>
  );
};
