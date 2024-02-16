import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [expenseTitel, setExpenseTitel] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const [expenseDate, setExpenseDate] = useState('');

    // but we have some other ways to do this

    const [userExpense, setUserExpense] = useState({
        expenseTitel: '',
        expenseAmount: '',
        expenseDate: ''
    });

    // we can also do this way but when we doing this we must always update 
    // all properties inside this object then we can update this like method 2 



    const handlerTitelExpense = (event) => {
        // console.log(event.target.value);
        // method :1
        setExpenseTitel(event.target.value);

        // method: 2
        // this is technicaly correct but we are using previous state of userexpense Object 
        // for this we can go for this method 

        // setUserexpense({
        //     ...userexpense,
        //     expenseTitel: event.target.value
        // });




    };
    const handlerAmountExpense = (event) => {
        // console.log(event.target.value);
        setExpenseAmount(event.target.value);

        // setUserexpense({
        //     ...userexpense,
        //     expenseAmount: event.target.value
        // });
    };
    const handlerDateExpense = (event) => {
        // console.log(event.target.value);
        setExpenseDate(event.target.value);

        // setUserexpense({
        //     ...userexpense,
        //     expenseDate: event.target.value
        // });
    };

    // instead define event handlers individiual we can define one event handler to manage all event 

    // const expenseChangeHandler = (identifier, value) => {
    //     console.log(value);
    //     if (identifier === 'titel') {
    //         setExpenseTitel(value);

    //     } else if (identifier === 'date') {
    //         setExpenseDate(value);

    //     } else if (identifier === 'amount') {
    //         setExpenseAmount(value)

    //     }

    // };

    const formSubmitHandler = (event) => {

        event.preventDefault();

        const expenseData = {
            expenseTitel: expenseTitel,
            expenseAmount: expenseAmount,
            expenseDate: new Date(expenseDate)

        };

        console.log(expenseData);

        props.onSaveExpenseData(expenseData);
        // two way binding use value prop for jsx part
        setExpenseTitel('');
        setExpenseAmount('');
        setExpenseDate('');

    }



    return (
        <form onSubmit={formSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={handlerTitelExpense} 
                    value={expenseTitel}
                    />
                    {/* <input type='text' onChange={(event) => expenseChangeHandler('titel', event.target.value)}  */  }
                
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={handlerAmountExpense} 
                    value={expenseAmount}
                    />
                    {/* <input type='number' min='0.01' step='0.01' onChange={(event) => expenseChangeHandler('amount', event.target.value)}  */}
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={handlerDateExpense} 
                    value={expenseDate}
                    />
                    {/* <input type='date' min='2019-01-01' max='2022-12-31' onChange={(event) => expenseChangeHandler('date', event.target.value)} */}
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;


