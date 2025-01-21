import React from 'react';
import ExpenseOverview from '../components/ExpensesOverview';
import ExpenseTable from '../components/ExpenseTable'
const Expenses = () => {
    return (
        <div>
            <h1>Expenses</h1>
            <ExpenseOverview/>
            <ExpenseTable/>
        </div>
    );
};

export default Expenses;