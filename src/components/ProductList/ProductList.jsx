import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Skeleton,
} from "@mui/material";
import React from "react";
import { ProductItem } from "./ProductItem/ProductItem";
import { useGetProductListQuery } from "../../store/api/ProductApi";
export const ProductList = ({ brand, sort }) => {
  const { data: products, isLoading } = useGetProductListQuery({ brand, sort });

  const loading = true;

  if (isLoading) {
    return (
      <Grid mt={5} container rowSpacing={2} columnSpacing={3}>
        {[0, 0, 0, 0, 0, 0, 0, 0].map((item, index) => (
          <Grid item key={index} sm={12} md={6} lg={4} xl={3}>
            <Card>
              <CardHeader
                title={
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                }
              />
              <Skeleton
                sx={{ height: 190 }}
                animation="wave"
                variant="rectangular"
              />
              <CardContent>
                <Skeleton
                  animation="wave"
                  height={10}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton animation="wave" height={10} width="80%" />
              </CardContent>
              <Skeleton
                sx={{ height: 10, ml: 2 }}
                width="20%"
                animation="wave"
                variant="rectangular"
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    );
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
