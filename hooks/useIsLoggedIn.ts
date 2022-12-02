import { useState, useEffect } from 'react';

const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.getItem('user') ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);

  return isLoggedIn;
};
export default useIsLoggedIn;
