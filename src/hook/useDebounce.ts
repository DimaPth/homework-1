import { useEffect, useState } from 'react';

const UseDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearInterval(handler);
    };
  }, [value]);

  return debouncedValue;
};

export default UseDebounce;
