import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <p className="expenses-list__fallback">No Expense Found</p>;
  }
  return props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      price={expense.amount}
      date={expense.date}
      className="expenses-list"
    />
  ));
};

export default ExpenseList;
