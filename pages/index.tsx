import { NextPage } from 'next';
import MainNewContent from '../components/main/MainNewContent';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <MainNewContent category={'project'} />
      <MainNewContent category={'study'} />
    </Layout>
  );
};

export default Home;
