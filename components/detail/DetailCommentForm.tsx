import { axiosInstance } from 'axiosInstance';
import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useCallback,
  useState,
} from 'react';
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
`;

const DetailCommentInput = styled.textarea`
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  resize: none;
`;

const DetailCommentForm = ({
  isLoggedIn,
  postId,
}: {
  isLoggedIn: boolean;
  postId: number;
}) => {
  const [content, setContent] = useState('');
  const onChangeValue = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(content);
    const res = await axiosInstance.post(
      'http://localhost:3000/posts/reply/create/super',
      {
        content,
        postId,
      },
    );
    console.log(res.data);
  };
  return (
    <>
      <DetailCommentFormTitle>댓글</DetailCommentFormTitle>
      <DetailCommentFormWrapper onSubmit={onSubmit}>
        <DetailCommentInput onChange={onChangeValue} value={content} />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button>댓글 등록</button>
        </div>
      </DetailCommentFormWrapper>
    </>
  );
};

export default DetailCommentForm;
