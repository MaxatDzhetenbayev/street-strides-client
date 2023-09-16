import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../store/api/ProductApi";

import { Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddProductForCart } from "../store/slices/productSlice";

import { format } from "date-fns";

import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { toast } from "react-toastify";

export const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const { data, isLoading } = useGetProductByIdQuery(id);

  const matches_md = useMediaQuery("(min-width: 980px)");
  const matches_sm = useMediaQuery("(min-width: 540px)");

  const handleAddToCart = ({userId, productId}) => {
    console.log(userId);
    if (!userId) {
      toast.error("To add a product to your cart you need to log in");
      return;
    }
    dispatch(fetchAddProductForCart({userId, productId}));
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

  const formattedDate = format(new Date(data.realese_date), "dd.MM.yyyy");
  return (
    <Container maxWidth="xl">
      <Grid
        mt={10}
        container
        spacing={5}
        sx={{ alignItems: "center" }}
        justifyContent="center"
      >
        <Grid item md={12} lg={4} xl={4}>
          <Box>
            <Typography variant="h4">
              {data.brand} {data.name}
            </Typography>
            <Typography mt={2}>{data.description}</Typography>

            <Typography variant="h6">
              Style Code:
              <Typography component="span"> {data.style_code}</Typography>
            </Typography>

            <Typography variant="h6">
              Realese Date:
              <Typography component="span">{" " + formattedDate}</Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={12} md={12} lg={5} xl={5}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            style={{ width: matches_md ? "" : "90vw" }}
          >
            {data.images.map((item) => (
              <SwiperSlide key={item}>
                <img
                  src={`${import.meta.env.VITE_SERVER_BASE_API}uploads/${item}`}
                  alt=""
                  width="100%"
                  height={matches_sm ? 450 : 250}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
          <Paper elevation={5} sx={{ padding: "20px" }}>
            <Typography variant="h4"> Price: {data.price}</Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
            >
              <Button
                onClick={() =>
                  handleAddToCart({ userId: user?.id, productId: data.id })
                }
                variant="contained"
                sx={{ padding: 2 }}
              >
                Add to bug
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
