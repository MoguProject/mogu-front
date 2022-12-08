import Layout from 'components/Layout';
import styled from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  CommnityPostEditDeleteButton,
  CommunityBtnWrapper,
  CommunityHeaderWrapper,
  CommunityPostReviewButton,
  CommunityPostWrapper,
  CommunityReviewText,
} from './styled';
import CommunityHeaderTop from 'components/community/CommunityHeader/top';
import CommunityPost from 'components/common/post/CommunityPost';
import CommunityPostReview from 'components/community/CommunityReview';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import axios from 'axios';
import { GetServerSideProps, GetStaticProps } from 'next';

const CommunityWrapper = styled.div`
  max-width: 960px;
  padding: 36px 10px;
  margin: 0 auto;
`;
type Inputs = {
  review: string;
};

const DetailCommunity = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useQuery(['postDetailData', id], () => {
    return axios
      .get(`http://13.124.27.209:8080/posts/post/${id}`)
      .then((response) => response.data);
  });
  console.log('data:', data);
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Layout>
      <CommunityWrapper>
        <CommunityHeaderWrapper>
          <CommunityHeaderTop />
        </CommunityHeaderWrapper>
        <CommunityPostWrapper>
          <CommunityPost data={data} />
        </CommunityPostWrapper>
        <CommunityBtnWrapper>
          <CommnityPostEditDeleteButton>수정하기</CommnityPostEditDeleteButton>
          <CommnityPostEditDeleteButton>삭제하기</CommnityPostEditDeleteButton>
        </CommunityBtnWrapper>

        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CommunityReviewText
              {...register('review')}
              placeholder="Leave a comment..."
            />
            <CommunityPostReviewButton type="submit" value={'댓글달기'} />
          </form>
        </div>
        <CommunityPostReview />
      </CommunityWrapper>
    </Layout>
  );
};

export default DetailCommunity;

export const getServerSideProps: GetServerSideProps = async ({
  query: { id },
}) => {
  const queryClient = new QueryClient();
  console.log('id:', id);
  await queryClient.prefetchQuery(['postDetailData', id], () => {
    return axios
      .get(`http://13.124.27.209:8080/posts/post/${id}`)
      .then((response) => response.data);
  });
  console.log('queryClient:', queryClient);
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
