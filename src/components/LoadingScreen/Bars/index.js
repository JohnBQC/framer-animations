import React from "react";
import { motion } from "framer-motion";

export const Bars = () => {
  return (
    <>
      <motion.div
        animate={{ x: 100 }}
        initial={{ x: -100 }}
        transition={{
          flip: Infinity,
          duration: 1,
        }}
        style={{
          width: 100,
          height: 6,
          background: "var(--primaryBar)",
        }}
      />
      <motion.div
        animate={{ x: 180, y: -5 }}
        initial={{ x: -180, y: -5 }}
        transition={{
          flip: Infinity,
          duration: 1.2,
        }}
        style={{ width: 20, height: 8, background: "var(--danger)" }}
      />
      <motion.div
        animate={{ x: 100, y: -5 }}
        initial={{ x: -100, y: -5 }}
        transition={{
          flip: Infinity,
          duration: 1.6,
        }}
        style={{ width: 200, height: 4, background: "var(--yellow)" }}
      />
    </>
  );
};

export default Bars;
