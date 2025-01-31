import { CardContent, Typography, Grid2, Card } from "@mui/material";
import React from "react";
import ExpenseChart from "../components/ExpenseChart";
import QuickActions from "../components/QuickActions";
import { useUser } from "../context/UserContext";

const Dashboard = () => {
  const { balance, expenses, incomes } = useUser();
  return (
    <Grid2 container spacing={2} padding={2}>
      <Grid2 item="true" xs={12} sm={6} md={3}>
        <Card sx={{ width: "200px" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Current Balance
            </Typography>
            <Typography variant="h4" color="primary">
              {balance >= 0 ? `$${balance}` : `-$${balance * -1}`}
            </Typography>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 item="true" xs={12} sm={6} md={3}>
        <Card sx={{ width: "200px" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Total Expenses
            </Typography>
            <Typography variant="h4" color="secondary">
              ${expenses * -1}
            </Typography>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 item="true" xs={12} sm={6} md={3}>
        <Card sx={{ width: "200px" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Total Income
            </Typography>
            <Typography variant="h4" color="success.main">
              ${incomes}
            </Typography>
          </CardContent>
        </Card>
      </Grid2>

      <Grid2 item="true" xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Income vs. Expenses Mock-up
            </Typography>
            <ExpenseChart />
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 item="true" xs={12}>
        <QuickActions />
      </Grid2>
    </Grid2>
  );
};

export default Dashboard;
