import React from 'react';
import styled from 'styled-components';

const DetailCommentFormTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 18px;
`;

const DetailCommentFormWrapper = styled.form`
  width: 100%;
  margin: 0 auto;
  height: 8rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
`;

const DetailCommentForm = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <>
      <DetailCommentFormTitle>댓글</DetailCommentFormTitle>
      <DetailCommentFormWrapper></DetailCommentFormWrapper>
    </>
  );
};

export default DetailCommentForm;
