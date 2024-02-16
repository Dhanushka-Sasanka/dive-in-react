
import { Expense } from "./components/Expense";
import NewExpense from "./components/NewExpences/NewExpense";
import { useState } from "react";

const DUMMY_EXPENCES = [
  { id: 1 , expenseDate: new Date(2021, 2, 1), expenseTitel: "Food Expense", expenseAmount: 25021.21 },
  { id: 2 ,expenseDate: new Date(2020, 2, 2), expenseTitel: "Car Expense", expenseAmount: 32000.23 },
  { id: 3 ,expenseDate: new Date(2022, 2, 3), expenseTitel: "Travel Expense", expenseAmount: 12001.25 },
  { id: 4 ,expenseDate: new Date(2023, 2, 4), expenseTitel: "Medicine Expense", expenseAmount: 54210.52 },
  { id: 5 ,expenseDate: new Date(2024, 2, 5), expenseTitel: "Clothes Expense", expenseAmount: 45000.26 },
  { id: 6 ,expenseDate: new Date(2024, 2, 5), expenseTitel: "Other Expense", expenseAmount: 58500.26 },
];

function App() {

  const [expenses , setExpenses] = useState(DUMMY_EXPENCES);


  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);

    setExpenses(previousExpences => {
       return [expense , ...previousExpences ];
    });
  };

  return (
    <div>
      <h2 className="main_titel_app">Buget Calculator</h2>
      {/* can also pass complete object */}
      {/* <ExpenseItem
        expense={expensesList[0]}
      /> */}


      {/* <ExpenseItem
        expenseDate={expensesList[0].expenceDate}
        expenseTitel={expensesList[0].expenseTitel}
        expenseAmount={expensesList[0].expenseAmount}
      />

      <ExpenseItem
        expenseDate={expensesList[1].expenceDate}
        expenseTitel={expensesList[1].expenseTitel}
        expenseAmount={expensesList[1].expenseAmount}
      />

      <ExpenseItem
        expenseDate={expensesList[2].expenceDate}
        expenseTitel={expensesList[2].expenseTitel}
        expenseAmount={expensesList[2].expenseAmount}
      />

      <ExpenseItem
        expenseDate={expensesList[3].expenceDate}
        expenseTitel={expensesList[3].expenseTitel}
        expenseAmount={expensesList[3].expenseAmount}
      />

      <ExpenseItem
        expenseDate={expensesList[4].expenceDate}
        expenseTitel={expensesList[4].expenseTitel}
        expenseAmount={expensesList[4].expenseAmount}
      /> */}.

      <NewExpense onAddExpense={addExpenseHandler} />

      <Expense expensesList={expenses} />


    </div>
  );
}

export default App;
