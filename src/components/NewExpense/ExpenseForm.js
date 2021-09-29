import React, {useState} from 'react';
import './ExpenseForm.css';
 
const ExpenseForm = (props) =>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, seEnteredAmount] = useState('');
    const [enteredDate, setEnteredSDate] = useState('');

    const titleCangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    }

    const amountChangeHanlder =(event) =>{
        seEnteredAmount( event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredSDate(event.target.value);
    
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData ={
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        };

        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        
        setEnteredTitle('');
        seEnteredAmount('');
        setEnteredSDate('');

    }

    const cancelClickHandler = () =>{
        props.onCancleExpense()
    }

    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleCangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number'value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHanlder}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' value={enteredDate}  min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        
       <div className="flex-container">
       <div >
            <button type='button' onClick={cancelClickHandler} >Cancel</button>
        </div>
        <div  >
            <button type='submit'>Add Expense</button>
        </div>
        
        </div>
    </form>
    );
};

export default ExpenseForm;