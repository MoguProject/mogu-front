import { useState, useCallback } from 'react';

export default (initialState: boolean): [boolean, () => void] => {
  const [state, setState] = useState(initialState);
  const handler = useCallback(() => {
    setState(!state);
  }, [state]);
  return [state, handler];
};
