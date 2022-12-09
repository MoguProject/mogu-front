import { GetServerSideProps, NextPage } from 'next';
import MainNewContent from '../components/main/MainNewContent';
import Layout from '../components/Layout';
import MainBottom from '../components/main/MainBottom';
import { QueryClient } from 'react-query';
import axios from 'axios';
import { dehydrate } from 'react-query';

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
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
    await queryClient.prefetchQuery(['user'], () => {
      return axios
        .get('http://13.124.27.209:8080/user/login/info')
        .then((response) => response.data);
    });
    console.log(queryClient);
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  }
  return {
    props: {},
  };
};
