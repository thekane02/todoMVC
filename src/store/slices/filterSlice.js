import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "filterByStatus";

const loadFilterFromLocalStorage = () => {
  const storedFilter = localStorage.getItem(STORAGE_KEY);
  return storedFilter ? JSON.parse(storedFilter) : "All";
};

const saveFilterToLocalStorage = (type) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(type));
};

const initialState = loadFilterFromLocalStorage();

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action) {
      saveFilterToLocalStorage(action.payload);
      state = action.payload;
      return state;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
