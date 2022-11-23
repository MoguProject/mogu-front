import { NextPage } from 'next';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div>메인페이지 입니다.</div>
      <Footer />
    </>
  );
};

export default Home;
