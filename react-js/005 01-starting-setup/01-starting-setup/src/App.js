import ExpenseItem from "./components/ExpenseItem";
import { Expense } from "./components/Expense";
import NewExpense from "./components/NewExpences/NewExpence";

function App() {

  const expensesList = [
    { expenceDate: new Date(2024, 2, 1), expenseTitel: "Food Expense", expenseAmount: 25021.21 },
    { expenceDate: new Date(2024, 2, 2), expenseTitel: "Car Expense", expenseAmount: 32000.23 },
    { expenceDate: new Date(2024, 2, 3), expenseTitel: "Travel Expense", expenseAmount: 12001.25 },
    { expenceDate: new Date(2024, 2, 4), expenseTitel: "Medicine Expense", expenseAmount: 54210.52 },
    { expenceDate: new Date(2024, 2, 5), expenseTitel: "Clothes Expense", expenseAmount: 45000.26 },
  ];


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

      <NewExpense />

      <Expense expensesList={expensesList} />


    </div>
  );
}

export default App;
