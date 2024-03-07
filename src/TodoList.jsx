import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, setTodoList }) => {
  const handleSelect = (id, completed) => {
    // create a copy of todolist
    const todoListCopy = [...todoList];
    // find index matching item with the id
    const index = todoListCopy.findIndex((item) => item.id === id);
    // update completed property of the item
    todoListCopy[index].completed = completed;
    // add copied list to setter fn
    setTodoList(todoListCopy);
  };

  return (
    <ul className="todo-list">
      {todoList.map((todoItem) => (
        <TodoItem handleSelect={handleSelect} {...todoItem} />
      ))}
    </ul>
  );
};

export default TodoList;
