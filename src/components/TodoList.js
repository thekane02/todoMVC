import React from "react";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import { checkAll } from "../store/slices/todosSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const listTodos = useSelector((state) => state.todos.listTodos);
  const filterType = useSelector((state) => state.filter);
  console.log("TodoList  filterType:", filterType);
  const isCheckedAll = useSelector((state) => state.todos.isCheckedAll);

  console.log(listTodos);
  const handleCheckAll = () => {
    dispatch(checkAll());
  };

  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
        onChange={handleCheckAll}
        checked={isCheckedAll}
      />
      <label htmlFor="toggle-all" onClick={handleCheckAll}></label>
      <ul className="todo-list">
        {listTodos.map((todo, index) => (
          <>
            {filterType === "ACTIVE" && !todo.isCompleted && (
              <Todo key={todo.id} index={index} todo={todo} />
            )}
            {filterType === "COMPLETED" && todo.isCompleted && (
              <Todo key={todo.id} index={index} todo={todo} />
            )}
            {(filterType === "ALL" || !filterType) && (
              <Todo key={todo.id} index={index} todo={todo} />
            )}
          </>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
