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
} from "@mui/material";

import { useUser } from "../context/UserContext";

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
  const { userExpenses } = useUser();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  let sortedExpenses = userExpenses?.sort(getComparator(order, orderBy));

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
            {sortedExpenses?.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell>{expense.category}</TableCell>
                <TableCell align="right">
                  {expense.amount >= 0
                    ? `$${expense.amount}`
                    : `-$${expense.amount * -1}`}
                </TableCell>
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
