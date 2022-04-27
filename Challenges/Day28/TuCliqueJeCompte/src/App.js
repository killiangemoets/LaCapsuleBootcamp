import React, { useState } from "react";
import "./App.css";
import CounterButton from "./CounterButton";
import CounterDisplay from "./CounterDisplay";

import count from "./count.reducer";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const store = createStore(combineReducers({ count }));

function App() {
  return (
    <Provider store={store}>
      <div className="frame">
        <CounterDisplay />
        <CounterButton />
      </div>
    </Provider>
  );
}

export default App;
