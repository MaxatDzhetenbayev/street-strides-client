import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchUserLogin,
  fetchUserRegistration,
  setIsAuth,
} from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";

export const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    if (isLogin) {
      dispatch(fetchUserLogin({ name, password }));
    } else {
      dispatch(fetchUserRegistration({ name, password }));
    }
    dispatch(setIsAuth(true));
    navigate("/");
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        width: "100%",

        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          minWidth: "340px",
        }}
      >
        <Typography variant="h6" textAlign="center" sx={{ color: "#1976d2;" }}>
          {isLogin ? "LOGIN" : "REGISTER"}
        </Typography>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={() => handleClick()} variant="outlined">
          {isLogin ? "Login" : "Register"}
        </Button>
        <div
          onClick={() => {
            setIsLogin((prev) => !prev);
          }}
          style={{ cursor: "pointer", color: "#1976d2" }}
        >
          <Typography>
            {isLogin ? "Register" : "Do you have an account?"}
          </Typography>
        </div>
      </Paper>
    </Container>
  );
};
