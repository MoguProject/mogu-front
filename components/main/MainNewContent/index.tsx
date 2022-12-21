import styled from 'styled-components';
import CardCarousel from '../CardCarousel';
import ProjectDesktopCard from '../../common/card/project/ProjectDesktopCard';
import StudyCard from '../../common/card/study/StudyCard';
import { useIsDesktop } from 'hooks/useIsMobile';
import ProjectMobileCard from 'components/common/card/project/ProjectMobileCard';
import { useQuery } from 'react-query';
import { getMainPageNewProject } from 'utils/apis/posts';

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
  const { data: mainNewProject } = useQuery(['mainNewProject'], () =>
    getMainPageNewProject(4),
  );

  const { data: mainNewStudy } = useQuery(['mainNewStudy'], () =>
    getMainPageNewProject(5),
  );

  if (mainNewProject) {
    return (
      <MainNewContentWrapper>
        {category === 'project' && (
          <>
            <MainNewContentTitle>새롭게 모집하는 프로젝트</MainNewContentTitle>
            {isDesktop ? (
              <CardCarousel>
                {mainNewProject.content.map((item: any) => (
                  <ProjectDesktopCard data={item} main={true} />
                ))}
              </CardCarousel>
            ) : (
              <MainNewContentTabletWrapper>
                {mainNewProject.content.map((item: any) => (
                  <ProjectDesktopCard data={item} main={true} />
                ))}
              </MainNewContentTabletWrapper>
            )}
          </>
        )}
        {category === 'study' && mainNewStudy.content.length > 7 ? (
          <>
            <MainNewContentTitle>새롭게 모집하는 프로젝트</MainNewContentTitle>
            {isDesktop ? (
              <CardCarousel>
                {mainNewStudy.content.map((item: any) => (
                  <ProjectDesktopCard data={item} main={true} />
                ))}
              </CardCarousel>
            ) : (
              <MainNewContentTabletWrapper>
                {mainNewStudy.content.map((item: any) => (
                  <ProjectDesktopCard data={item} main={true} />
                ))}
              </MainNewContentTabletWrapper>
            )}
          </>
        ) : null}
      </MainNewContentWrapper>
    );
  }
};

export default MainNewContent;
