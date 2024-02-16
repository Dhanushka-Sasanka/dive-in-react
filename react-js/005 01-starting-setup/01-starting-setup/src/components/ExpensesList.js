import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css'


const ExpensesList = props => {


    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
    }

    console.log(props)
    return (
        <ul className='expenses-list'>
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.expenseTitel}
                    amount={expense.expenseAmount}
                    date={expense.expenseDate}
                />
            ))}
        </ul>
    );

};

export default ExpensesList;