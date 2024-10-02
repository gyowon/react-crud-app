import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = ({
  initialExpenses,
  handleDelete,
  handleEdit,
  clearItems,
}) => {
  return (
    <>
      <ul className="list">
        {initialExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {initialExpenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          목록 지우기
        </button>
      )}
    </>
  );
};

export default ExpenseList;
