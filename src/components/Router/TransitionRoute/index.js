import React from "react";
import { motion } from "framer-motion";
import { Route } from "react-router-dom";

export const TransitionRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest}>
      <motion.div
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </Route>
  );
};

export default TransitionRoute;
