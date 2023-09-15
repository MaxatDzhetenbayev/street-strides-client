import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/slices/userSlice";

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth } = useSelector((state) => state.user);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Container
            maxWidth="xl"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Link to={"/"} style={{ color: "inherit", flexGrow: 1 }}>
              <Typography variant="h6" component="h1">
                Street Strides
              </Typography>
            </Link>
            <List sx={{ display: "flex" }}>
              {isAuth && (
                <ListItem>
                  <IconButton color="inherit">
                    <FavoriteBorderIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => navigate("/user-cart")}
                    color="inherit"
                  >
                    <ShoppingCartOutlinedIcon />
                  </IconButton>
                </ListItem>
              )}
              <ListItem>
                {isAuth ? (
                  <Button
                    onClick={() => dispatch(logout())}
                    variant="outlined"
                    sx={{ color: "inherit" }}
                  >
                    Logout
                  </Button>
                ) : (
                  <Link to={"/auth"} style={{ color: "inherit" }}>
                    <Typography variant="h6">Login</Typography>
                  </Link>
                )}
              </ListItem>
            </List>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
