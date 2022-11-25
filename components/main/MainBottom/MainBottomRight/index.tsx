import MoreButton from '../../../common/buttons/MoreButton';
import ProjectPost from '../../../common/post/ProjectPost';
import StudyPost from '../../../common/post/StudyPost';

import {
  MainBottomRightWrapper,
  RecommendedTitle,
  RecommendedWrapper,
} from './styled';

const MainBottomRight = () => {
  return (
    <MainBottomRightWrapper>
      <RecommendedTitle>추천 프로젝트</RecommendedTitle>
      <RecommendedWrapper>
        <ProjectPost />
        <ProjectPost />
        <ProjectPost />
        <MoreButton />
      </RecommendedWrapper>
      <RecommendedTitle>추천 스터디</RecommendedTitle>
      <RecommendedWrapper>
        <StudyPost />
        <StudyPost />
        <StudyPost />
        <MoreButton />
      </RecommendedWrapper>
    </MainBottomRightWrapper>
  );
};

export default MainBottomRight;
