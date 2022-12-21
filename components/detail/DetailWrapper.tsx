import { axiosInstance } from 'axiosInstance';
import CardState from 'components/common/CardState';
import CardTags from 'components/common/CardTags';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ProjectStudyContentInterface, UserLoginReturnData } from 'types';
import DetailCommentForm from './DetailCommentForm';

const DetailWrapper = ({
  data,
  userInfo,
}: {
  data: ProjectStudyContentInterface;
  userInfo?: UserLoginReturnData;
}) => {
  const router = useRouter();
  const [like, setLike] = useState(false);

  // 삭제하기 기능
  const deletePostData = async () => {
    const postId = data.id;
    console.log('postId:', postId);
    try {
      const res = await axiosInstance.post(`/posts/delete/${postId}`);
      console.log('res:', res.data);
      router.push('/community');
    } catch (error) {
      console.log(error);
    }
  };

  // 수정하기 기능
  const updatePostPage = () => {
    router.push(`/registration/community/edit/?postId=${data.id}`);
  };

  // 좋아요 기능
  const onChangeLike = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLike(!like);
    const postId = data.id;
    console.log('postId:', postId);
    try {
      const res = await axiosInstance.post(`/posts/like/${postId}`);
      console.log('res:', res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DetailContainer>
      <DetailHeader>
        <DetailTitle>{data?.title}</DetailTitle>
        <LikeButton
          className={data.likeStatus ? 'active' : ''}
          onClick={onChangeLike}
        >
          좋아요
        </LikeButton>
      </DetailHeader>
      <DetailSubHeader>
        <DetailHeaderItem>
          <span>{data.userNickname}</span>
          <span style={{ margin: '0 2px' }}>|</span>
          {data.startAt && <span>{data.startAt}</span>}
          <DetailStateWrapper>
            {data.openStatus && <CardState state={data.openStatus} />}
          </DetailStateWrapper>
        </DetailHeaderItem>
        <DetailHeaderItem>
          <span>{data.likeCount} like</span>
          <span>{data.view} views</span>
        </DetailHeaderItem>
      </DetailSubHeader>
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
      <DetailMain
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></DetailMain>
      {/* {data.userNickname === userInfo.nickname && (
        <CommunityBtnWrapper>
          <CommnityPostEditDeleteButton onClick={updatePostPage}>
            수정하기
          </CommnityPostEditDeleteButton>
          <CommnityPostEditDeleteButton onClick={deletePostData}>
            삭제하기
          </CommnityPostEditDeleteButton>
        </CommunityBtnWrapper>
      )} */}
      <CommunityBtnWrapper>
        <CommnityPostEditEditButton onClick={updatePostPage}>
          수정하기
        </CommnityPostEditEditButton>
        <CommnityPostEditDeleteButton onClick={deletePostData}>
          삭제하기
        </CommnityPostEditDeleteButton>
      </CommunityBtnWrapper>
      <DetailCommentForm
        isLoggedIn={true}
        postId={data.postId}
        replyList={data.replyList}
      />
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
  gap: 20px;
`;

const LikeButton = styled.button`
  padding: 2px 5px;
  border-radius: 10px;

  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};

  &.active {
    background-color: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.white};
  }
`;

const DetailSubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DetailHeaderItem = styled.div`
  display: flex;
  gap: 10px;
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
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  margin-bottom: 24px;
`;

const CommunityBtnWrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: flex-end;
`;

const CommnityPostEditDeleteButton = styled.button`
  padding: 6px 24px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.red};
  border: none;
  border-radius: 4px;
  font-weight: 700;
  margin-left: 20px;
  transition: all 0.2s ease-in-out;
  :hover {
    opacity: 0.7;
  }
`;

const CommnityPostEditEditButton = styled.button`
  padding: 6px 24px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.green};
  border: none;
  border-radius: 4px;
  font-weight: 700;
  margin-left: 20px;
  transition: all 0.2s ease-in-out;
  :hover {
    opacity: 0.7;
  }
`;
