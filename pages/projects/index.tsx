import { GetServerSideProps } from 'next';
import ProjectDesktopCard from '../../components/common/card/project/ProjectDesktopCard';
import Layout from '../../components/Layout';

import FilteredBox from '../../components/common/FilteredBox';
import axios from 'axios';
import { QueryClient, dehydrate, useQuery, useQueryClient } from 'react-query';
import { getProjectStudyPostsApi } from 'utils/apis/posts';
import { useState, useEffect } from 'react';
import Pagination from 'components/common/Pagination';
import { ProjectStudyDataInterface } from 'types';
import styled from 'styled-components';
import Link from 'next/link';
import ProjectStudyDesktopHeader from 'components/project-study/DesktopHeader';

const ProjectStudyContentWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;

  @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 724px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ProjectsPage = () => {
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(4);
  const [currentSort, setCurrentSort] = useState<'recent' | 'liked' | 'opened'>(
    'recent',
  );
  const { data } = useQuery<ProjectStudyDataInterface, Error>(
    ['projectPosts', currentCategory, currentPage, currentSort],
    () => getProjectStudyPostsApi(currentCategory, currentPage, currentSort),
    {
      staleTime: 2000,
    },
  );

  useEffect(() => {
    if (currentPage < data?.totalPages) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(
        ['projectPosts', currentCategory, nextPage, currentSort],
        () => getProjectStudyPostsApi(currentCategory, nextPage, currentSort),
      );
    }
  }, [currentPage, currentCategory, currentSort, queryClient]);

  console.log(data);
  return (
    <Layout>
      <ProjectStudyDesktopHeader
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <FilterBoxWrapper>
        <FilteredBox
          setCurrentSort={setCurrentSort}
          currentSort={currentSort}
        />
      </FilterBoxWrapper>
      <ProjectStudyContentWrapper>
        {data?.content.map((content) => (
          <Link
            href={'/projects/detail'}
            key={content.postId}
            style={{ marginBottom: 24 }}
          >
            <ProjectDesktopCard data={content} />
          </Link>
        ))}
      </ProjectStudyContentWrapper>
      {data ? (
        <Pagination
          currentPage={data.number}
          totalPage={data.totalPages}
          first={data.first}
          last={data.last}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </Layout>
  );
};

export default ProjectsPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['projectPosts', 4, 0, 'recent'], () => {
    return axios
      .get('http://13.124.27.209:8080/projectstudy/list/all/4?page=0&size=12')
      .then((response) => response.data);
  });
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export const FilterBoxWrapper = styled.div`
  margin-top: 18px;
  margin-bottom: 30px;
`;

export const ProjectStudyList = styled.section`
  margin: 0 auto;
  max-width: 1140px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 28px;
`;
