import { useCallback, useState } from "react";

export const useComponentLogic = () => {
  const [isActive, setIsActive] = useState(false);
  const onDragEnd = useCallback(
    (_, { offset }) => {
      if (offset.y > 300) setIsActive(false);
      if (offset.y < -300) setIsActive(true);
    },
    [setIsActive]
  );
  const closeDrawer = useCallback(() => {
    setIsActive(false);
  }, [setIsActive]);
  return { closeDrawer, isActive, onDragEnd };
};
