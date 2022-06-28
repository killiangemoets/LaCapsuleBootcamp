import React, { FC } from "react";
import Item from "./Item";

interface Props {
  items: Todo[];
  //   toggle: (item: Todo) => void;
  toggle: Toggle;
}

const List: FC<Props> = ({ items, toggle }) => {
  return (
    <div>
      {items.map((item) => (
        <Item item={item} key={item.id} toggle={toggle} />
      ))}
    </div>
  );
};

export default List;
