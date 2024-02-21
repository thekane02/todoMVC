import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "todoList";

const loadTodosFromLocalStorage = () => {
  const storedTodos = localStorage.getItem(STORAGE_KEY);
  return storedTodos ? JSON.parse(storedTodos) : [];
};

const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    listTodos: loadTodosFromLocalStorage(),
    isCheckedAll: false,
    status: "ALL",
    todoEditingId: "",
  }, // initialState is an object with a 'todos' array
  reducers: {
    addTodo: (state, action) => {
      const { id, text } = action.payload;
      state.listTodos.push({ id, text, isCompleted: false });
      saveTodosToLocalStorage(state.listTodos);
    },
    markCompleted: (state, action) => {
      const { id } = action.payload;
      const todoToUpdate = state.listTodos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.isCompleted = !todoToUpdate.isCompleted;
      }
      saveTodosToLocalStorage(state.listTodos);
    },
    removeTodo: (state, action) => {
      const { id } = action.payload;
      state.listTodos = state.listTodos.filter((todo) => todo.id !== id);
      saveTodosToLocalStorage(state.listTodos);
    },
    checkAll: (state) => {
      state.listTodos = state.listTodos.map((item) => ({
        ...item,
        isCompleted: !state.isCheckedAll,
      }));
      state.isCheckedAll = !state.isCheckedAll;
      saveTodosToLocalStorage(state.listTodos);
    },
    setStatusFilter: (state, action) => {
      state.activeButton = action.payload;
      saveTodosToLocalStorage(state.listTodos);
    },
    filterTodosLeft: (state) => {
      state.listTodos = state.listTodos.filter((item) => !item.isCompleted);
      saveTodosToLocalStorage(state.listTodos);
    },
    clearCompleted: (state) => {
      state.listTodos = state.listTodos.filter((todo) => !todo.isCompleted);
      saveTodosToLocalStorage(state.listTodos);
    },
    setEditingTodo: (state, action) => {
      state.todoEditingId = action.payload;
      saveTodosToLocalStorage(state.listTodos);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoToEdit = state.listTodos.find((todo) => todo.id === id);
      if (todoToEdit) {
        todoToEdit.text = text;
      }
      state.todoEditingId = null;
      saveTodosToLocalStorage(state.listTodos);
    },
    completed: (state, action) => {
      const { id } = action.payload;
      const todoToUpdate = state.listTodos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.isCompleted = !todoToUpdate.isCompleted;
      }
      saveTodosToLocalStorage(state.listTodos);
    },
    remove: (state, action) => {
      const { id } = action.payload;
      state.listTodos = state.listTodos.filter((todo) => todo.id !== id);
      saveTodosToLocalStorage(state.listTodos);
    },
  },
});

export const {
  addTodo,
  markCompleted,
  checkAll,
  removeTodo,
  setStatusFilter,
  clearCompleted,
  selectActiveButton,
  selectNumOfTodosLeft,
  selectNumOfTodos,
  setEditingTodo,
  editTodo,
  completed,
  remove,
} = todosSlice.actions;
export default todosSlice.reducer;
