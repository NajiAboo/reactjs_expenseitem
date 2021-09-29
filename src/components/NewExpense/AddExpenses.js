import React from "react";

const AddExpenses = (props) => {

    const submitHandler = () =>{
        props.onAddNewExpense(true)
    }

  return (
    <form onSubmit={submitHandler}>
      <button type="submit">Add New Expenses</button>
    </form>
  );
};

export default AddExpenses;
