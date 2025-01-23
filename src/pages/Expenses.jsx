import React from 'react';
import ExpenseOverview from '../components/ExpensesOverview';
import ExpenseTable from '../components/ExpenseTable'
import AddExpenseButton from '../components/AddExpenseButton';
const Expenses = () => {
    return (
        <div>
            <h1>Expenses</h1>
            <ExpenseOverview/>
            <ExpenseTable/>
            <AddExpenseButton/>
        </div>
    );
};

export default Expenses;