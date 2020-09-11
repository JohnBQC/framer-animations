import { useCallback, useEffect } from "react";
export const useOnClickOutside = (
  ref,
  handler,
  additionalCondition = () => {}
) => {
  const listener = useCallback(
    (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        additionalCondition(event)
      ) {
        return;
      }

      handler(event);
    },
    [handler, ref, additionalCondition]
  );
  useEffect(() => {
    document.addEventListener("mouseup", listener);
    document.addEventListener("touchend", listener);

    return () => {
      document.removeEventListener("mouseup", listener);
      document.removeEventListener("touchend", listener);
    };
  }, [ref, listener]);
};

export default useOnClickOutside;
