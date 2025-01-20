import { CardContent, Typography, Grid2, Card } from "@mui/material";
import React from "react";
import ExpenseChart from "../components/ExpenseChart";

const Dashboard = () => {
  return (
    <Grid2 container spacing={2} padding={2}>
      <Grid2 item xs={12} sm={6} md={3}>
        <Card sx={{ width: "200px" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Current Balance
            </Typography>
            <Typography variant="h4" color="primary">
              $5,000
            </Typography>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 item xs={12} sm={6} md={3}>
        <Card sx={{ width: "200px" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Monthly Expenses
            </Typography>
            <Typography variant="h4" color="secondary">
              $1,200
            </Typography>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 item xs={12} sm={6} md={3}>
        <Card sx={{ width: "200px" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Monthly Income
            </Typography>
            <Typography variant="h4" color="success.main">
              $3,000
            </Typography>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 item xs={12} sm={6} md={3}>
        <Card sx={{ width: "200px" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Savings
            </Typography>
            <Typography variant="h4" color="info.main">
              $2,000
            </Typography>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Income vs. Expenses
            </Typography>
            <ExpenseChart />
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default Dashboard;
