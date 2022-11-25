import { NextPage } from 'next';
import MainNewContent from '../components/main/MainNewContent';
import Layout from '../components/Layout';
import MainBottom from '../components/main/MainBottom';
import { useIsMobile } from '../hooks/useIsMobile';

const Home: NextPage = () => {
  return (
    <Layout>
      <MainNewContent category={'project'} />
      <MainNewContent category={'study'} />
      <MainBottom />
    </Layout>
  );
};

export default Home;
