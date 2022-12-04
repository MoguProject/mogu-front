import Image from 'next/image';
import {
  CommunityPostReviewHeader,
  CommunityPostReviewHeaderInfo,
  CommunityPostReviewList,
} from './styled';

const CommunityPostReview = () => {
  return (
    <CommunityPostReviewList>
      <CommunityPostReviewHeader>
        <Image
          src={'/images/dummy_avatar.svg'}
          alt={'프로필 사진'}
          width={40}
          height={40}
        />
        <CommunityPostReviewHeaderInfo>
          <span>Hansunguk</span>
          <span>2022년 11월 18일</span>
        </CommunityPostReviewHeaderInfo>
      </CommunityPostReviewHeader>
      <p>너무 좋은 프로젝트인 것 같아요!</p>
    </CommunityPostReviewList>
  );
};

export default CommunityPostReview;
