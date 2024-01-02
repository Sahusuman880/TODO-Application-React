import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./Todo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem1 from "./Components/TodoItem1";
import EmptyMessage from "./Components/emptyMessage";
// import TodoItem2 from "./Components/TodoItem2";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

function App() {
  // const initialTodo = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Cricket",
  //     dueDate: "5/10/2023",
  //   },
  // ];
  const [addItem, setAddItem] = useState([]);
  function addTodoItem(itemName, itemDueDate) {
    let newItem = {};
    newItem.name = itemName;
    newItem.dueDate = itemDueDate;

    let newItemArray = [...addItem, newItem];

    setAddItem(newItemArray);
  }
  function deleteItem(index) {
    let newItem = [...addItem];
    newItem.splice(index, 1);
    setAddItem(newItem);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo AddTodoItem={addTodoItem} />
      <EmptyMessage todo={addItem} />
      <div className="item-container">
        <TodoItem1 todo={addItem} deleteItem={deleteItem} />
        {/* <TodoItem2 /> */}
      </div>
    </center>
  );
}
export default App;
