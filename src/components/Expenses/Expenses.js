import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import '../UI/Card';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {

  const [selectedYear, setSelectedYear] = useState('2021');


  const addFilterExpenseHandler = expenseYear => {
    
    setSelectedYear(expenseYear);
    console.log(expenseYear);
  }

  const filteredExpenses = props.expenses.filter((expense)=>{
    console.log(expense.date.getFullYear().toString() === selectedYear);
    return expense.date.getFullYear().toString() === selectedYear;
  });

  let expensesContent = filteredExpenses.length === 0 && <p>No data found</p>

  if(filteredExpenses.length > 0){
    expensesContent =   filteredExpenses.map((expense)=> (<ExpenseItem
      key = {expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
     
     />
     )) };
    
  return (
   <div>
    <Card className='expenses'>
       <ExpensesFilter selected={selectedYear} onChangeFilter={addFilterExpenseHandler}></ExpensesFilter>

       {/* {expensesContent} */}
       <ExpensesList items = {filteredExpenses}/>


       {/* rendering conditional using 
           && - 2nd way
           using ternary operator - 1st way
           using if outside - 3rd way - use this and 4th way
           using new file as a component*/}

       {/* {filteredExpenses.length === 0 && <p>No data found</p>}
       {filteredExpenses.length > 0 && filteredExpenses.map((expense)=> (<ExpenseItem
      key = {expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
     
     />
     )) } */}

       {/* {filteredExpenses.map((expense)=> (<ExpenseItem
       key = {expense.id}
       title={expense.title}
       amount={expense.amount}
       date={expense.date}
      
      />
      ))} */}

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


