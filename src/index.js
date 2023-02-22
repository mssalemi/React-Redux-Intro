import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";

// Store => Globalized State
// pass in reducer

// Action => Describe what you want to do
// Increment
// Function that returns object
// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => console.log(store.getState()));
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "SIGN_IN" });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
