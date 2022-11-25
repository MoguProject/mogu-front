import { NextPage } from 'next';
import FilteredBox from '../../components/common/FilteredBox';
import Layout from '../../components/Layout';
import ProjectStudyHeader from '../../components/project-study/header';
import { FilterBoxWrapper } from '../projects/styled';

const StudyPage: NextPage = () => {
  return (
    <Layout>
      <ProjectStudyHeader />
      <FilterBoxWrapper>
        <FilteredBox />
      </FilterBoxWrapper>
    </Layout>
  );
};

export default StudyPage;
