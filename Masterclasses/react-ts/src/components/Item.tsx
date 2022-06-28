import React, { FC } from "react";
// FC = Functional Component, c'est un type qui est déjà créé par React et qu'on peut utiliser.

interface Props {
  /** Objet qui représente une tâche. */
  item: Todo;
  /** Fonction pour modifier le tableau original */
  toggle: Toggle;
}

/** Item dans une todo-list */
const Item: FC<Props> = ({ item, toggle }) => {
  return (
    <div>
      <h4>{item.text}</h4>
      <h6 style={{ cursor: "pointer" }} onClick={() => toggle(item)}>
        {item.done ? "Done" : "Not done"}
      </h6>
    </div>
  );
};
// function Item() {
//   return (
//     <div className="App">
//       <div></div>
//     </div>
//   );
// }

export default Item;
