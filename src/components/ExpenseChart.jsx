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

const data = [
  { name: "Jan", Income: 4000, Expenses: 2400 },
  { name: "Feb", Income: 3000, Expenses: 1398 },
  { name: "Mar", Income: 5000, Expenses: 4300 },
];

const ExpenseChart = () => {
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
