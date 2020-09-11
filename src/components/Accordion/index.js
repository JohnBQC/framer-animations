import React from "react";
import Collapse from "../Collapse";
import AccordionHeader from "./AccordionHeader";

const Accordion = ({
  title = "Heading",
  children = stockData,
  direction = "vertical",
  open,
  setOpen,
}) => {
  return (
    <article className="accordion">
      <AccordionHeader
        direction={direction}
        open={open}
        title={title}
        setOpen={setOpen}
      />
      <Collapse direction={direction} isActive={open}>
        {children}
      </Collapse>
    </article>
  );
};

const stockData = (
  <p>
    I'm baby biodiesel etsy sustainable hexagon occupy. PBR&B literally
    sriracha, jianbing skateboard you probably haven't heard of them man braid
    affogato blog actually forage mustache irony typewriter paleo. Dreamcatcher
    pitchfork gastropub, vaporware four loko pour-over succulents single-origin
    coffee.
  </p>
);

export default Accordion;
