import { useReducer, useState } from "react";
import "./App.css";
import Expenseform from "./components/expenseform";
import ExpenseList from "./components/expenseList";
import ExpenseItem from "./components/expenseItem";
import Toast from "./components/toast";

function App() {
  const defaultItemList = useState([
    { id: 1, name: "렌트비", amount: 160000 },
    { id: 2, name: "교통비", amount: 400 },
    { id: 3, name: "식비", amount: 1200 },
  ]);

  const [id, setId] = useState(itemList.length + 1);
  const [itemList, itemListDispatch] = useReducer(
    ExpenseReducer,
    defaultItemList
  );

  const [toast, setToast] = useState(false);
  const [message, setMessage] = useState("");

  function addItem(item) {
    setItemList([...itemList, item]);
  }

  function deleteItem(id) {
    const newItemList = itemList.filter((item) => item.id !== id);
    setItemList(newItemList);
  }

  function deleteAllItem() {
    setItemList([]);
  }

  const totalAmount = itemList.reduce((sum, item) => sum + item.amount, 0);

  return (
    <main className="main-container">
      <h1>내 소비목록 </h1>
      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <Expenseform
          itemList={itemList}
          setItemList={setItemList}
          addItem={addItem}
          toast={toast}
          setToast={setToast}
          setMessage={setMessage}
        />
        {toast && <Toast setToast={setToast} text={message} position="top" />}
      </div>
      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseList
          itemList={itemList}
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
