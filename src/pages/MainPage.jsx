import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { Welcome } from "./AuthPage/components/Welcome/Welcome";
import { ProductList } from "../components/ProductList/ProductList";
import Select  from "react-select";
export const MainPage = () => {
  const [brand, setBrand] = useState("all");
  const [sort, setSort] = useState("ASC");

  const brand_options = [
    { value: "all", label: "ALL" },
    { value: "Air%20Jordan", label: "Air Jordan" },
    { value: "Nike%20SB", label: "Nike SB" },
    { value: "Nike", label: "Nike" },
    { value: "Yeezy", label: "Yeezy" },
    { value: "Adidas", label: "Adidas" },
    { value: "New%20Balance", label: "New Balance" },
  ];
  const sort_options = [
    { value: "ASC", label: "Low Price" },
    { value: "DESC", label: "Hight Price" },
  ];

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
        <Box mb={5}>
          <Typography variant="h6">sort by brand</Typography>
          <Select
            options={brand_options}
            defaultValue={brand_options[0]}
            onChange={(value) => setBrand(value.value)}
          />
          <Typography variant="h6">sort by price</Typography>
          <Select
            options={sort_options}
            defaultValue={sort_options[0]}
            onChange={(value) => setSort(value.value)}
          />
        </Box>

        <ProductList brand={brand} sort={sort} />
      </Container>
    </>
  );
};
