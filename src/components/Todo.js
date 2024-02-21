import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  markCompleted,
  removeTodo,
  setEditingTodo,
  editTodo,
} from "../store/slices/todosSlice";

const Todo = ({ todo, index, filterType }) => {
  const dispatch = useDispatch();
  const todoEditingId = useSelector((state) => state.todos.todoEditingId);

  const handleMarkCompleted = () => {
    dispatch(markCompleted({ id: todo.id }));
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodo({ id: todo.id }));
  };

  const isEditing = todoEditingId === todo.id;
  const [text, setText] = useState(todo.text);
  const onEditTodo = () => {
    dispatch(editTodo({ id: todo.id, text }));
    dispatch(setEditingTodo(null));
  };

  const checkboxRef = useRef(null);

  return (
    <li
      className={`${isEditing ? "editing" : ""} ${
        todo.isCompleted ? "completed" : ""
      }`}
    >
      {!isEditing ? (
        <div className="view">
          <input
            ref={checkboxRef}
            className="toggle"
            type="checkbox"
            checked={todo.isCompleted}
            onChange={handleMarkCompleted}
          />
          <label onDoubleClick={() => dispatch(setEditingTodo(todo.id))}>
            {todo.text}
          </label>
          {todo ? (
            <button className="destroy" onClick={handleRemoveTodo} />
          ) : null}
        </div>
      ) : (
        <input
          className="edit"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={onEditTodo}
          onKeyPress={(e) => {
            if (e.key === "Enter" && text) {
              onEditTodo();
            }
          }}
        />
      )}
    </li>
  );
};

export default Todo;
