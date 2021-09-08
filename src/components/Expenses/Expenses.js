import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import '../UI/Card';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";

function Expenses(props) {

  const [selectedYear, setSelectedYear] = useState('2022');


  const addFilterExpenseHandler = expenseYear => {
    
    setSelectedYear(expenseYear);
    console.log(selectedYear);
  }

  const filteredExpenses = props.expenses.filter((expense)=>{
    console.log(expense.date.getFullYear().toString() === selectedYear);
    return expense.date.getFullYear().toString() === selectedYear;
  });
    
  return (
   <div>
    <Card className='expenses'>
       <ExpensesFilter selected={selectedYear} onChangeFilter={addFilterExpenseHandler}></ExpensesFilter>

       {filteredExpenses.map((expense)=> (<ExpenseItem
       key = {expense.id}
       title={expense.title}
       amount={expense.amount}
       date={expense.date}
      
      />
      ))}

      {/* {props.expenses.map((expense)=> (<ExpenseItem
       key = {expense.id}
       title={expense.title}
       amount={expense.amount}
       date={expense.date}
      
      />
      ))} */}
      
      {/* <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpenseItem> */}
    </Card>
    </div>
  );
}

export default Expenses;



// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState('2020');

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   const filteredExpenses = props.expenses.filter(expense => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });

//   return (
//     <div>
//       <Card className='expenses'>
//         <ExpensesFilter
//           selected={filteredYear}
//           onChangeFilter={filterChangeHandler}
//         />
//         {filteredExpenses.map((expense) => (
//           <ExpenseItem
//             key={expense.id}
//             title={expense.title}
//             amount={expense.amount}
//             date={expense.date}
//           />
//         ))}
//       </Card>
//     </div>
//   );
// };

// export default Expenses;