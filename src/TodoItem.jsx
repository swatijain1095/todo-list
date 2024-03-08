import React, { useState } from "react";

const TodoItem = ({
  title,
  id,
  completed,
  handleSelect,
  handleDelete,
  handleEdit: handleEditProp,
}) => {
  const [inEditMode, setInEditMode] = useState(false);
  const [inputVal, setInputVal] = useState(title);

  const handleEdit = (e) => {
    e.preventDefault();
    setInEditMode(true);
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    setInputVal(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProp(id, inputVal);
    setInEditMode(false);
  };

  return (
    <li className="todo-item">
      <form>
        <div>
          <input
            type="checkbox"
            onChange={(e) => {
              handleSelect(id, e.target.checked);
            }}
          />
          {inEditMode ? (
            // You will have to handle onChange event
            <input value={inputVal} onChange={handleInputChange} />
          ) : (
            <p className="title">{title}</p>
          )}
        </div>
        <div>
          {inEditMode ? (
            <button
              type="submit"
              className="btn btn--submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          ) : (
            <button className="btn btn--edit" onClick={handleEdit}>
              Edit
            </button>
          )}
          <button className="btn btn--delete" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </div>
      </form>
    </li>
  );
};

export default TodoItem;
