import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  // let expensesContent = <p>No Expense Found</p>; //can use jsx outside return, save them on variable and so on.

  //very lean code
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectYear={filteredYear}
          onYearChange={yearChangeHandler}
        />
        <ExpenseChart items={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
