import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const handleExpenseData = (data) => {
    props.onNewExpense(data);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitSave={handleExpenseData} />
    </div>
  );
};

export default NewExpense;
//long for a better life
