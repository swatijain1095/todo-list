import React from "react";

const TodoItem = ({ title, id, completed, handleSelect }) => {
  return (
    <li className="todo-item">
      <div>
        <div>
          <input
            type="checkbox"
            onChange={(e) => {
              handleSelect(id, e.target.checked);
            }}
          />
          <p className="title">{title}</p>
        </div>
        <div>
          <button className="btn btn--edit">Edit</button>
          <button className="btn btn--delete">Delete</button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
