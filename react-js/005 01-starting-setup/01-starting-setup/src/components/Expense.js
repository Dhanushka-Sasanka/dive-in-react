import ExpenseItem from "./ExpenseItem";
import "./Expense.css"
import Card from "./Card";
import ExpenceFilter from "./ExpencesFilter/ExpenceFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";




export function Expense(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    console.log(props);
    const filteredExpenses = props.expensesList.filter(expense => {

        return expense.expenseDate.getFullYear().toString() === filteredYear;
    });

    // let expensesContent = <p className="no_expenses_msg">No Expenses Found.</p>;

    // if (filteredExpenses.length > 0) {
    //     expensesContent = filteredExpenses.map((expense) => (
    //         <ExpenseItem
    //             key={expense.id}  //this is more advantage for performance , 06 folder = 004 understaning keys
    //             expenseTitel={expense.expenseTitel}
    //             expenseAmount={expense.expenseAmount}
    //             expenseDate={expense.expenseDate}
    //         />)
    //     )
    // }
 

    return (
        <Card className="expenses">

            <ExpenceFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

            {/* 1 method using directly props list  */}

            {/* {
                props.expensesList.map((expense) => (
                    <ExpenseItem
                        key={expense.id}  //this is more advantage for performance , 06 folder = 004 understaning keys
                        expenseTitel={expense.expenseTitel}
                        expenseAmount={expense.expenseAmount}
                        expenseDate={expense.expenseDate}
                    />)
                )
            } */}

            {/* 2 method using filteredList  */}

            {/* {filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}  //this is more advantage for performance , 06 folder = 004 understaning keys
                    expenseTitel={expense.expenseTitel}
                    expenseAmount={expense.expenseAmount}
                    expenseDate={expense.expenseDate}
                />)
            )} */}

            {/* 3 method using conditional content ternery operator */}

            {/* {filteredExpenses.length === 0 ? (<p className="no_expenses_msg">No Expenses Found.</p>) : filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}  //this is more advantage for performance , 06 folder = 004 understaning keys
                    expenseTitel={expense.expenseTitel}
                    expenseAmount={expense.expenseAmount}
                    expenseDate={expense.expenseDate}
                />)
            )} */}

            {/* 4 method for shorted ternery operator also  TRICKY ONE*/}

            {/* {filteredExpenses.length === 0 && <p className="no_expenses_msg">No Expenses Found.</p>}

            {filteredExpenses.length > 0 &&

                filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}  //this is more advantage for performance , 06 folder = 004 understaning keys
                        expenseTitel={expense.expenseTitel}
                        expenseAmount={expense.expenseAmount}
                        expenseDate={expense.expenseDate}
                    />)
                )

            } */}

            {/* 5 method more optimious conditional content  */}


            {/* {expensesContent} */}


            {/* I will split ExpensesList for a component  */}


            <ExpensesList items={filteredExpenses}/>
        


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