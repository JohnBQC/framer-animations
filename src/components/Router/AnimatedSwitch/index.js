import React from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, useLocation } from "react-router-dom";

export const AnimatedSwitch = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch key={location.pathname} location={location}>
        {children}
      </Switch>
    </AnimatePresence>
  );
};

export default AnimatedSwitch;
