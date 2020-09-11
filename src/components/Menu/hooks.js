import { useRef } from "react";
import { useOnClickOutside } from "../../hooks";
export const useComponentLogic = (close) => {
  const ref = useRef(null);
  useOnClickOutside(ref, close);
  return { ref };
};
