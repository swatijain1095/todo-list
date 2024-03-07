import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <ul className="todo-list">
      {todoList.map((todoItem) => (
        <TodoItem title={todoItem.title} />
      ))}
    </ul>
  );
};

export default TodoList;
// todoList.map((todoItem) => {return <TodoItem title={todoItem.title} />>})
