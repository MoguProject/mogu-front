import { NextPage } from 'next';
import MainNewContent from '../components/main/MainNewContent';
import Layout from '../components/Layout';
import MainBottom from '../components/main/MainBottom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const Home: NextPage = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <MainNewContent category={'project'} />
        <MainNewContent category={'study'} />
        <MainBottom />
      </Layout>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default Home;
