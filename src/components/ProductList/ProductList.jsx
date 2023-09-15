import { Grid } from "@mui/material";
import React from "react";
import { ProductItem } from "./ProductItem/ProductItem";
import { useGetProductListQuery } from "../../store/api/ProductApi";
export const ProductList = () => {
  const { data: products, isLoading, error } = useGetProductListQuery();

  //   const data = [
  //     {
  //       id: 1,
  //       name: "SB x Supreme Dunk Low 'Rammellzee'",
  //       brand: "Nike",

  //       description: ` The Nike SB x Supreme Dunk Low ‘Rammellzee’ pays tribute to the colourful graphic art of the late NYC legend, Rammellzee. The artist's graphics cover the canvas panels on the toe box, side walls, and heel, while the overlays and Swooshes come in solid black suede. Gold Supreme deubrés appear on the laces, accompanied by a 'World Famous' hangtag. The classic SB aesthetic is tied together with a gum rubber outsole beneath a black Zoom Air midsole. Buy & sell the Nike SB x Supreme Dunk Low ‘Rammellzee’ on KLEKT`,
  //       style_code: "FD8778-001",
  //       condition: "Brand New",
  //       price: 374,
  //       release_date: "2023-08-31",
  //       images: ["NikeSB-1.webp", "NikeSB-2.webp", "NikeSB-1.webp"],
  //     },
  //     {
  //       id: 2,
  //       name: "SB x Supreme Dunk Low 'Rammellzee'",
  //       brand: "Nike",

  //       description: ` The Nike SB x Supreme Dunk Low ‘Rammellzee’ pays tribute to the colourful graphic art of the late NYC legend, Rammellzee. The artist's graphics cover the canvas panels on the toe box, side walls, and heel, while the overlays and Swooshes come in solid black suede. Gold Supreme deubrés appear on the laces, accompanied by a 'World Famous' hangtag. The classic SB aesthetic is tied together with a gum rubber outsole beneath a black Zoom Air midsole. Buy & sell the Nike SB x Supreme Dunk Low ‘Rammellzee’ on KLEKT`,
  //       style_code: "FD8778-001",
  //       condition: "Brand New",
  //       price: 374,
  //       release_date: "2023-08-31",
  //       images: ["NikeSB-1.webp", "NikeSB-2.webp", "NikeSB-1.webp"],
  //     },
  //     {
  //       id: 3,
  //       name: "SB x Supreme Dunk Low 'Rammellzee'",
  //       brand: "Nike",

  //       description: ` The Nike SB x Supreme Dunk Low ‘Rammellzee’ pays tribute to the colourful graphic art of the late NYC legend, Rammellzee. The artist's graphics cover the canvas panels on the toe box, side walls, and heel, while the overlays and Swooshes come in solid black suede. Gold Supreme deubrés appear on the laces, accompanied by a 'World Famous' hangtag. The classic SB aesthetic is tied together with a gum rubber outsole beneath a black Zoom Air midsole. Buy & sell the Nike SB x Supreme Dunk Low ‘Rammellzee’ on KLEKT`,
  //       style_code: "FD8778-001",
  //       condition: "Brand New",
  //       price: 374,
  //       release_date: "2023-08-31",
  //       images: ["NikeSB-1.webp", "NikeSB-2.webp", "NikeSB-1.webp"],
  //     },
  //     {
  //       id: 4,
  //       name: "SB x Supreme Dunk Low 'Rammellzee'",
  //       brand: "Nike",

  //       description: ` The Nike SB x Supreme Dunk Low ‘Rammellzee’ pays tribute to the colourful graphic art of the late NYC legend, Rammellzee. The artist's graphics cover the canvas panels on the toe box, side walls, and heel, while the overlays and Swooshes come in solid black suede. Gold Supreme deubrés appear on the laces, accompanied by a 'World Famous' hangtag. The classic SB aesthetic is tied together with a gum rubber outsole beneath a black Zoom Air midsole. Buy & sell the Nike SB x Supreme Dunk Low ‘Rammellzee’ on KLEKT`,
  //       style_code: "FD8778-001",
  //       condition: "Brand New",
  //       price: 374,
  //       release_date: "2023-08-31",
  //       images: ["NikeSB-1.webp", "NikeSB-2.webp", "NikeSB-1.webp"],
  //     },
  //   ];

	if(isLoading){
		return (
			<div>
				Loading...
			</div>
		)
	}


  return (
    <Grid mt={5} container rowSpacing={2} columnSpacing={3}>
      {products?.map((product) => (
        <Grid item key={product.id} sm={12} md={6} lg={4} xl={3}>
          <ProductItem {...product} />
        </Grid>
      ))}
    </Grid>
  );
};
