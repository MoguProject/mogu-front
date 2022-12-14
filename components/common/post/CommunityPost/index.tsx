import Image from 'next/image';
import Link from 'next/link';
import { CommunityContentInterface } from 'types';
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

const CommunityPost = ({ data }: { data: CommunityContentInterface }) => {
  return (
    <CommunityPostWrapper>
      <CommunityPostLeft>
        <CommunityPostHeader>{data.categoryName}</CommunityPostHeader>
        <CommunityPostTitle>
          <Link href={`/community/detail/${data.id}`}>{data.title}</Link>
        </CommunityPostTitle>
        <CommunityPostSummary>
          <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
        </CommunityPostSummary>
        <CommunityPostFooter>
          <CommunityPostIconWrapper>
            <CommunityPostIcon
              src={'/images/icon/heart_active.svg'}
              alt={'좋아요'}
              width={15}
              height={14}
            />
            {data.likeCount}
          </CommunityPostIconWrapper>
          <CommunityPostIconWrapper>
            <CommunityPostIcon
              src={'/images/icon/eye.svg'}
              alt={'조회수'}
              width={16}
              height={14}
            />
            {data.view}
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
