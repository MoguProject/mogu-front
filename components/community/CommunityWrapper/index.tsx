import React from 'react';
import styled from 'styled-components';
import CommunityPost from '../../common/post/CommunityPost';
import CommunityHeader from '../CommunityHeader';

const CommunityWrapperWrapper = styled.div`
  max-width: 960px;
  padding: 36px 10px;
  margin: 0 auto;
`;

const CommunityWrapper = () => {
  return (
    <CommunityWrapperWrapper>
      <CommunityHeader />
      <CommunityPost />
      <CommunityPost />
      <CommunityPost />
      <CommunityPost />
      <CommunityPost />
      <CommunityPost />
      <CommunityPost />
      <CommunityPost />
      <CommunityPost />
      <CommunityPost />
    </CommunityWrapperWrapper>
  );
};

export default CommunityWrapper;
