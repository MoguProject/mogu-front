import { RegistrationButton } from '../styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Container, ErrMessage, PostRegistrationForm } from './styled';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import ReactQuillEditor from '../Editor';
import { axiosInstance } from 'axiosInstance';
import SelectInput from 'components/common/input/SelectInput';
import Registration from '../index';

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
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <PostRegistrationForm onSubmit={handleSubmit(onSubmit)}>
        {/* <SelectInput width="80%">
          <select {...register('categoryId')}>
            <option value={1}>팀 프로젝트</option>
            <option value={2}>개인 프로젝트</option>
            <option value={3}>자유로운 글</option>
          </select>
        </SelectInput> */}
        <Registration register={register} />
      </PostRegistrationForm>
    </Container>
  );
};

export default CommunityPostRegistration;
