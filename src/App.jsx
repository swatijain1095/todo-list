import { useState } from "react";
import TodoList from "./TodoList";
import "./styles.css";

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

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}
