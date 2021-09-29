import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import AddNewExpenses from "./AddExpenses";

const NewExpense = (props) => {
  const [newExpenses, setNewExpenses] = useState(false);

  const saveExpenseDataHanlder = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const addNewExpenseHandler = (clicked) =>{
      setNewExpenses(newExpenses || clicked)
  }

  const cancelExpenseHandler = () => {
      setNewExpenses(false)
  }

  let addNew = <AddNewExpenses onAddNewExpense={addNewExpenseHandler} ></AddNewExpenses>;

  if (newExpenses) {
    addNew = <ExpenseForm onSaveExpenseData={saveExpenseDataHanlder} onCancleExpense={cancelExpenseHandler}  />;
  }

  return <div className="new-expense">{addNew}</div>;
};

export default NewExpense;
