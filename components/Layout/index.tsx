import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
