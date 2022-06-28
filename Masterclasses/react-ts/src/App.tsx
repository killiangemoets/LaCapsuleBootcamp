import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import List from "./components/List";
import { constants } from "buffer";

const initialItems = [
  {
    id: 1,
    text: "Waking Up",
    done: true,
  },
  {
    id: 2,
    text: "Taking a shower",
    done: true,
  },
  {
    id: 3,
    text: "Eating breakfast",
    done: false,
  },
];

function App() {
  // Mettre le <Todo[]> est optionel car il sait directement quel type d'élément contient le usestate
  const [items, setItems] = useState<Todo[]>(initialItems);

  const toggleTodo = (item: Todo) => {
    setItems((items: Todo[]) =>
      items.map((el) => ({
        ...el,
        done: el.id === item.id ? !el.done : el.done,
      }))
    );
  };

  return (
    <div className="App">
      <List items={items} toggle={toggleTodo} />
    </div>
  );
}

export default App;
