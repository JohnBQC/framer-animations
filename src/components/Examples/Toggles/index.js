import React, { useState } from "react";
import Accordion from "../../Accordion";
import Modal from "../../Modal";

export const Toggles = () => {
  const [modal, setModal] = useState(false);
  const [vAccordion, setVAccordion] = useState(false);
  const [hAccordion, setHAccordion] = useState(false);
  return (
    <>
      <Modal open={modal} setOpen={setModal}>
        <div className="modal">Hey this is a modal!</div>
      </Modal>
      <div className="flex">
        <button onClick={() => setModal(!modal)}>Toggle Modal</button>
        <button onClick={() => setVAccordion(!vAccordion)}>
          Toggle Accordion
        </button>
        <button onClick={() => setHAccordion(!hAccordion)}>
          Toggle H Accordion
        </button>
      </div>
      <Accordion
        open={vAccordion}
        setOpen={setVAccordion}
        title="Vertical Accordion"
      />
      <Accordion
        direction="horizontal"
        open={hAccordion}
        setOpen={setHAccordion}
        title="Horizontal Accordion"
      />
    </>
  );
};

export default Toggles;
