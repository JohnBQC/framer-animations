import React from "react";
import { AnimatePresence, motion } from "framer-motion";

/* 
So will need to ternary for x and y based on direction prop
*/

const handleDirection = (direction, inputDistance, exit = 1) => {
  let x = 0;
  let y = 0;
  const distance = inputDistance * exit;
  switch (direction) {
    case "right":
      x = distance;
      break;
    case "left":
      x = distance * -1;
      break;
    case "up":
      y = distance;
      break;
    case "down":
      y = distance * -1;
      break;
    default:
      break;
  }
  return { x, y };
};

const slideVariants = {
  enter: ({ distance, direction }) => ({
    opacity: 0,
    ...handleDirection(direction, distance),
  }),
  animate: { opacity: 1, x: 0, y: 0 },
  exit: ({ distance, direction, retract }) => ({
    opacity: 0,
    ...handleDirection(direction, distance, retract ? 1 : -1),
  }),
};

export const Slide = ({
  isActive,
  children,
  distance = 200,
  direction = "down",
  retract = false,
}) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          animate="animate"
          custom={{ distance, direction, retract }}
          exit="exit"
          initial="enter"
          variants={slideVariants}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Slide;
