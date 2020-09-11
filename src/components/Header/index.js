import React, { useState } from "react";
import { motion } from "framer-motion";
import { useHistory, Link } from "react-router-dom";
import Logo from "../Logo";
import Menu from "../Menu";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  return (
    <motion.header layoutId="header">
      <Logo />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <button onClick={() => setOpen(!open)}>Examples</button>
        <Menu close={() => setOpen(false)} open={open}>
          <li>
            <button
              onClick={() => {
                setOpen(false);
                history.push("/drag-and-drop");
              }}
            >
              Drag And Drop
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setOpen(false);
                history.push("/flip-card");
              }}
            >
              Flip Card
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setOpen(false);
                history.push("/drawer");
              }}
            >
              Draggable Drawer
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setOpen(false);
                history.push("/toggles");
              }}
            >
              Toggles
            </button>
          </li>
          {/* <Link to="/about">
            About
          </Link>
          <Link to="/contact">
            Contact
          </Link> */}
        </Menu>
      </nav>
    </motion.header>
  );
};

export default Header;
