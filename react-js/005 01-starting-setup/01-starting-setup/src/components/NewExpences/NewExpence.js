import React from 'react';

import ExpenseForm from './ExpenceForm';
import './NewExpence.css';

const NewExpense = () => {
  return (
    <div className='new-expense'>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;