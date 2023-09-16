import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartProducts,
  fetchcreateOrder,
  fetchClearCart,
  deleteProduct,
} from "../../store/slices/productSlice";

export const CartPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (user) {
      dispatch(fetchCartProducts(user.id));
    }
  }, [user]);

  const { cart: products, isLoading } = useSelector((state) => state.product);

  const totalCount = products?.reduce(function (currentPrice, currentProduct) {
    const productSum = currentProduct.price * currentProduct.quantity;

    return currentPrice + productSum;
  }, 0);

  const handleCreateOrder = (userId, productList) => {
    dispatch(fetchcreateOrder({ userId, productList }));
    dispatch(fetchClearCart(userId));
  };

  const deleteProductInCart = (productId) => {
    dispatch(deleteProduct(productId));
    location.reload();
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 10 }}>
      <Paper elevation={4}>
        {isLoading ? (
          <Box sx={{ padding: 10, textAlign: "center" }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            {products?.length ? (
              <>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Style Code</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="center">Price</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {products?.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell align="center">
                            {item.style_code}
                          </TableCell>
                          <TableCell align="center">{item.quantity}</TableCell>
                          <TableCell align="center">${item.price}</TableCell>
                          <TableCell>
                            <Button
                              onClick={() => deleteProductInCart(item.id)}
                            >
                              delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Paper
                  sx={{
                    padding: 5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6">Total Price </Typography>
                  <Button
                    onClick={() => handleCreateOrder(user.id, products)}
                    variant="contained"
                  >
                    Buy it: ${totalCount}
                  </Button>
                </Paper>
              </>
            ) : (
              <>
                <Box sx={{ padding: 10, textAlign: "center" }}>
                  <Typography variant="h4">
                    You don't have any products in your cart
                  </Typography>
                </Box>
              </>
            )}
          </>
        )}
      </Paper>
    </Container>
  );
};
