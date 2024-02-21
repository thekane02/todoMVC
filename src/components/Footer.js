// Footer.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter, clearCompleted } from "../store/slices/todosSlice";
import { setFilter } from "../store/slices/filterSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const activeButton = useSelector((state) => state.todos.status);
  const numOfTodosLeft = useSelector(
    (state) => state.todos.listTodos.filter((todo) => !todo.isCompleted).length
  );
  const numOfTodos = useSelector((state) => state.todos.listTodos.length);

  const handleStatusFilter = (status) => {
    dispatch(setStatusFilter(status));
    // Use setFilter to update the filter status in the filterSlice
    dispatch(setFilter(status));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  if (numOfTodos === 0) {
    return null;
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{numOfTodosLeft}</strong>
        <span> </span>
        <span>{numOfTodosLeft > 1 ? "items" : "item"}</span>
        <span> left</span>
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={`${activeButton === "ALL" ? "selected" : ""}`}
            onClick={() => handleStatusFilter("ALL")}
          >
            All
          </a>
        </li>
        <span></span>
        <li>
          <a
            href="#/active"
            className={`${activeButton === "ACTIVE" ? "selected" : ""}`}
            onClick={() => handleStatusFilter("ACTIVE")}
          >
            Active
          </a>
        </li>
        <span></span>
        <li>
          <a
            href="#/completed"
            className={`${activeButton === "COMPLETED" ? "selected" : ""}`}
            onClick={() => handleStatusFilter("COMPLETED")}
          >
            Completed
          </a>
        </li>
      </ul>
      {numOfTodosLeft < numOfTodos && (
        <button className="clear-completed" onClick={handleClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default Footer;
