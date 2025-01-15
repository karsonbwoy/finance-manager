import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { login } from "../auth/auth";
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      alert("Login successful");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "50px auto", padding: "20px" }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;
