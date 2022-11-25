import { NextPage } from 'next';
import ProjectDesktopCard from '../../components/common/card/project/ProjectDesktopCard';
import Layout from '../../components/Layout';
import { ProjectsList } from './styled';
import { ProjectsData } from '../../dummy/ProjectsData';
import ProjectHeader from '../../components/project-study/header';
import { FilterBoxWrapper } from './styled';
import FilteredBox from '../../components/common/FilteredBox';

const ProjectsPage: NextPage = () => {
  return (
    <Layout>
      <ProjectHeader />
      <FilterBoxWrapper>
        <FilteredBox />
      </FilterBoxWrapper>
      <ProjectsList>
        {ProjectsData.map((data) => (
          <ProjectDesktopCard data={data} />
        ))}
      </ProjectsList>
    </Layout>
  );
};

export default ProjectsPage;
