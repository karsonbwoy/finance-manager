import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddExpenseButton = () => {
  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{ position: "fixed", bottom:{ xs: 70, md: 20 }, right: 20 }}
      onClick={() => console.log("Navigate to Add Expense Page")}
    >
      <AddIcon />
    </Fab>
  );
};

export default AddExpenseButton;
