import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAddProductForCart } from "../../../store/slices/productSlice";
import { toast } from "react-toastify";

export const ProductItem = ({
  id,
  name: title,
  description,
  images,
  price,
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleAddToCart = ({ userId, productId }) => {
    if (!userId) {
      toast.error("To add a product to your cart you need to log in");
      return;
    }
    console.log(userId, productId);
    dispatch(fetchAddProductForCart({userId, productId}));
    toast.success("Product added in your cart");
  };

  return (
    <Card>
      <CardHeader
        title={title.length > 22 ? title.slice(0, 22) + "..." : title}
      />
      <CardMedia
        component="img"
        style={{ objectFit: "contain" }}
        image={`${import.meta.env.VITE_SERVER_BASE_API}uploads/${images[0]}`}
        height="200"
      />
      <CardContent>
        <Typography mt={1}>
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={() => handleAddToCart({ userId: user?.id, productId: id })}
          >
            <ShoppingCartOutlinedIcon />
          </IconButton>
          <Typography color="blue">{price}$</Typography>
        </Box>
        <Button
          variant="outlined"
          onClick={() => navigate(`/product-detailed/${id}`)}
        >
          <Typography>Detailed</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};
