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
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { useNavigate } from "react-router-dom";

export const ProductItem = ({
  id,
  name: title,
  description,
  images,
  price,
}) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader title={title} />
      <CardMedia
        component="img"
        style={{ objectFit: "contain" }}
        image={`${import.meta.env.VITE_SERVER_BASE_API}uploads/${images[0]}`}
        height="200"
      />
      <CardContent>
        <Typography mt={1}>
          {description.length > 123
            ? description.slice(0, 123) + "..."
            : description}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton>
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
