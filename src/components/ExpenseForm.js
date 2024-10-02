import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({
  isEditing,
  handleSubmit,
  charge,
  handleCharge,
  amount,
  handleAmount,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">지츨 항목</label>
          <input
            className="form-control"
            value={charge}
            onChange={handleCharge}
            type="text"
            id="charge"
            name="charge"
            placeholder="예) 렌트비"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">비용</label>
          <input
            className="form-control"
            value={amount}
            onChange={handleAmount}
            type="number"
            id="amount"
            name="amount"
            placeholder="예) 100"
          />
        </div>
        <button type="submit" className="btn">
          {isEditing ? "수정" : "제출"}
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
