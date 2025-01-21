import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ExpenseOverview = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Total Expenses This Month
        </Typography>
        <Typography variant="h4" color="error">
          $1,200
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ExpenseOverview;
