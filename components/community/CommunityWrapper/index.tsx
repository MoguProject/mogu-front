import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { CommunityDataInterface } from 'types';
import { getPostDataApi } from 'utils/apis/posts';
import CommunityPost from '../../common/post/CommunityPost';
import CommunityHeader from '../CommunityHeader';

export const CommunityWrapperWrapper = styled.div`
  max-width: 960px;
  padding: 36px 10px;
  margin: 0 auto;
`;

export interface CommunityWrapperInterface {
  data?: CommunityDataInterface;
  currentSort: 'recent' | 'liked';
  setCurrentSort: Dispatch<SetStateAction<'recent' | 'liked'>>;
  currentCategory: number;
  setCurrentCategory: Dispatch<SetStateAction<number>>;
}

const CommunityWrapper = ({
  data,
  currentSort,
  setCurrentSort,
  currentCategory,
  setCurrentCategory,
}: CommunityWrapperInterface) => {
  return (
    <CommunityWrapperWrapper>
      <CommunityHeader
        currentSort={currentSort}
        setCurrentCategory={setCurrentCategory}
        setCurrentSort={setCurrentSort}
        currentCategory={currentCategory}
      />
      {data.content.map((content) => (
        <CommunityPost data={content} />
      ))}
    </CommunityWrapperWrapper>
  );
};

export default CommunityWrapper;
