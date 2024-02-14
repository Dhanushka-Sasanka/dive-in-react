import React, { useState } from 'react';

import './ExpenceForm.css';

const ExpenseForm = () => {

    const [inputTitel, setInputTitel] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    // but we have some other ways to do this

    const [userInput, setUserInput] = useState({
        inputTitel: '',
        inputAmount: '',
        inputDate: ''
    });

    // we can also do this way but when we doing this we must always update 
    // all properties inside this object then we can update this like method 2 



    const handlerTitelInput = (event) => {
        console.log(event.target.value);
        // method :1
        setInputTitel(event.target.value);

        // method: 2
// this is technicaly correct but we are using previous state of userInput Object 
// for this we can go for method 3
        setUserInput({
            ...userInput,
            inputTitel: event.target.value
        });

        // method: 3


    };
    const handlerAmountInput = (event) => {
        console.log(event.target.value);
        setInputTitel(event.target.value);

        setUserInput({
            ...userInput,
            inputAmount: event.target.value
        });
    };
    const handlerDateInput = (event) => {
        console.log(event.target.value);
        setInputTitel(event.target.value);

        setUserInput({
            ...userInput,
            inputDate: event.target.value
        });
    };



    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={handlerTitelInput} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={handlerAmountInput} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={handlerDateInput} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;


