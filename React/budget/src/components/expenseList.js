import React from "react";
import "./expenseList.css";

import { MdDelete } from "react-icons/md";
import ExpenseItem from "./expenseItem";

export default function ExpenseList({ expenses }) {
  return (
    <div key={expenses.id}>
      <ul className="list">
        <ExpenseItem expenses={expenses} />
      </ul>
      <button className="btn">
        목록 지우기 <MdDelete className="btn-icon" />
      </button>
    </div>
  );
}
