import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useUser } from "../context/UserContext";
import dayjs from "dayjs";

const ExpenseChart = () => {
  const { userExpenses } = useUser();
  const calculateTotalIncome = (month) => {
    return userExpenses
      .filter(
        (expense) =>
          expense.category === "Income" &&
          dayjs(expense.date).format("MMMM") === month
      )
      .reduce((total, expense) => total + expense.amount, 0);
  };

  const calculateTotalExpenses = (month) => {
    return userExpenses
      .filter(
        (expense) =>
          !expense.category === "Income" &&
          dayjs(expense.date).format("MMMM") === month
      )
      .reduce((total, expense) => total + expense.amount, 0);
  };

  const data = [
    {
      name: "Jan",
      Income: calculateTotalIncome("January"),
      Expenses: calculateTotalExpenses("January"),
    },
    {
      name: "Feb",
      Income: calculateTotalIncome("February"),
      Expenses: calculateTotalExpenses("February"),
    },
    {
      name: "Mar",
      Income: calculateTotalIncome("March"),
      Expenses: calculateTotalExpenses("March"),
    },
  ];

  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Income" fill="#4caf50" />
      <Bar dataKey="Expenses" fill="#f44336" />
    </BarChart>
  );
};

export default ExpenseChart;
