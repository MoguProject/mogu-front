import { NextPage } from 'next';
import { ProjectDummyData } from '..';
import RegisterButton from '../../components/common/button/register';
import ProjectDesktopCard from '../../components/common/card/project/ProjectDesktopCard';
import FilteredBox from '../../components/common/FilteredBox';
import Layout from '../../components/Layout';
import {
  HeaderWrapper,
  HeaderStyled,
  HeaderNavList,
  ProjectsList,
  FilterBoxWrapper,
} from './styled';

const ProjectsPage: NextPage = () => {
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
    <Layout>
      <HeaderWrapper>
        <HeaderStyled>
          <nav>
            <HeaderNavList>
              <li>전체 프로젝트</li>
              <li>전체 스터디</li>
            </HeaderNavList>
          </nav>
          <RegisterButton>모집하기</RegisterButton>
        </HeaderStyled>
      </HeaderWrapper>
      <FilterBoxWrapper>
        <FilteredBox></FilteredBox>
      </FilterBoxWrapper>
      <ProjectsList>
        <ProjectDesktopCard data={ProjectDummyData} />
        <ProjectDesktopCard data={ProjectDummyData} />
        <ProjectDesktopCard data={ProjectDummyData} />
        <ProjectDesktopCard data={ProjectDummyData} />
        <ProjectDesktopCard data={ProjectDummyData} />
        <ProjectDesktopCard data={ProjectDummyData} />
        <ProjectDesktopCard data={ProjectDummyData} />
        <ProjectDesktopCard data={ProjectDummyData} />
      </ProjectsList>
    </Layout>
  );
};

export default ProjectsPage;
