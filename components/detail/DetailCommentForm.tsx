import { axiosInstance } from 'axiosInstance';
import { useMutation, useQueryClient } from 'react-query';
import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useCallback,
  useState,
} from 'react';

import styled from 'styled-components';
import { ReplyListType } from 'types';

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
  input {
    width: 100%;
    height: 100%;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 8px;
  }
`;

const DetailCommentInput = styled.textarea`
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  resize: none;
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

interface bodyType {
  content: string;
  postId: number;
}

const DetailCommentForm = ({
  postId,
  replyList,
}: {
  postId: number;
  replyList: ReplyListType[];
}) => {
  const [comment, setComment] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const queryClient = useQueryClient();
  const mutation = useMutation(
    (commentBody: bodyType) =>
      axiosInstance.post(`/posts/reply/create/super/`, commentBody),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('postDetailData');
      },
    },
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const commentBody = {
      content: comment,
      postId: postId,
    };

    mutation.mutate(commentBody);
    setComment('');
  };

  return (
    <>
      <DetailCommentFormWrapper onSubmit={handleSubmit}>
        <DetailCommentFormHeader>
          <DetailCommentFormTitle>{`댓글 ${replyList.length}`}</DetailCommentFormTitle>
          <DetailCommentFormButton>댓글 달기</DetailCommentFormButton>
        </DetailCommentFormHeader>
        <DetailCommentInput onChange={handleChange} value={comment} />
      </DetailCommentFormWrapper>
    </>
  );
};

export default DetailCommentForm;
