import { useState } from "react";
import "./App.css";
import Expenseform from "./components/expenseform";
import ExpenseList from "./components/expenseList";
import ExpenseItem from "./components/expenseItem";
import Toast from "./components/toast";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: "렌트비", amount: 160000 },
    { id: 2, name: "교통비", amount: 400 },
    { id: 3, name: "식비", amount: 1200 },
  ]);

  const [toast, setToast] = useState(false);
  const [message, setMessage] = useState("");

  function addItem(item) {
    setExpenses([...expenses, item]);
  }

  function deleteItem(id) {
    const newExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(newExpenses);
  }

  function deleteAllItem() {
    setExpenses([]);
    setToast(true);
    setMessage("모든 목록이 삭제되었습니다.");
  }

  const totalAmount = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <main className="main-container">
      <h1>내 소비목록 </h1>
      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        {toast && <Toast setToast={setToast} text={message} position="top" />}
        <Expenseform
          expenses={expenses}
          setExpenses={setExpenses}
          addItem={addItem}
          setToast={setToast}
          setMessage={setMessage}
        />
      </div>
      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseList
          expenses={expenses}
          ExpenseItem={ExpenseItem}
          addItem={addItem}
          deleteAllItem={deleteAllItem}
          deleteItem={deleteItem}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}
      >
        <p style={{ fontSize: "1rem" }}>
          총지출 :<span style={{ fontSize: "1.5rem" }}>{totalAmount}원</span>
        </p>
      </div>
    </main>
  );
}

export default App;
