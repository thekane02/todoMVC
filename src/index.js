import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const RootApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<RootApp />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
