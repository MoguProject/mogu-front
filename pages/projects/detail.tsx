import { axiosInstance } from 'axiosInstance';
import DetailWrapper from 'components/detail/DetailWrapper';
import Layout from 'components/Layout';
import React from 'react';
import { useQuery } from 'react-query';
import { ProjectStudyContentInterface } from 'types';
const detail = () => {
  const { data, isLoading, isError } = useQuery<ProjectStudyContentInterface>(
    'postDetail',
    () => {
      return axiosInstance
        .get('/projectstudy/post/565')
        .then((response) => response.data);
    },
  );
  console.log(data);
  if (isLoading) {
    <div>로딩중</div>;
  }

  if (isError) {
    <div>에러있음</div>;
  }

  if (data) {
    return (
      <Layout>
        <DetailWrapper data={data} />
      </Layout>
    );
  }
};

export default detail;
