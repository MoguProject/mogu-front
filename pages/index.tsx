import { NextPage } from 'next';
import MainNewContent from '../components/main/MainNewContent';
import Layout from '../components/Layout';

export interface ProjectDummyData {
  title: string;
  categories: string[];
  state: boolean;
  totalUser: number;
  currentUser: number;
  like: number;
  imgUrl: string;
}

const Home: NextPage = () => {
  return (
    <Layout>
      <MainNewContent category={'project'} />
      <MainNewContent category={'study'} />
    </Layout>
  );
};

export default Home;
