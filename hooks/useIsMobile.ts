import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ query: '(max-width:767px)' });

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return isMobile;
};

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const desktop = useMediaQuery({ query: '(min-width:1140px)' });

  useEffect(() => {
    setIsDesktop(desktop);
  }, [desktop]);

  return isDesktop;
};
