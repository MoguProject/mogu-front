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

const CommunityWrapper = styled.div`
  max-width: 960px;
  padding: 36px 10px;
  margin: 0 auto;
`;
type Inputs = {
  review: string;
};

const DetailCommunity = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <Layout>
      <CommunityWrapper>
        <CommunityHeaderWrapper>
          <CommunityHeaderTop />
        </CommunityHeaderWrapper>
        <CommunityPostWrapper>
          <CommunityPost />
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
