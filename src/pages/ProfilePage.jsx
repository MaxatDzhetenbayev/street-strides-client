import {
  Box,
  Container,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetUserOrdersByIdQuery } from "../store/api/ProductApi";

export const ProfilePage = () => {
  const { user } = useSelector((state) => state.user);

  const { data, isLoading, refetch } = useGetUserOrdersByIdQuery(user?.id);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <Container maxWidth="xl">
      <Paper elevation={5} sx={{ padding: 5, mt: "80px" }}>
        <Typography textAlign="center" variant="h5">
          Profile: {user?.name}
        </Typography>
        <Divider sx={{ mt: 2 }} />
        <Box mt={2}>
          <Typography textAlign="center" variant="h6">
            Your orders list
          </Typography>
          {isLoading ? (
            <Box>Loading...</Box>
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Style Code</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Order create date</TableCell>
                    <TableCell align="center">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell align="center">{item.style_code}</TableCell>
                      <TableCell align="center">{item.quantity}</TableCell>
                      <TableCell align="center">{item.price}</TableCell>
                      <TableCell align="center">{item.createdate}</TableCell>
                      <TableCell align="center">{item.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </Paper>
    </Container>
  );
};
