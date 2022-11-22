import { NextPage } from 'next';
import Header from '../components/Layout/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div>메인페이지 입니다.</div>
    </>
  );
};

export default Home;
