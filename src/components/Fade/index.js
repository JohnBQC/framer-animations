import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const fadeVariants = {
  open: { opacity: 1 },
  close: { opacity: 0 },
};

export const Fade = ({ isActive, children }) => (
  <AnimatePresence>
    {isActive && (
      <motion.div
        variants={fadeVariants}
        animate="open"
        exit="close"
        initial="close"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export default Fade;
