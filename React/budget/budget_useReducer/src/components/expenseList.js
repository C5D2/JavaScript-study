import React from "react";
import "./expenseList.css";

import { MdDelete } from "react-icons/md";
import ExpenseItem from "./expenseItem";

export default function ExpenseList({ itemList, deleteItem, deleteAllItem }) {
  return (
    <div>
      <ul className="list">
        <ExpenseItem itemList={itemList} deleteItem={deleteItem} />
      </ul>
      <button className="btn" onClick={() => deleteAllItem()}>
        목록 지우기 <MdDelete className="btn-icon" />
      </button>
    </div>
  );
}
