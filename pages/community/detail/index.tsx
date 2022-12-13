import Layout from 'components/Layout';
import styled from 'styled-components';
import { CommunityHeaderWrapper } from './styled';

import { useRouter } from 'next/router';
import { useQuery, useMutation } from 'react-query';
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
  const { postId } = router.query;
  const { data, isLoading } = useQuery(['postDetailData', postId], () => {
    return axiosInstance
      .get(`/posts/post/${postId}`)
      .then((response) => response.data);
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <CommunityWrapper>
        <CommunityHeaderWrapper>
          <DetailWrapper data={data} />
        </CommunityHeaderWrapper>
        {data.replyList.length !== 0 &&
          data.replyList
            .reverse()
            .map((item: replyListType) => (
              <CommunityPostReview replyList={item} />
            ))}
      </CommunityWrapper>
    </Layout>
  );
};

export default DetailCommunity;
