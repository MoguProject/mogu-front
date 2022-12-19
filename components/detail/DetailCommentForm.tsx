import { axiosInstance } from 'axiosInstance';
import { useMutation, useQueryClient } from 'react-query';
import React, { useState } from 'react';

import styled from 'styled-components';
import { ReplyListType } from 'types';

const DetailCommentFormTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 12px;
`;

const DetailCommentFormWrapper = styled.form`
  width: 100%;
  margin: 0 auto;
  height: 12rem;
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
    margin-bottom: 12px;
    :focus {
      outline: ${(props) => props.theme.colors.green};
    }
  }
`;

export const DetailCommentFormHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DetailCommentFormButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const DetailCommentFormButton = styled.button`
  padding: 8px 12px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.green};
  border: none;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  :hover {
    opacity: 0.7;
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
  replyList: ReplyListType[];
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
          <DetailCommentFormTitle>{`댓글 ${replyList.length}개`}</DetailCommentFormTitle>
        </DetailCommentFormHeader>
        <textarea
          value={content}
          onChange={handleChange}
          placeholder={'댓글을 입력해 주세요.'}
        />
        <DetailCommentFormButtonWrapper>
          <DetailCommentFormButton>댓글 달기</DetailCommentFormButton>
        </DetailCommentFormButtonWrapper>
      </DetailCommentFormWrapper>
    </>
  );
};

export default DetailCommentForm;
