import { useIsMobile } from '../../../hooks/useIsMobile';
import DesktopFooter from './Desktop';
import MobileFooter from './Mobile';

const Footer = () => {
  const isMobile = useIsMobile();
  return <>{isMobile ? <MobileFooter /> : <DesktopFooter />}</>;
};

export default Footer;
