import { GetServerSideProps } from 'next';
import ProjectDesktopCard from '../../components/common/card/project/ProjectDesktopCard';
import Layout from '../../components/Layout';
import { ProjectStudyList } from './styled';
import { ProjectsData } from '../../dummy/ProjectsData';
import { FilterBoxWrapper } from './styled';
import FilteredBox from '../../components/common/FilteredBox';
import ProjectStudyHeader from '../../components/project-study';
import axios from 'axios';
import { QueryClient, dehydrate, useQuery } from 'react-query';
import { axiosInstance } from 'axiosInstance';

const ProjectsPage = () => {
  const { data } = useQuery(['projectStudyPosts'], () => {
    return axiosInstance
      .get('/projectstudy/list/all/1')
      .then((res) => res.data);
  });
  console.log(data);
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

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['projectStudyPosts'], () => {
    return axios
      .get('http://13.124.27.209:8080/projectstudy/list/all/1')
      .then((response) => response.data);
  });
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
