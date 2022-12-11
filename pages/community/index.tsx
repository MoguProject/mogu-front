import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getPostDataApi } from 'utils/apis/posts';
import Pagination from '../../components/common/Pagination';
import CommunityWrapper from '../../components/community/CommunityWrapper';
import Layout from '../../components/Layout';

const CommunityPage = () => {
  return (
    <Layout>
      <CommunityWrapper />
    </Layout>
  );
};

export default CommunityPage;
