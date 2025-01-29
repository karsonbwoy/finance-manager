import { Button, Stack } from "@mui/material";
import AddExpenseModal from "./AddExpenseModal";
import AddIncomeButton from "./AddIncomeButton";

const QuickActions = () => {
  return (
    <Stack direction="row" spacing={2} marginTop={2}>
      <AddExpenseModal />
      <AddIncomeButton />
      <Button variant="outlined" color="info">
        Generate Report
      </Button>
    </Stack>
  );
};

export default QuickActions;
