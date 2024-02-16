import ExpenseItem from "./ExpenseItem";
import "./Expense.css"
import Card from "./Card";
import ExpenceFilter from "./ExpencesFilter/ExpenceFilter";
import { useState } from "react";

export function Expense(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className="expenses">

            <ExpenceFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

            {
                props.expensesList.map((expense) => (
                    <ExpenseItem
                        expenseTitel={expense.expenseTitel}
                        expenseAmount={expense.expenseAmount}
                        expenseDate={expense.expenseDate}
                    />)
                )
            }

        </Card>
    );
    
    {/* <ExpenseItem
                expenseDate={props.expensesList[1].expenceDate}
                expenseTitel={props.expensesList[1].expenseTitel}
                expenseAmount={props.expensesList[1].expenseAmount}
            />

            <ExpenseItem
                expenseDate={props.expensesList[2].expenceDate}
                expenseTitel={props.expensesList[2].expenseTitel}
                expenseAmount={props.expensesList[2].expenseAmount}
            />

            <ExpenseItem
                expenseDate={props.expensesList[3].expenceDate}
                expenseTitel={props.expensesList[3].expenseTitel}
                expenseAmount={props.expensesList[3].expenseAmount}
            />

            <ExpenseItem
                expenseDate={props.expensesList[4].expenceDate}
                expenseTitel={props.expensesList[4].expenseTitel}
                expenseAmount={props.expensesList[4].expenseAmount}
            /> */}





};