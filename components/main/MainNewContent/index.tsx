import styled from 'styled-components';
import CardCarousel from '../CardCarousel';
import ProjectDesktopCard from '../../common/card/project/ProjectDesktopCard';
import StudyCard from '../../common/card/study/StudyCard';
import { ProjectDummyData } from '../../../dummy/ProjectsData';
import { StudyDummyData } from '../../../dummy/StudyData';
import { useIsDesktop } from 'hooks/useIsMobile';
import ProjectMobileCard from 'components/common/card/project/ProjectMobileCard';

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

const MainNewContentTabletWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const MainNewContent = ({ category }: { category: string }) => {
  const isDesktop = useIsDesktop();
  const ProjectDummyData: ProjectDummyData = {
    id: 0,
    title: 'React + Spring 스터디 / 프로젝트 모집 사이트 같이 만드실분',
    categories: ['React', 'Typescript', 'MySQL', 'NodeJs', 'Spring'],
    state: true,
    totalUser: 4,
    currentUser: 2,
    like: 20,
    imgUrl: '/images/dummy_image.png',
  };
  const StudyDummyData: StudyDummyData = {
    id: 0,
    subTitle: '프론트엔드 자바스크립트 / 웹 개발',
    title: '자바스크립트 딥다이브 스터디 모집합니다.',
    content:
      'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been ...',
    totalUser: 4,
    currentUser: 2,
  };
  return (
    <MainNewContentWrapper>
      {category === 'project' ? (
        <>
          <MainNewContentTitle>새롭게 모집하는 프로젝트</MainNewContentTitle>
          {/* {isDesktop ? (
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
          ) : (
            <MainNewContentTabletWrapper>
              <ProjectDesktopCard data={ProjectDummyData} />
              <ProjectDesktopCard data={ProjectDummyData} />
              <ProjectDesktopCard data={ProjectDummyData} />
              <ProjectDesktopCard data={ProjectDummyData} />
              <ProjectDesktopCard data={ProjectDummyData} />
              <ProjectDesktopCard data={ProjectDummyData} />
            </MainNewContentTabletWrapper>
          )} */}
        </>
      ) : (
        <>
          <MainNewContentTitle>새롭게 모집하는 스터디</MainNewContentTitle>
          <CardCarousel>
            <StudyCard state={true} likeState={false} data={StudyDummyData} />
            <StudyCard state={true} likeState={false} data={StudyDummyData} />
            <StudyCard state={true} likeState={false} data={StudyDummyData} />
            <StudyCard state={true} likeState={false} data={StudyDummyData} />
            <StudyCard state={true} likeState={false} data={StudyDummyData} />
            <StudyCard state={true} likeState={false} data={StudyDummyData} />
            <StudyCard state={true} likeState={false} data={StudyDummyData} />
            <StudyCard state={true} likeState={false} data={StudyDummyData} />
          </CardCarousel>
        </>
      )}
    </MainNewContentWrapper>
  );
};

export default MainNewContent;
