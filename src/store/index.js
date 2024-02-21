import { configureStore } from "@reduxjs/toolkit";
// import reducers from "./reducers";
import todoReducers from "./slices/todosSlice";
import filterSlice from "./slices/filterSlice";

export default configureStore({
  reducer: {
    todos: todoReducers,
    filter: filterSlice,
  },
});
