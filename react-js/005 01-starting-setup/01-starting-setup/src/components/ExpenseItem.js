import {useState } from 'react'
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
// we can also use object destructuring and assing variable name directly

// function ExpenseItem({expenseDate , expenseTitel , expenseAmount }) {

function ExpenseItem(props) {

    // const expenseDate = new Date(2024,2,4);
    // const expenseTitel = "Car Insurance";
    // const expenseAmount = 4522.56

    // function onClickFunction(){
    //     console.log("Clicked..!")
    // }

    // const [expenceTitel, setExpenceTitel ] = useState(props.expenseTitel);

    // // let titel = props.titel;

    const onClickFunction = () => {
        // titel = "Updated..!";
        // setExpenceTitel("UPDATED Value");
        // console.log("Clicked..!" , titel)
    }

    return (
        <Card className="expense-item">

            {console.log(props)}
            <ExpenseDate expenseDate={props.date} />

            {/* <div>{props.expenseDate.toISOString()}</div> */}
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">RS. {props.amount}</div>
            </div>

            <button className="button-success" onClick={onClickFunction} >Click</button>
        </Card>
    );
}

export default ExpenseItem;