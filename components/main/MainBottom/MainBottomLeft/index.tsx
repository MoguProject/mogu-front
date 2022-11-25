import CommunityPost from '../../../common/post/CommunityPost';

import {
  MainBottomLeftHeader,
  MainBottomLeftMoreButtom,
  MainBottomLeftSelect,
  MainBottomLeftTitle,
  MainBottomLeftWrapper,
} from './styled';

const MainBottomLeft = () => {
  return (
    <MainBottomLeftWrapper>
      <MainBottomLeftTitle>커뮤니티 최신글</MainBottomLeftTitle>
      <MainBottomLeftHeader>
        <MainBottomLeftSelect>
          <li>팀 프로젝트</li>
          <li>개인 프로젝트</li>
          <li>자유로운 글</li>
        </MainBottomLeftSelect>
        <MainBottomLeftMoreButtom>더보기</MainBottomLeftMoreButtom>
      </MainBottomLeftHeader>
      <CommunityPost />
      <CommunityPost />
      <CommunityPost />
      <CommunityPost />
      <CommunityPost />
    </MainBottomLeftWrapper>
  );
};

export default MainBottomLeft;
