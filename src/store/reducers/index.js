import { combineReducers } from "redux";
import todos from "../slices/todosSlice";
import filter from "../slices/filterSlice";

const reducers = combineReducers({
  todos,
  filter,
});

export default reducers;
