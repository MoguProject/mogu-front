import { axiosInstance } from 'axiosInstance';
import DetailWrapper from 'components/detail/DetailWrapper';
import Layout from 'components/Layout';
import React from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { ProjectStudyContentInterface } from 'types';
import { loadMyInfo } from 'utils/apis/user';
import CommunityPostReview from 'components/community/CommunityReview/comment';
import { ReplyListType } from 'types';
import styled from 'styled-components';
import { GetServerSideProps, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
const detail = () => {
  const router = useRouter();
  const { detailId } = router.query;
  const { data, isLoading, isError } = useQuery<ProjectStudyContentInterface>(
    'postDetail',
    () => {
      return axiosInstance
        .get(`/projectstudy/post/${detailId}`)
        .then((response) => response.data);
    },
  );
  return (
    <Layout>
      {/* <DetailWrapper data={data} userInfo={userInfoData.data} /> */}
      <DetailWrapper data={data} />
      {data.replyList.length !== 0 &&
        data.replyList
          .reverse()
          .map((item) => <CommunityPostReview replyList={item} />)}
    </Layout>
  );
};

export default detail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const { detailId } = context.params;
  await queryClient.prefetchQuery(['postDetail'], () => {
    return axiosInstance
      .get(`/projectstudy/post/${detailId}`)
      .then((response) => response.data);
  });
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
