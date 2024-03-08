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

  // DELETE
  const handleDelete = (id) => {
    // 1. create a copy of todolist
    const todoListCopy = todoList.filter((item) => {
      return id !== item.id;
    });
    setTodoList(todoListCopy);
    // 3. add new list to setter function.
  };
  // EDIT
  const handleEdit = (id, title) => {
    const todoListCopy = todoList.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          title,
        };
      } else {
        return item;
      }
    });
    setTodoList(todoListCopy);
  };

  return (
    <ul className="todo-list">
      {todoList.map((todoItem) => (
        <TodoItem
          handleSelect={handleSelect}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          key={todoItem.id}
          {...todoItem}
        />
      ))}
    </ul>
  );
};

export default TodoList;
