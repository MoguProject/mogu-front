import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { RegistrationButton } from '../styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';

import { Container, ErrMessage, PostRegistrationForm } from './styled';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

// react-quill 컴포넌트 분리 전 코드
const ReactQuillWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export type FormValues = {
  categoryId: string;
  content: string;
  title: string;
};

const CommunityPostRegistration = () => {
  const {
    handleSubmit,
    register,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
  });
  const [content, setContent] = useState('');
  const onChangeContents = (value: string) => {
    setContent(value);
    setValue('content', value);
    trigger('content');
  };
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log('data:', data);
    const formData = new FormData();
    formData.append('categoryId', data.categoryId);
    formData.append('content', data.content);
    formData.append('title', data.title);
    try {
      const response = await axios.post('/posts/create', formData, {
        headers: {
          'Content-Type': 'multipart/formdata',
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h1>글쓰기</h1>
      <PostRegistrationForm
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <select {...register('categoryId')}>
          <option value={1}>팀 프로젝트</option>
          <option value={2}>개인 프로젝트</option>
          <option value={3}>자유로운 글</option>
        </select>
        <input
          type="text"
          placeholder="제목을 작성해주세요."
          {...register('title', { required: true })}
        />
        {errors.title && <ErrMessage>제목을 작성해주세요.</ErrMessage>}
        <ReactQuillWrapper
          onChange={onChangeContents}
          value={content}
          theme="snow"
        />
        <RegistrationButton>등록하기</RegistrationButton>
      </PostRegistrationForm>
    </Container>
  );
};

export default CommunityPostRegistration;
