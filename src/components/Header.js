import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/todosSlice";

const Header = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        id: new Date().valueOf(),
        text,
        isCompleted: false,
      })
    );

    setText("");
  };

  const inputRef = useRef(null);

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmitForm} action="">
        <input
          ref={inputRef}
          className="new-todo"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Header;
