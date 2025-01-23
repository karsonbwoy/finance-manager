import { Button, Stack } from "@mui/material";
import AddExpenseModal from "./AddExpenseModal";

const QuickActions = () => {
  return (
    <Stack direction="row" spacing={2} marginTop={2}>
      <AddExpenseModal/>
      <Button variant="contained" color="secondary">
        Add Income
      </Button>
      <Button variant="outlined" color="info">
        Generate Report
      </Button>
    </Stack>
  );
};

export default QuickActions;
