import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableSortLabel,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";

const expenses = [
  {
    id: 1,
    category: "Food",
    amount: 150,
    date: "2025-01-20",
    description: "Groceries",
  },
  {
    id: 2,
    category: "Transport",
    amount: 50,
    date: "2025-01-19",
    description: "Fuel",
  },
  {
    id: 3,
    category: "Entertainment",
    amount: 200,
    date: "2025-01-18",
    description: "Concert tickets",
  },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const ExpenseTable = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("category");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    console.log(property);
    setOrderBy(property);
  };

  let sortedExpenses = expenses.sort(getComparator(order, orderBy));

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Recent Expenses
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sortDirection={orderBy === "category" ? order : false}>
                <TableSortLabel
                  active={orderBy === "category"}
                  direction={orderBy === "category" ? order : "asc"}
                  onClick={(e) => handleRequestSort(e, "category")}
                >
                  Category
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === "amount"}
                  direction={orderBy === "amount" ? order : "asc"}
                  onClick={(e) => handleRequestSort(e, "amount")}
                >
                  Amount
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === "date"}
                  direction={orderBy === "date" ? order : "asc"}
                  onClick={(e) => handleRequestSort(e, "date")}
                >
                  Date
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "description"}
                  direction={orderBy === "description" ? order : "asc"}
                  onClick={(e) => handleRequestSort(e, "description")}
                >
                  Description
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedExpenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell>{expense.category}</TableCell>
                <TableCell align="right">${expense.amount}</TableCell>
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
