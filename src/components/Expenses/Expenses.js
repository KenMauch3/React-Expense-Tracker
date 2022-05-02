import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState('2020');
  const filterChangedHandler = (enteredYearFilter) => {
    console.log(enteredYearFilter);
    setYearFilter(enteredYearFilter);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterChanged={filterChangedHandler} selected={yearFilter} />
        {props.expenses.map((expenseItem, i) => {
          return (
            <ExpenseItem
              key={i}
              title={expenseItem.title}
              amount={expenseItem.amount}
              date={expenseItem.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
