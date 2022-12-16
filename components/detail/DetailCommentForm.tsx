import { axiosInstance } from 'axiosInstance';
import { useMutation, useQueryClient } from 'react-query';
import React, { useState } from 'react';

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
  display: flex;
  flex-direction: column;
  gap: 5px;
  textarea {
    width: 100%;
    height: 100%;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 8px;
    resize: none;
    padding: 8px;
    :focus {
      outline: ${(props) => props.theme.colors.green};
    }
  }
`;

export const DetailCommentFormHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DetailCommentFormButton = styled.button`
  padding: 1px 10px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.greenLight};
  border: none;
  border-radius: 4px;
  font-weight: 500;

  :hover {
    background-color: ${(props) => props.theme.colors.green};
  }
`;

interface CommentFormSubmitData {
  content: string;
  postId: number;
}
const DetailCommentForm = ({
  postId,
  isLoggedIn,
  replyList,
}: {
  isLoggedIn: boolean;
  postId: number;
  replyList: string[];
}) => {
  const [content, setContent] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    (commentBody: CommentFormSubmitData) =>
      axiosInstance.post(`/posts/reply/create/super/`, commentBody),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('postDetailData');
        setContent('');
      },
    },
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ postId, content });
  };

  return (
    <>
      <DetailCommentFormWrapper onSubmit={handleSubmit}>
        <DetailCommentFormHeader>
          <DetailCommentFormTitle>{`댓글 ${replyList.length}`}</DetailCommentFormTitle>
          <DetailCommentFormButton>댓글 달기</DetailCommentFormButton>
        </DetailCommentFormHeader>
        <textarea
          value={content}
          onChange={handleChange}
          placeholder={'댓글을 입력 해 주세요'}
        />
      </DetailCommentFormWrapper>
    </>
  );
};

export default DetailCommentForm;
