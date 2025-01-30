import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useUser } from "../context/UserContext";

const ExpenseOverview = () => {
  const { sum } = useUser();

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Total Expenses This Month
        </Typography>
        <Typography variant="h4" color="error">
          {sum >= 0 ? `$${sum}` : `-$${sum * -1}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ExpenseOverview;
