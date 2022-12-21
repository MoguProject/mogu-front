import { GetServerSideProps, NextPage } from 'next';
import MainNewContent from '../components/main/MainNewContent';
import Layout from '../components/Layout';
import MainBottom from '../components/main/MainBottom';
import { QueryClient } from 'react-query';
import axios from 'axios';
import { dehydrate } from 'react-query';
import { axiosInstance } from 'axiosInstance';
import { getMainPageNewProject } from 'utils/apis/posts';

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  await queryClient.prefetchQuery(['mainNewProject'], () =>
    getMainPageNewProject(4),
  );
  await queryClient.prefetchQuery(['mainNewStudy'], () =>
    getMainPageNewProject(5),
  );
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
    await queryClient.prefetchQuery(['user'], () => {
      return axiosInstance
        .get('/users/login/info')
        .then((response) => response.data);
    });

    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  }
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
