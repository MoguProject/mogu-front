import React, { useState } from 'react';
import { RegistrationButton } from '../styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import { Container, ErrMessage, PostRegistrationForm } from './styled';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import ReactQuillEditor from '../Editor';
import { getPostDataApi } from 'utils/apis/posts';
import { axiosInstance } from 'axiosInstance';

export type FormValues = {
  categoryId: string;
  content: string;
  title: string;
};

const CommunityPostRegistration = () => {
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

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log('data:', data);
    try {
      const response = await axiosInstance.post(
        '/posts/create',
        {
          categoryId: data.categoryId,
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
      <PostRegistrationForm onSubmit={handleSubmit(onSubmit)}>
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
        <ReactQuillEditor setValue={setValue} trigger={trigger} />
        <RegistrationButton>등록하기</RegistrationButton>
      </PostRegistrationForm>
    </Container>
  );
};

export default CommunityPostRegistration;
