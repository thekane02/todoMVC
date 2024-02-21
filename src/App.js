import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import { useSelector } from "react-redux";
import "./css/Todo.css";

const STORAGE_KEY = "todoList";

const filterByStatus = (listTodos = [], status = '', id) => {
  switch (status) {
    case 'ACTIVE':
      return listTodos.filter(item => !item.isCompleted)
    case 'COMPLETED':
      return listTodos.filter(item => item.isCompleted)
    case 'REMOVE':
      return listTodos.filter(item => item.id !== id)
    default:
      return listTodos
  }
}
// const filterTodosLeft = (listTodos = []) => {
//   return listTodos.filter((item) => !item.isCompleted);
// };

const App = () => {
  const [listTodos, setListTodos] = useState([]);

  useEffect(() => {
    // Tải dữ liệu từ localStorage khi component được mount
    const storedTodos = localStorage.getItem(STORAGE_KEY);
    if (storedTodos) {
      setListTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    // Lưu dữ liệu vào localStorage khi có sự thay đổi trong state
    localStorage.setItem(STORAGE_KEY, JSON.stringify(listTodos));
  }, [listTodos]);

  return (
    <div className="todoapp">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;
