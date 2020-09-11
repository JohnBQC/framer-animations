import React from "react";
import DragItem from "./DragItem";
import { usePositionReorder } from "../../../hooks";

const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export const DragAndDrop = () => {
  const [order, updatePosition, updateOrder] = usePositionReorder(posts);
  return (
    <>
      <h3>Drag And Drop List</h3>
      {order.map((post, index) => (
        <DragItem
          key={post}
          index={index}
          post={post}
          updateOrder={updateOrder}
          updatePosition={updatePosition}
        />
      ))}
    </>
  );
};

export default DragAndDrop;
