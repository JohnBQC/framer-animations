import React from "react";
import { motion } from "framer-motion";
import Hamburger from "../../../Hamburger";
import { useComponentLogic } from "./hooks";

const Drawer = ({ children }) => {
  const { closeDrawer, isActive, onDragEnd } = useComponentLogic();

  return (
    <>
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        className="drawer-wrapper"
        onDragEnd={onDragEnd}
        style={{ pointerEvents: isActive ? "all" : "none" }}
      >
        <motion.div
          animate={{ opacity: 1, y: isActive ? 0 : "80vh" }}
          initial={{ opacity: 1, y: "80vh" }}
          style={{ pointerEvents: "all" }}
          transition={{ damping: 20, type: "spring" }}
        >
          <div className="drawer">
            <button className="drawer--close" onClick={closeDrawer}>
              <Hamburger open={!isActive} />
            </button>
            {children}
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        animate={{ opacity: isActive ? 1 : 0 }}
        className="drawer--background"
        onClick={closeDrawer}
        style={{ pointerEvents: isActive ? "all" : "none" }}
      />
    </>
  );
};

export default Drawer;
