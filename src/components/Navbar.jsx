import React, { useState } from "react";
import {
  Button,
  Box,
  Toolbar,
  AppBar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router-dom";
import { logout } from "../auth/auth";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button onClick={() => navigate("/")}>
          <ListItemText primary="Home" />
        </ListItem>
        {user ? (
          <>
            <ListItem button onClick={() => navigate("/dashboard")}>
              <ListItemText primary="My finances" />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItem>
          </>
        ) : (
          <>
            <ListItem button onClick={() => navigate("/login")}>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button onClick={() => navigate("/signup")}>
              <ListItemText primary="Sign Up" />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ display: "flex", backgroundColor: "#1976d2", borderRadius: "8px" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ ml:{ xs: 0, md: 24 }, flexGrow: 1}}>
            Finance Manager
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }}}>
            <Button
              color="inherit"
              onClick={() => navigate("/")}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <HomeIcon />
              <Typography variant="body1" sx={{ ml: 1 }}>
                Home
              </Typography>
            </Button>
            {user ? (
              <>
                <Button color="inherit" onClick={() => navigate("/dashboard")}>
                  <DashboardIcon />
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    My finances
                  </Typography>
                </Button>
                <Button color="inherit" onClick={handleLogout}>
                  <LogoutIcon />
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    Logout
                  </Typography>
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => navigate("/login")}>
                  <LoginIcon />
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    Login
                  </Typography>
                </Button>
                <Button color="inherit" onClick={() => navigate("/signup")}>
                  <PersonAddAlt1OutlinedIcon />
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    Sign Up
                  </Typography>
                </Button>
              </>
            )}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "block", md: "none" }, outline: "none" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </>
  );
};

export default Navbar;
