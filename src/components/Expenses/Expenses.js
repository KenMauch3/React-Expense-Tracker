import React from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expenseItem, i) => {
        return (
          <ExpenseItem
            title={expenseItem.title}
            amount={expenseItem.amount}
            date={expenseItem.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;