import React from "react";
import { motion } from "framer-motion";
import logo from "../../images/qapps_logo.png";
export const Logo = () => {
  return (
    <motion.img
      className="real-logo"
      layoutId="logo"
      src={logo}
      alt="Q-Apps Logo"
    />
  );
};

export default Logo;
