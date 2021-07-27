import './ExpenseForm.css';
import React, {useState} from 'react';

const ExpenseForm = () =>{

    //creating different state for each properties
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const onTextChangeHandler = (event) => {

        setEnteredTitle(event.target.value);
    }

    const onAmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const onDateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }


   /* 
    //using object for multiple state properties
    const [userInput, setUserInput] = useState({
        enteredTitle : '',
        enteredAmount : '',
        enteredDate : ''

    });

    const onTextChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        //  } )

        //better approach is to use function 
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value}
        });
    };

    const onAmountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
         } )
    }

    const onDateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
         } )
    }*/

    const onFormSubmit = (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }


    return(
        
            <form onSubmit={onFormSubmit}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={onTextChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={onAmountChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type="date" min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={onDateChangeHandler}/>
                    </div> 
                </div>
                <div className='new-expense__actions'>
                        <button type="submit">Add Expense</button>
                 </div>
            </form>
        
       
    );

}

export default ExpenseForm;