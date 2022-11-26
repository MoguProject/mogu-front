import { NextPage } from 'next';
import ProjectDesktopCard from '../../components/common/card/project/ProjectDesktopCard';
import Layout from '../../components/Layout';
import { ProjectStudyList } from './styled';
import { ProjectsData } from '../../dummy/ProjectsData';
import { FilterBoxWrapper } from './styled';
import FilteredBox from '../../components/common/FilteredBox';
import ProjectStudyHeader from '../../components/project-study';

const ProjectsPage: NextPage = () => {
  return (
    <Layout>
      <ProjectStudyHeader />
      <FilterBoxWrapper>
        <FilteredBox />
      </FilterBoxWrapper>
      <ProjectStudyList>
        {ProjectsData.map((data) => (
          <ProjectDesktopCard data={data} />
        ))}
      </ProjectStudyList>
    </Layout>
  );
};

export default ProjectsPage;
