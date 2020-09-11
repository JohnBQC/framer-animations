import React from "react";
import Slide from "../Slide";
import { useComponentLogic } from "./hooks";

export const Menu = ({ children, close, open }) => {
  const { ref } = useComponentLogic(close);
  return (
    <Slide isActive={open} distance={200} retract>
      <div ref={ref} className="menu">
        <ul>{children}</ul>
      </div>
    </Slide>
  );
};

export default Menu;
