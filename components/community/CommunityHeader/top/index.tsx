import {
  CommunityHeaderTitle,
  CommunityHeaderTopWrapper,
  CommunityHeaderWrite,
} from './styled';

const CommunityHeaderTop = () => {
  return (
    <CommunityHeaderTopWrapper>
      <CommunityHeaderTitle>커뮤니티 🕹</CommunityHeaderTitle>
      <CommunityHeaderWrite>글쓰기</CommunityHeaderWrite>
    </CommunityHeaderTopWrapper>
  );
};

export default CommunityHeaderTop;
