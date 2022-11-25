import Image from 'next/image';

import {
  CommunityPostFooter,
  CommunityPostHeader,
  CommunityPostIcon,
  CommunityPostIconWrapper,
  CommunityPostLeft,
  CommunityPostRight,
  CommunityPostSummary,
  CommunityPostTitle,
  CommunityPostWrapper,
} from './styled';

const CommunityPost = () => {
  return (
    <CommunityPostWrapper>
      <CommunityPostLeft>
        <CommunityPostHeader>팀 프로젝트</CommunityPostHeader>
        <CommunityPostTitle>
          프로젝트 / 스터디 모집하는 프로젝트, 모구
        </CommunityPostTitle>
        <CommunityPostSummary>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknownindustry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an
          unknownindustry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown
        </CommunityPostSummary>
        <CommunityPostFooter>
          <CommunityPostIconWrapper>
            <CommunityPostIcon
              src={'/images/icon/heart_active.svg'}
              alt={'좋아요'}
              width={15}
              height={14}
            />
            20
          </CommunityPostIconWrapper>
          <CommunityPostIconWrapper>
            <CommunityPostIcon
              src={'/images/icon/eye.svg'}
              alt={'조회수'}
              width={16}
              height={14}
            />
            132
          </CommunityPostIconWrapper>
        </CommunityPostFooter>
      </CommunityPostLeft>
      <CommunityPostRight>
        <Image
          src={'/images/dummy_avatar.svg'}
          alt={'프로필 사진'}
          width={70}
          height={70}
        />
      </CommunityPostRight>
    </CommunityPostWrapper>
  );
};

export default CommunityPost;
