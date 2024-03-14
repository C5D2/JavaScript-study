/* eslint-disable  */
import React, { useState, useEffect } from "react";

import "./expenseform.css";
import { MdSend } from "react-icons/md";

// 예외 처리할 것
// 리스트 아이템 없을 경우 처리하기
// 토스트로 경고 처리하기

export default function ExpenseForm({ name, amount, handleChange, handleAdd }) {
  return (
    <form>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="name">지출항목</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            placeholder="예)렌트비"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">비용</label>

          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={amount}
            placeholder="예)100"
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="button" className="btn" onClick={handleAdd}>
        제출 <MdSend className="btn-icon" />
      </button>
    </form>
  );
}
