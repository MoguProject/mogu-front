import styled from 'styled-components';
import CardCarousel from '../CardCarousel';
import ProjectDesktopCard from '../../common/card/project/ProjectDesktopCard';
import StudyCard from '../../common/card/study/StudyCard';
import type { ProjectDummyData } from '../../../pages';
const MainNewContentWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 40px 0;
`;

const MainNewContentTitle = styled.h1`
  font-weight: 700;
  font-size: 19px;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 24px;
  padding: 10px;
`;

const MainNewContent = ({ category }: { category: string }) => {
  const ProjectDummyData: ProjectDummyData = {
    title: 'React + Spring 스터디 / 프로젝트 모집 사이트 같이 만드실분',
    categories: ['React', 'Typescript', 'MySQL', 'NodeJs', 'Spring'],
    state: true,
    totalUser: 4,
    currentUser: 2,
    like: 20,
    imgUrl: '/images/dummy_image.png',
  };
  return (
    <MainNewContentWrapper>
      {category === 'project' ? (
        <>
          <MainNewContentTitle>새롭게 모집하는 프로젝트</MainNewContentTitle>
          <CardCarousel>
            <ProjectDesktopCard data={ProjectDummyData} />
            <ProjectDesktopCard data={ProjectDummyData} />
            <ProjectDesktopCard data={ProjectDummyData} />
            <ProjectDesktopCard data={ProjectDummyData} />
            <ProjectDesktopCard data={ProjectDummyData} />
            <ProjectDesktopCard data={ProjectDummyData} />
            <ProjectDesktopCard data={ProjectDummyData} />
            <ProjectDesktopCard data={ProjectDummyData} />
          </CardCarousel>
        </>
      ) : (
        <>
          <MainNewContentTitle>새롭게 모집하는 스터디</MainNewContentTitle>
          <CardCarousel>
            <StudyCard state={true} likeState={false} />
            <StudyCard state={true} likeState={false} />
            <StudyCard state={true} likeState={false} />
            <StudyCard state={true} likeState={false} />
            <StudyCard state={true} likeState={false} />
            <StudyCard state={true} likeState={false} />
            <StudyCard state={true} likeState={false} />
            <StudyCard state={true} likeState={false} />
          </CardCarousel>
        </>
      )}
    </MainNewContentWrapper>
  );
};

export default MainNewContent;
