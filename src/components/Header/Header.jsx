import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/slices/userSlice";
import Person2Icon from "@mui/icons-material/Person2";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth } = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

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

            {isAuth ? (
              <Box>
                <Button onClick={handleClick}>
                  <Avatar />
                </Button>
                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                  <MenuItem onClick={() => navigate("/profile")}>
                    <Person2Icon /> Profile
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/user-cart")}>
                    <ShoppingCartOutlinedIcon />
                    Cart
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <ExitToAppIcon /> Logout
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Link to={"/auth"} style={{ color: "inherit" }}>
                <Typography variant="h6">Login</Typography>
              </Link>
            )}
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
