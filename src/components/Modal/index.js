import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "../Hamburger";
import { useOnClickOutside } from "../../hooks";

const Modal = ({ children, setOpen, open }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => setOpen(false));
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={ref}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate3d(-50%,-50%,0)",
              zIndex: 10,
            }}
          >
            <motion.div initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: 40 }}>
              <button className="drawer--close" onClick={() => setOpen(false)}>
                <Hamburger />
              </button>
              {children}
            </motion.div>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} className="overlay" />
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
