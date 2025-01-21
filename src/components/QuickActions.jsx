import { Button, Stack } from "@mui/material";

const QuickActions = () => {
  return (
    <Stack direction="row" spacing={2} marginTop={2}>
      <Button variant="contained" color="primary">
        Add Expense
      </Button>
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
