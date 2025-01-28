import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Card, CardContent, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useUser } from "../context/UserContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
};
const AddExpenseButton = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [expenseDate, setExpenseDate] = React.useState(dayjs("01-01-2025"));
  const [category, setCategory] = React.useState();
  const [description, setDescription] = React.useState();
  const [amount, setAmount] = React.useState();
  const { userExpenses, updateUserExpenses } = useUser();

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!category || !amount || !description) {
      console.log("Empty data!");
      return;
    }

    let formateDate = expenseDate.format("YYYY-MM-DD");
    let id = userExpenses.length + 1;
    let expenseData = {
      id,
      category,
      amount: amount * 1, //makes amount type of number
      date: formateDate,
      description,
    };

    let newExpenses = [...userExpenses, expenseData];

    updateUserExpenses(newExpenses);
    handleClose();
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: { xs: 70, md: 20 }, right: 20 }}
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Add Expense
            </Typography>
            <form onSubmit={handleAddExpense}>
              <TextField
                fullWidth
                label="Category"
                type="text"
                margin="normal"
                onChange={(e) => setCategory(e.target.value)}
              />
              <TextField
                fullWidth
                label="Amount"
                type="number"
                margin="normal"
                onChange={(e) => setAmount(e.target.value)}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ width: "100%", margin: "15px 0 7px 0" }}
                  value={expenseDate}
                  onChange={(value) => setExpenseDate(value)}
                />
              </LocalizationProvider>
              <TextField
                fullWidth
                label="Description"
                type="text"
                margin="normal"
                onChange={(e) => setDescription(e.target.value)}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: "15px" }}
              >
                Add Expense
              </Button>
            </form>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
};

export default AddExpenseButton;
