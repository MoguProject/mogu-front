import React, { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { RegistrationButton } from '../styled';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

const CommunityPostRegistration = () => {
  const {
    handleSubmit,
    register,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const [content, setContent] = useState('');
  const onChangeContents = (value: string) => {
    setContent(value);
    setValue('content', value);
    trigger('content');
  };
  const onSubmit = async (data) => {
    console.log('data:', data);
    const formData = new FormData();
    formData.append('categoryId', data.categoryId);
    formData.append('content', data.content);
    formData.append('title', data.title);
    console.log('formData:', formData);

    await axios
      .post('http://13.124.27.209:8080/posts/create', formData, {
        headers: {
          'Content-Type': 'multipart/formdata',
        },
      })
      .then((response) => {
        response.data;
        console.log('response.data:', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>글쓰기</h1>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
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
        {errors.title && <p>제목을 작성해주세요.</p>}
        <ReactQuill onChange={onChangeContents} value={content} />
        <RegistrationButton>등록하기</RegistrationButton>
      </form>
    </>
  );
};

export default CommunityPostRegistration;
