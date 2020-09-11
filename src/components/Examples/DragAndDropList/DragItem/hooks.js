import { useState } from "react";
import { useMotionValue } from "framer-motion";

import { useMeasurePosition } from "../../../../hooks";

export const useComponentLogic = ({ index, updateOrder, updatePosition }) => {
  const [isDragging, setIsDragging] = useState(false);
  const ref = useMeasurePosition((position) => updatePosition(index, position));
  const y = useMotionValue();
  const onDragEnd = () => setIsDragging(false);
  const onDragStart = () => setIsDragging(true);
  const onViewportBoxUpdate = (_, delta) => {
    if (isDragging) {
      updateOrder(index, delta.y.translate);
    }
    y.set(delta.y.translate);
  };
  return {
    isDragging,
    onDragEnd,
    onDragStart,
    onViewportBoxUpdate,
    ref,
    y,
  };
};
