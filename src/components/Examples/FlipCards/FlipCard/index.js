import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const handleDirection = (direction, back = 1) => {
  switch (direction) {
    case "vertical":
      return { rotateX: [0, 180 * back] };

    case "horizontal":
    default:
      return { rotateY: [0, 180 * back] };
  }
};

const DefaultFront = () => <div>Front</div>;
const DefaultBack = () => <div>Back</div>;

export const FlipCard = ({
  Back = DefaultBack,
  direction = "horizontal",
  Front = DefaultFront,
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div className="flip-card">
      <AnimatePresence exitBeforeEnter>
        {flipped ? (
          <motion.div
            exit={handleDirection(direction, -1)}
            className="card back"
            onClick={() => setFlipped(!flipped)}
            style={{ background: "var(--green)" }}
            key="back"
          >
            <motion.div exit={{ opacity: 0 }}>
              <Back />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            exit={handleDirection(direction)}
            className="card front"
            onClick={() => setFlipped(!flipped)}
            style={{ background: "var(--appGreen)" }}
            key="front"
          >
            <motion.div exit={{ opacity: 0 }}>
              <Front />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FlipCard;
