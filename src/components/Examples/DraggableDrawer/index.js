import React from "react";
import Drawer from "./Drawer";

export const DraggableDrawer = () => {
  return (
    <>
      <h3>Draggable Drawer</h3>
      <Drawer>
        <h1>I'm in the Drawer!</h1>
        <p>Hey there!</p>
      </Drawer>
    </>
  );
};

export default DraggableDrawer;
