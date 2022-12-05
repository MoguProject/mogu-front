import { useForm } from 'react-hook-form';
import AuthButton from '../../common/button/AuthButton';
import axios from 'axios';
import {
  LabelStyled,
  LoginInput,
  LoginTitle,
  LoginWrapper,
  SignupLink,
  GotoSignup,
  InputWrapper,
  ForgotUser,
} from './styled';

import { useMutation, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';
import { loginApi } from '../../../utils/apis/user';
import type { LoginSubmitData, UserLoginReturnData } from '../../../types';
import { useRouter } from 'next/router';
const Login = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const loginMutation = useMutation<
    UserLoginReturnData,
    AxiosError,
    LoginSubmitData
  >(loginApi, {
    onSuccess: (res) => {
      queryClient.invalidateQueries(['user']);
      router.push('/');
    },
    onError: (error) => {
      alert(error.response?.data);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<LoginSubmitData>();
  const onSubmit = handleSubmit((data) =>
    loginMutation.mutate({ email: data.email, password: data.password }),
  );

  return (
    <LoginWrapper onSubmit={onSubmit}>
      <LoginTitle>로그인</LoginTitle>
      <InputWrapper>
        <LabelStyled htmlFor="email">이메일</LabelStyled>
        <LoginInput
          placeholder={'이메일을 입력 해 주세요.'}
          id={'email'}
          type={'email'}
          {...register('email', {
            required: true,
          })}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelStyled htmlFor="password">비밀번호</LabelStyled>
        <LoginInput
          placeholder={'비밀번호를 입력 해 주세요.'}
          id={'password'}
          type={'password'}
          {...register('password', {
            required: true,
          })}
        />
      </InputWrapper>
      <AuthButton disabled={!isValid || !isDirty} type={'submit'}>
        로그인
      </AuthButton>
      <GotoSignup>
        계정이 없으신가요?{' '}
        <SignupLink href={'/auth/signup'}>회원가입</SignupLink>
      </GotoSignup>
      <ForgotUser href={'/'}>이메일 / 비밀번호 찾기</ForgotUser>
    </LoginWrapper>
  );
};

export default Login;
