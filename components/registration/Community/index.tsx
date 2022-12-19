import { RegistrationButton } from '../styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import {
  Container,
  ErrMessage,
  PostRegistrationForm,
  CommunityRegistrationButtonWrapper,
} from './styled';
import 'react-quill/dist/quill.snow.css';
import { axiosInstance } from 'axiosInstance';
import SelectInput from 'components/common/input/SelectInput';
import Registration from '../index';

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
      <PostRegistrationForm onSubmit={handleSubmit(onSubmit)}>
        <SelectInput width={'100%'}>
          <select {...register('categoryId')}>
            <option value={1}>팀 프로젝트</option>
            <option value={2}>개인 프로젝트</option>
            <option value={3}>자유로운 글</option>
          </select>
        </SelectInput>
        {errors.title && <ErrMessage>제목을 작성해주세요.</ErrMessage>}
        <Registration register={register} />
        <CommunityRegistrationButtonWrapper>
          <RegistrationButton>등록하기</RegistrationButton>
        </CommunityRegistrationButtonWrapper>
      </PostRegistrationForm>
    </Container>
  );
};

export default CommunityPostRegistration;
