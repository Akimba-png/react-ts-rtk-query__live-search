import { useState, useEffect } from 'react';

export const useDebounce = (value: string) => {
  const [debounced, setDebounced] = useState<string>(value);
  useEffect(() => {
    const id = setTimeout(() => {
      setDebounced(value);
    }, 3000);
    return () => clearTimeout(id);
  }, [value]);
  return debounced;
};
