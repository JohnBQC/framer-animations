import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../Logo";
import Bars from "./Bars";

export const LoadingScreen = ({ loading }) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div layoutId="header" className="loading">
          <Logo />
          <motion.div exit={{ opacity: 0 }}>
            <p style={{ color: "var(--appGreen)" }}>Is loading...</p>
            <Bars />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
