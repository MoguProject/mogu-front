import Layout from 'components/Layout';
import styled from 'styled-components';
import { CommunityHeaderWrapper } from './styled';

import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import axios from 'axios';
import DetailWrapper from 'components/detail/DetailWrapper';
import { replyListType } from 'types';
import CommunityPostReview from 'components/community/CommunityReview/comment';
import { axiosInstance } from 'axiosInstance';

const CommunityWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;
const DetailCommunity = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useQuery(['postDetailData', id], () => {
    return axiosInstance
      .get(`/posts/post/${id}`)
      .then((response) => response.data);
  });
  console.log('data:', data);

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <Layout>
      <CommunityWrapper>
        <CommunityHeaderWrapper>
          <DetailWrapper data={data} />
        </CommunityHeaderWrapper>
        {data.replyList.length !== 0 &&
          data.replyList.map((item: replyListType) => (
            <CommunityPostReview replyList={item} />
          ))}
      </CommunityWrapper>
    </Layout>
  );
};

export default DetailCommunity;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const queryClient = new QueryClient();
//   const { id } = context.query;
//   console.log('context.query:', id);
//   await queryClient.prefetchQuery(['postDetailData', id], () => {
//     return axios
//       .get(`http://13.124.27.209:8080/posts/post/${id}`)
//       .then((response) => response.data);
//   });
//   console.log('queryClient:', queryClient);
//   return {
//     props: {
//       dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//     },
//   };
// };
