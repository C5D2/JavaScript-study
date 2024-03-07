import React from "react";
import "./expenseList.css";

import { MdDelete } from "react-icons/md";
import ExpenseItem from "./expenseItem";

export default function ExpenseList({ expenses, deleteItem, deleteAllItem }) {
  return (
    <div key={expenses.id}>
      <ul className="list">
        <ExpenseItem expenses={expenses} deleteItem={deleteItem} />
      </ul>
      <button className="btn" onClick={() => deleteAllItem()}>
        목록 지우기 <MdDelete className="btn-icon" />
      </button>
    </div>
  );
}
