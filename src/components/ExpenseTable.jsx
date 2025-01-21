import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const expenses = [
  {
    id: 1,
    category: "Food",
    amount: "$150",
    date: "2025-01-20",
    description: "Groceries",
  },
  {
    id: 2,
    category: "Transport",
    amount: "$50",
    date: "2025-01-19",
    description: "Fuel",
  },
  {
    id: 3,
    category: "Entertainment",
    amount: "$200",
    date: "2025-01-18",
    description: "Concert tickets",
  },
];

const ExpenseTable = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Recent Expenses
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell>{expense.category}</TableCell>
                <TableCell align="right">{expense.amount}</TableCell>
                <TableCell align="right">{expense.date}</TableCell>
                <TableCell>{expense.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ExpenseTable;
