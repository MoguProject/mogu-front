import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getPostDataApi } from 'utils/apis/posts';
import CommunityPost from '../../common/post/CommunityPost';
import CommunityHeader from '../CommunityHeader';

export const CommunityWrapperWrapper = styled.div`
  max-width: 960px;
  padding: 36px 10px;
  margin: 0 auto;
`;
export interface CommunityPostType {
  content: string;
  categoryName: number;
  id: number;
  title: string;
  likeCount: number;
  view: number;
}

const CommunityWrapper = () => {
  const { data } = useQuery('communityPostData', () => getPostDataApi(1));
  return (
    <CommunityWrapperWrapper>
      <CommunityHeader />
      {data.content.map((item: CommunityPostType) => (
        <CommunityPost key={item.id} data={item} />
      ))}
    </CommunityWrapperWrapper>
  );
};

export default CommunityWrapper;
