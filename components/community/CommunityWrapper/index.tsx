import React from 'react';
import styled from 'styled-components';
import CommunityPost from '../../common/post/CommunityPost';
import CommunityHeader from '../CommunityHeader';
import Link from 'next/link';

export const CommunityWrapperWrapper = styled.div`
  max-width: 960px;
  padding: 36px 10px;
  margin: 0 auto;
`;

const CommunityWrapper = () => {
  return (
    <CommunityWrapperWrapper>
      <CommunityHeader />
      <Link href={'/community/detail/1'}>
        {' '}
        <CommunityPost />
      </Link>
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
