import React from "react";
import { motion, AnimatePresence } from "framer-motion";
export const Hamburger = ({ open = false }) => {
  return (
    <>
      <motion.div
        className="line"
        style={{
          rotate: `${open ? 0 : 45}deg`,
          x: 0,
          y: open ? "0.35rem" : "-50%",
        }}
      />
      <AnimatePresence>
        {open && (
          <motion.div
            className="line"
            exit={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          />
        )}
      </AnimatePresence>
      <motion.div
        className="line"
        style={{
          rotate: `${open ? 0 : -45}deg`,
          x: 0,
          y: open ? "-0.35rem" : "-50%",
        }}
      />
    </>
  );
};

export default Hamburger;
