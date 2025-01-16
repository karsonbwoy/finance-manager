import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import { Home, BarChart, AccountBalanceWallet } from "@mui/icons-material";
import { Outlet, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  return (
    <Box sx={{ width: "100vw", display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "flex" },
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem button onClick={() => navigate("/dashboard/home")}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Your Dashboard" />
            </ListItem>
            <ListItem button onClick={() => navigate("/dashboard/expenses")}>
              <ListItemIcon>
                <AccountBalanceWallet />
              </ListItemIcon>
              <ListItemText primary="Expenses" />
            </ListItem>
            <ListItem button onClick={() => navigate("/dashboard/reports")}>
              <ListItemIcon>
                <BarChart />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            sx={{display: { xs: "flex", md: "none" }}}
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="Dashboards"
              onClick={() => navigate("/dashboard/home")}
              icon={<Home />}
            />
            <BottomNavigationAction
              label="Expenses"
              onClick={() => navigate("/dashboard/expenses")}
              icon={<AccountBalanceWallet />}
            />
            <BottomNavigationAction
              label="Favourites"
              onClick={() => navigate("/dashboard/reports")}
              icon={<BarChart />}
            />
          </BottomNavigation>
        </Paper>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
