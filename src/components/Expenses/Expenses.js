import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const changeFilterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <li>
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selectedYear={filterYear}
            onChangeFilter={changeFilterHandler}
          />
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpensesList items={filteredExpenses}></ExpensesList>
        </Card>
      </div>
    </li>
  );
};

export default Expenses;
