import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { signUp } from "../auth/auth";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { user, loading } = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    try {
      await signUp(email, password);
      setSuccess(true);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (user) {
    return null;
  }

  return (
    <Card sx={{ maxWidth: 400, margin: "50px auto", padding: "20px" }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Sign Up
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        {success && (
          <Typography color="primary">Account created successfully!</Typography>
        )}
        <form onSubmit={handleSignUp}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignUp;
