import Link from 'next/link';
import {
  CommunityHeaderTitle,
  CommunityHeaderTopWrapper,
  CommunityHeaderWrite,
} from './styled';

const CommunityHeaderTop = () => {
  return (
    <CommunityHeaderTopWrapper>
      <CommunityHeaderTitle>커뮤니티 🕹</CommunityHeaderTitle>
      <CommunityHeaderWrite>
        <Link href="/registration/community">글쓰기</Link>
      </CommunityHeaderWrite>
    </CommunityHeaderTopWrapper>
  );
};

export default CommunityHeaderTop;
