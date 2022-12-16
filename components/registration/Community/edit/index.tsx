import { axiosInstance } from 'axiosInstance';
import { RegistrationButton } from 'components/registration/styled';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import 'react-quill/dist/quill.snow.css';
import { CommunityContentInterface } from 'types';
import { FormValues } from '..';
import { Container, ErrMessage, PostRegistrationForm } from '../styled';
import styled from 'styled-components';

const ReactQuillWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const CommunityPostRegistrationEdit = ({
  data,
}: {
  data: CommunityContentInterface;
}) => {
  console.log('basicData:', data);
  const router = useRouter();
  const {
    handleSubmit,
    register,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
  });
  const [title, setTitle] = useState(data.title);
  const [content, setContent] = useState(data.content);
  const onChangeContents = (value: string) => {
    setContent(value);
    setValue('content', value);
    trigger('content');
  };
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const postId = data.id;
  // 수정하기 기능
  const onUpdateSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log('formData:', data);

    try {
      const response = await axiosInstance.post(
        `/posts/update/${postId}`,
        {
          postId: postId,
          content: data.content,
          title: data.title,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(response);
      router.push('/community');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h1>글쓰기</h1>
      <PostRegistrationForm onSubmit={handleSubmit(onUpdateSubmit)}>
        <input type="text" value={data.categoryName} />
        <input
          type="text"
          placeholder="제목을 작성해주세요."
          defaultValue={title}
          onChange={onChangeTitle}
          {...register('title', { required: true })}
        />
        {errors.title && <ErrMessage>제목을 작성해주세요.</ErrMessage>}
        <ReactQuillWrapper
          onChange={onChangeContents}
          value={content}
          theme="snow"
        />
        <ButtonWrapper>
          <RegistrationEditButton>저장하기</RegistrationEditButton>
          <RegistrationEditButton onClick={() => {}}>
            취소하기
          </RegistrationEditButton>
        </ButtonWrapper>
      </PostRegistrationForm>
    </Container>
  );
};

export default CommunityPostRegistrationEdit;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 30px;
`;
export const RegistrationEditButton = styled.button`
  padding: 8px 30px;
  color: ${(props) => props.theme.colors.secondary};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  width: 150px;
  margin: 20px 0;

  :hover {
    background-color: ${(props) => props.theme.colors.green};
    color: ${(props) => props.theme.colors.white};
  }
`;
