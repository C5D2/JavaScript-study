import { useReducer, useState } from "react";
import "./App.css";
import Expenseform from "./components/expenseform";
import ExpenseList from "./components/expenseList";
import ExpenseItem from "./components/expenseItem";
import Toast from "./components/toast";

function App() {
  const defaultItemList = [
    { id: 1, name: "렌트비", amount: 160000 },
    { id: 2, name: "교통비", amount: 400 },
    { id: 3, name: "식비", amount: 1200 },
  ];

  const [nextId, setNextId] = useState(defaultItemList.length + 1);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [toast, setToast] = useState(false);
  const [message, setMessage] = useState("");

  const expenseReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          itemList: [...state.itemList, action.item],
        };
      case "DELETE":
        return {
          ...state,
          itemList: state.itemList.filter((item) => item.id !== action.id),
        };
      case "DELETEALL":
        return {
          ...state,
          itemList: [],
        };
      default:
        return state;
    }
  };

  const [itemList, itemListDispatch] = useReducer(
    expenseReducer,
    defaultItemList
  );

  function addItem(item) {
    itemListDispatch({ type: "ADD", item: { ...item, id: nextId } });
    setNextId(nextId + 1);
  }

  function deleteItem(item) {
    itemListDispatch({ type: "DELETE", id: item.id });
  }

  function deleteAllItem() {
    itemListDispatch({ type: "DELETEALL" });
    setToast(true);
    setMessage("모든 목록이 삭제되었습니다.");
  }

  const handleAdd = () => {
    const item = { name, amount };
    if (item.name.trim() === "") {
      return setToast(true), setMessage("지출 항목을 입력해주세요.");
    } else if (item.amount === "") {
      return setToast(true), setMessage("값을 입력해주세요.");
    }
    addItem(item);
    setName("");
    setAmount("");
  };

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "amount") {
      setAmount(e.target.valueAsNumber);
    }
  };

  const totalAmount = itemList.reduce((sum, item) => sum + item.amount, 0);

  return (
    <main className="main-container">
      <h1>내 소비목록 </h1>
      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <Expenseform
          name={name}
          amount={amount}
          itemList={itemList}
          handleChange={handleChange}
          handleAdd={handleAdd}
        />
        {toast && <Toast setToast={setToast} text={message} position="top" />}
      </div>
      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseList
          ExpenseItem={ExpenseItem}
          itemList={itemList}
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
