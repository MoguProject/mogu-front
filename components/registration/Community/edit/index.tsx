import { axiosInstance } from 'axiosInstance';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CommunityContentInterface } from 'types';
import { FormValues } from '..';
import { Container, ErrMessage, PostRegistrationForm } from '../styled';
import styled from 'styled-components';
import ReactCommunityQuillEditor from 'components/registration/Editor/community';

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

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const postId = data.id;

  // 취소하기 기능
  const onHandleCancle = () => {
    console.log(data.title);
    setTitle(data.title);
    setContent(data.content);
  };

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
        <ReactCommunityQuillEditor
          text={content}
          setValue={setValue}
          trigger={trigger}
        />
        <ButtonWrapper>
          <RegistrationEditButton>저장하기</RegistrationEditButton>
        </ButtonWrapper>
      </PostRegistrationForm>
      <ButtonWrapper>
        <RegistrationCancleButton onClick={onHandleCancle}>
          취소하기
        </RegistrationCancleButton>
      </ButtonWrapper>
    </Container>
  );
};

export default CommunityPostRegistrationEdit;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const RegistrationEditButton = styled.button`
  padding: 8px 30px;
  color: ${(props) => props.theme.colors.secondary};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  width: 150px;
  bottom: 0;
  position: relative;
  right: 200px;
  :hover {
    background-color: ${(props) => props.theme.colors.green};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const RegistrationCancleButton = styled.button`
  padding: 8px 30px;
  color: ${(props) => props.theme.colors.secondary};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  width: 150px;
  position: relative;
  top: -54px;

  :hover {
    background-color: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.white};
  }
`;
