import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { dehydrate, QueryClient, useQuery, useQueryClient } from 'react-query';
import { getPostDataApi } from 'utils/apis/posts';
import Pagination from '../../components/common/Pagination';
import CommunityWrapper from '../../components/community/CommunityWrapper';
import Layout from '../../components/Layout';
import { CommunityDataInterface } from 'types';
import CommunityPost from 'components/common/post/CommunityPost';

const CommunityPage = () => {
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(1);
  const [currentSort, setCurrentSort] = useState<'recent' | 'liked'>('recent');
  const { data, isLoading } = useQuery<CommunityDataInterface, Error>(
    ['communityPosts', currentCategory, currentPage, currentSort],
    () => getPostDataApi(currentCategory, currentPage, currentSort),
    {
      staleTime: 2000,
    },
  );
  useEffect(() => {
    if (currentPage < data?.totalPages) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(
        ['communityPosts', currentCategory, nextPage, currentSort],
        () => getPostDataApi(currentCategory, nextPage, currentSort),
      );
    }
  }, [currentPage, currentCategory, currentSort, queryClient]);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (data) {
    return (
      <Layout>
        <>
          <CommunityWrapper
            data={data}
            currentSort={currentSort}
            setCurrentSort={setCurrentSort}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
          <Pagination
            currentPage={currentPage}
            totalPage={data.totalPages}
            setCurrentPage={setCurrentPage}
            first={data.first}
            last={data.last}
          />
        </>
      </Layout>
    );
  }
};

export default CommunityPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['communityPosts', 1, 0, 'recent'], () => {
    return axios
      .get('http://13.124.27.209:8080/posts/list/1?page=0&size=10')
      .then((response) => response.data);
  });
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
