import Layout from 'components/Layout';
import styled from 'styled-components';

import { useRouter } from 'next/router';
import { useQuery, useMutation, QueryClient, dehydrate } from 'react-query';
import axios from 'axios';
import DetailWrapper from 'components/detail/DetailWrapper';
import { ReplyListType } from 'types';
import CommunityPostReview from 'components/community/CommunityReview/comment';
import { loadMyInfo } from 'utils/apis/user';
import { userInfo } from 'os';
import { GetServerSideProps } from 'next';

const CommunityWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;
const DetailCommunity = () => {
  const router = useRouter();
  const { postId } = router.query;

  const postDetailData = useQuery(['postDetailData', postId], () => {
    return axios
      .get(`http://13.124.27.209:8080/posts/post/${postId}`)
      .then((response) => response.data);
  });
  const userInfoData = useQuery('userInfoData', loadMyInfo);

  if (postDetailData.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <CommunityWrapper>
        <CommunityHeaderWrapper>
          <DetailWrapper
            data={postDetailData.data}
            userInfo={userInfoData.data}
          />
        </CommunityHeaderWrapper>
        {postDetailData.data.replyList.length !== 0 &&
          postDetailData.data.replyList.map((item: ReplyListType) => (
            <CommunityPostReview replyList={item} />
          ))}
      </CommunityWrapper>
    </Layout>
  );
};

export default DetailCommunity;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const postId = context.query;
  await queryClient.prefetchQuery(['postDetailData', postId], () => {
    return axios
      .get(`http://13.124.27.209:8080/posts/post/${postId}`)
      .then((response) => response.data);
  });
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export const CommunityHeaderWrapper = styled.section`
  width: 100%;
  padding: 10px;
`;
export const CommunityBtnWrapper = styled.div`
  display: flex;
  /* justify-content: flex-end; */
`;

export const CommnityPostEditDeleteButton = styled.button`
  padding: 6px 24px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.blue};
  border: none;
  border-radius: 4px;
  font-weight: 700;
  margin-left: 20px;
  :hover {
    background-color: ${(props) => props.theme.colors.blueDark};
  }
`;

export const CommunityReviewText = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  border: 1px solid ${(props) => props.theme.colors.border};
  :focus {
    outline: none;
  }
`;

export const CommunityPostReviewButton = styled.input`
  padding: 6px 24px;
  color: ${(props) => props.theme.colors.secondary};
  border: none;
  border-radius: 4px;
  font-weight: 700;
  margin-left: 20px;
  :hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
