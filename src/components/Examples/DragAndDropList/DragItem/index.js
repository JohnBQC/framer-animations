import React from "react";
import { motion } from "framer-motion";
import { useComponentLogic } from "./hooks";
const onTop = { cursor: "grabbing", scale: 1.05, zIndex: 1 };
const flat = {
  cursor: "grab",
  scale: 1,
  zIndex: 0,
};
export const DragItem = ({ index, post, updateOrder, updatePosition }) => {
  const {
    isDragging,
    onDragEnd,
    onDragStart,
    onViewportBoxUpdate,
    ref,
    y,
  } = useComponentLogic({ index, updateOrder, updatePosition });
  return (
    <div>
      <motion.div
        animate={isDragging ? onTop : flat}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={1}
        key={post}
        layout
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}
        onViewportBoxUpdate={onViewportBoxUpdate}
        ref={ref}
      >
        Handle
      </motion.div>
      <motion.div
        animate={isDragging ? onTop : { ...flat, cursor: "default" }}
        className="card"
        style={{ y }}
      >
        <h4>List Item {post}</h4>
        <p>this is the inside of the card</p>
      </motion.div>
    </div>
  );
};

export default DragItem;
