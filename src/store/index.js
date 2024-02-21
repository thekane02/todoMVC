import { configureStore } from "@reduxjs/toolkit";
// import reducers from "./reducers";
import todoReducers from "./slices/todosSlice";

export default configureStore({
  reducer: {
    todos: todoReducers,
  },
});
