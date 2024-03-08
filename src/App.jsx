import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import "./styles.css";

// When user checks any item then trxt should be strikedthrough
// When there are no item in the list then show' you have completed all the items'
// There should be an add button to add items in the list.
export default function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "Todo 1",
      completed: false,
    },
    {
      id: 2,
      title: "Todo 2",
      completed: false,
    },
    {
      id: 3,
      title: "Todo 3",
      completed: false,
    },
  ]);

  // const todoList = [
  // {
  //   id: 1,
  //   title: "Todo 1",
  //   completed: false
  // },
  // {
  //   id: 2,
  //   title: "Todo 2",
  //   completed: false
  // },
  // {
  //   id: 3,
  //   title: "Todo 3",
  //   completed: false
  // }
  // ];

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}
