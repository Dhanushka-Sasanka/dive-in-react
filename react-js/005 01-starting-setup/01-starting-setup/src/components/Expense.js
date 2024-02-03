import ExpenseItem from "./ExpenseItem";
import "./Expense.css"
import Card from "./Card";

export function Expense(props) {


    return (
        <Card className="expenses">
            <ExpenseItem
                expenseDate={props.expensesList[0].expenceDate}
                expenseTitel={props.expensesList[0].expenseTitel}
                expenseAmount={props.expensesList[0].expenseAmount}
            />

            <ExpenseItem
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
            />
        </Card>
    );

};