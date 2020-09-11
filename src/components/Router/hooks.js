import { useEffect, useRef, useState } from "react";

const generateRandomLoadTime = () => {
  return Math.floor(Math.random() * 4) + 4;
};

function useTimeout(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setTimeout(tick, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
}

export const useComponentLogic = () => {
  const [loading, setLoading] = useState(false);
  const fakeLoad = (e) => {
    e.preventDefault();
    setLoading(true);
  };
  const delay = generateRandomLoadTime();

  useTimeout(() => setLoading(false), delay * 1000);

  return { fakeLoad, loading };
};
