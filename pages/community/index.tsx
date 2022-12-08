import axios from 'axios';
import { GetStaticProps } from 'next';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getPostDataApi } from 'utils/apis/posts';
import Pagination from '../../components/common/Pagination';
import CommunityWrapper from '../../components/community/CommunityWrapper';
import Layout from '../../components/Layout';

const CommunityPage = () => {
  return (
    <Layout>
      <CommunityWrapper />
      <Pagination />
    </Layout>
  );
};

export default CommunityPage;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['communityPostData'], () =>
    getPostDataApi(1),
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
