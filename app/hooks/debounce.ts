import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay = 300, skip = false) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    if (skip) {
      setDebounced(value);

      return;
    }

    const id = setTimeout(() => setDebounced(value), delay);

    return () => clearTimeout(id);
  }, [skip, value, delay]);

  return debounced;
};
