import { useEffect } from 'react';

const useInterval = (cb, delay) => {
  useEffect(() => {
    const doInterval = setInterval(() => cb(), delay);
    return () => clearInterval(doInterval);
  }) 
}

export default useInterval;