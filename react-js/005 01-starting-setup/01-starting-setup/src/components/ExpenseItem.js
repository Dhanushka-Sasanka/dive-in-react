
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
// we can also use object destructuring and assing variable name directly

// function ExpenseItem({expenseDate , expenseTitel , expenseAmount }) {

function ExpenseItem(props) {

    // const expenseDate = new Date(2024,2,4);
    // const expenseTitel = "Car Insurance";
    // const expenseAmount = 4522.56

    

    return (
        <Card className="expense-item">
             
            <ExpenseDate expenseDate={props.expenseDate}/>

            {/* <div>{props.expenseDate.toISOString()}</div> */}
            <div className="expense-item__description">
                <h2>{props.expenseTitel}</h2>
                <div className="expense-item__price">RS. {props.expenseAmount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;