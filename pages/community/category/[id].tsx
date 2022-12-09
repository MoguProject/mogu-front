import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import axios from 'axios';
import { CommunityWrapperWrapper } from 'components/community/CommunityWrapper';
import CommunityHeader from 'components/community/CommunityHeader';

import CommunityPost from 'components/common/post/CommunityPost';
import Layout from 'components/Layout';

const catgoryPosts = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useQuery(['communityPostData', id], () => {
    return axios
      .get(`http://13.124.27.209:8080/posts/list/${id}`)
      .then((response) => response.data);
  });
  console.log('data:', data);
  return (
    <Layout>
      <CommunityWrapperWrapper>
        <CommunityHeader />
        {data.content.map((item) => (
          <CommunityPost key={item.id} data={item} />
        ))}
      </CommunityWrapperWrapper>
    </Layout>
  );
};

export default catgoryPosts;

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();
  const categoryId = context.params?.id;
  await queryClient.prefetchQuery(['communityPostData', categoryId], () => {
    return axios
      .get(`http://13.124.27.209:8080/posts/list/${categoryId}`)
      .then((response) => response.data);
  });
  console.log('queryClient:', queryClient);
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
