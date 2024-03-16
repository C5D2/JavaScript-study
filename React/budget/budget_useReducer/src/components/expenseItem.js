import React from "react";
import { LiaEdit } from "react-icons/lia";
import { MdDeleteForever } from "react-icons/md";
import "./expenseitem.css";

export default function ExpenseItem({ itemList, deleteItem }) {
  return (
    <>
      {itemList.map((item) => (
        <li key={item.id} className="item">
          <div className="info">
            <span className="amount">{item.name}</span>
            <span className="expense">{item.amount}</span>
          </div>
          <div>
            <button className="edit-btn">
              {/* edit-icons */}
              <LiaEdit />
            </button>
            <button className="clear-btn" onClick={() => deleteItem(item.id)}>
              {/* delete-icons */}
              <MdDeleteForever />
            </button>
          </div>
        </li>
      ))}
    </>
  );
}
