import axios from 'axios';
import CardState from 'components/common/CardState';
import CardTags from 'components/common/CardTags';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { ProjectStudyContentInterface } from 'types';
import DetailCommentForm from './DetailCommentForm';

const DetailWrapper = ({ data }: { data: ProjectStudyContentInterface }) => {
  const router = useRouter();

  // 삭제하기 기능
  const deletePostData = async () => {
    const postId = data.id;
    console.log('postId:', postId);
    try {
      const res = await axios.post(
        `http://13.124.27.209:8080/posts/delete/${postId}`,
      );
      console.log('res:', res.data);
      router.push('/community');
    } catch (error) {
      console.log(error);
    }
  };

  // 수정하기 기능
  // const updatePostPage = () => {
  //   router.push('/registration/community');
  // };

  // const updataPostData = async () => {
  //   const postId = data.id;
  //   console.log('postId:', postId);
  //   try {
  //     const res = await updatePostDataApi(postId);
  //     console.log('res:', res);
  //     router.push('/community');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <DetailContainer>
      <DetailTitle>{data?.title}</DetailTitle>
      <DetailHeader>
        <DetailHeaderItem>
          <span>{data.userNickname}</span>
          <span style={{ margin: '0 4px' }}>|</span>
          {data.startAt && <span>{data.startAt}</span>}
          <DetailStateWrapper>
            {data.openStatus && <CardState state={data.openStatus} />}
          </DetailStateWrapper>
        </DetailHeaderItem>
        <DetailHeaderItem>{data.view} views</DetailHeaderItem>
      </DetailHeader>
      {data.postSkills && (
        <DetailTagWrapper>
          {data.postSkills.map((tag) => (
            <CardTags tag={tag.skillName} key={tag.id} />
          ))}
        </DetailTagWrapper>
      )}
      {data.preferredMethod && (
        <DetailPageDetail>
          <DetailDetailWrapper>
            <DetailDetailKey>모집 구분</DetailDetailKey>
            <DetailDetailCenter>·</DetailDetailCenter>
            <DetailDetailValue>{data.categoryName}</DetailDetailValue>
          </DetailDetailWrapper>
          <DetailDetailWrapper>
            <DetailDetailKey>진행 방식</DetailDetailKey>
            <DetailDetailCenter>·</DetailDetailCenter>
            <DetailDetailValue>{data.preferredMethod}</DetailDetailValue>
          </DetailDetailWrapper>
          <DetailDetailWrapper>
            <DetailDetailKey>시작 일자</DetailDetailKey>
            <DetailDetailCenter>·</DetailDetailCenter>
            <DetailDetailValue>{data.startAt}</DetailDetailValue>
          </DetailDetailWrapper>
          <DetailDetailWrapper>
            <DetailDetailKey>진행 지역</DetailDetailKey>
            <DetailDetailCenter>·</DetailDetailCenter>
            <DetailDetailValue>{data.region}</DetailDetailValue>
          </DetailDetailWrapper>
        </DetailPageDetail>
      )}

      <DetailMain>{data.content}</DetailMain>
      <DetailCommentForm isLoggedIn={true} postId={data.postId}/>
    </DetailWrapper>
        <CommunityBtnWrapper>
        <CommnityPostEditDeleteButton>수정하기</CommnityPostEditDeleteButton>
        <CommnityPostEditDeleteButton onClick={deletePostData}>
          삭제하기
        </CommnityPostEditDeleteButton>
      </CommunityBtnWrapper>
      <DetailCommentForm isLoggedIn={true} postId={data.id} />
    </DetailContainer>
  );
};

export default DetailWrapper;

const DetailContainer = styled.div`
  max-width: 960px;
  padding: 3rem 10px;
  margin: 0 auto;
`;

const DetailTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
  font-size: 28px;
`;

const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DetailHeaderItem = styled.div`
  display: flex;
  padding: 12px 0;
  font-size: 14px;
  color: ${(props) => props.theme.colors.secondary};
`;

const DetailStateWrapper = styled.div`
  margin-left: 8px;
`;

const DetailTagWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const DetailPageDetail = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

const DetailDetailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 18px 0;
`;

const DetailDetailKey = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.colors.green};
  font-weight: 500;
`;

const DetailDetailValue = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 500;
`;

const DetailDetailCenter = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.colors.tertiary};
  font-weight: 500;
  margin: 0 12px;
`;

const DetailMain = styled.div`
  padding: 2rem 0;
  min-height: 500px;
`;

const CommunityBtnWrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: flex-end;
`;

const CommnityPostEditDeleteButton = styled.button`
  padding: 6px 24px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.blue};
  border: none;
  border-radius: 4px;
  font-weight: 700;
  margin-left: 20px;
  :hover {
    background-color: ${(props) => props.theme.colors.blueDark};
  }
`;
