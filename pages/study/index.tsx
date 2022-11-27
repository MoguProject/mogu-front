import { NextPage } from 'next';
import StudyCard from '../../components/common/card/study/StudyCard';
import FilteredBox from '../../components/common/FilteredBox';
import Layout from '../../components/Layout';
import ProjectStudyHeader from '../../components/project-study/DesktopHeader';
import { StudyData } from '../../dummy/StudyData';
import { FilterBoxWrapper, ProjectStudyList } from '../projects/styled';

const StudyPage: NextPage = () => {
  return (
    <Layout>
      <ProjectStudyHeader />
      <FilterBoxWrapper>
        <FilteredBox />
      </FilterBoxWrapper>
      <ProjectStudyList>
        {StudyData.map((data) => (
          <StudyCard data={data} state={true} likeState={false} />
        ))}
      </ProjectStudyList>
    </Layout>
  );
};

export default StudyPage;
