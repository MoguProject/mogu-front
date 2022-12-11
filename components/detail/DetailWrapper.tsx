import CardState from 'components/common/CardState';
import CardTags from 'components/common/CardTags';
import React from 'react';
import styled from 'styled-components';
import { ProjectStudyContentInterface } from 'types';
import DetailCommentForm from './DetailCommentForm';

const DetailWrapper = ({ data }: { data: ProjectStudyContentInterface }) => {
  const DetailWrapper = styled.div`
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

  return (
    <DetailWrapper>
      <DetailTitle>{data?.title}</DetailTitle>
      <DetailHeader>
        <DetailHeaderItem>
          <span>{data.userNickname}</span>
          <span style={{ margin: '0 4px' }}>|</span>
          <span>{data.startAt}</span>
          <DetailStateWrapper>
            <CardState state={data.openStatus} />
          </DetailStateWrapper>
        </DetailHeaderItem>
        <DetailHeaderItem>{data.view} views</DetailHeaderItem>
      </DetailHeader>
      <DetailTagWrapper>
        {data.postSkills.map((tag) => (
          <CardTags tag={tag.skillName} key={tag.id} />
        ))}
      </DetailTagWrapper>
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
      <DetailMain>{data.content}</DetailMain>
      <DetailCommentForm isLoggedIn={true} />
    </DetailWrapper>
  );
};

export default DetailWrapper;
