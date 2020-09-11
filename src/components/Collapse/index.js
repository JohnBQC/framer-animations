import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const collapseVariants = {
  open: (direction) => ({ opacity: 1, ...handleDirection(direction) }),
  closed: (direction) => ({ opacity: 0, ...handleDirection(direction, true) }),
};

const handleDirection = (direction, closed = false) => {
  switch (direction) {
    case "horizontal":
      return { width: closed ? 0 : "auto" };

    case "vertical":
    default:
      return { height: closed ? 0 : "auto" };
  }
};

export const Collapse = ({ isActive, children, direction }) => (
  <AnimatePresence>
    {isActive && (
      <motion.div
        variants={collapseVariants}
        custom={direction}
        style={{ overflow: "hidden" }}
        transition={{ duration: 0.2 }}
        initial="closed"
        animate="open"
        exit="closed"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export default Collapse;
