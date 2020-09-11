import React from "react";
import { motion } from "framer-motion";

export const AccordionHeader = ({
  direction = "vertical",
  open,
  setOpen,
  title,
}) => {
  return (
    <h3
      className="accordion-title"
      role="button"
      onClick={() => setOpen(!open)}
    >
      <span>{title}</span>
      <svg
        width="24"
        height="36"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          animate={
            direction === "vertical"
              ? { rotate: open ? 90 : 0 }
              : { rotate: open ? 0 : 180 }
          }
          d="M0 18.031V5.96891C0 5.13369 1.34644 4.71542 2.13387 5.306L10.1753 11.337C10.6634 11.7031 10.6634 12.2968 10.1753 12.6628L2.13387 18.6939C1.34644 19.2845 0 18.8662 0 18.031Z"
          fill="black"
        />
      </svg>
    </h3>
  );
};

export default AccordionHeader;
