import { useForm } from 'react-hook-form';
import AuthButton from '../../common/button/AuthButton';

import {
  LabelStyled,
  LoginLink,
  GotoLogin,
  SignupInput,
  SignupTitle,
  SignupWrapper,
  InputWrapper,
  ErrorMessage,
} from './styled';

import type { SignupSubmitData } from '../../../types';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { emailCertificateApi, signupApi } from 'utils/apis/user';
import AuthModal from '../AuthModal';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { eamilCertState, authModalState, userCertValue } from 'recoil/atom';
import { useEffect } from 'react';

const Signup = () => {
  const [, setModalState] = useRecoilState(authModalState);
  const [emailCert, setEmailCert] = useRecoilState(eamilCertState);
  const [userCert, setUserCert] = useRecoilState(userCertValue);

  const resetEmailCert = useResetRecoilState(eamilCertState);

  const emailCertificateMutation = useMutation(emailCertificateApi, {
    onSuccess: (data) => {
      console.log(data);
      setEmailCert(data);
    },
  });

  const signupMutation = useMutation<{}, AxiosError, SignupSubmitData>(
    signupApi,
    {
      onSuccess: (data) => {
        console.log('회원가입 성공');
        console.log(data);
      },
      onError: (error) => {
        alert(error.response?.data);
        setModalState(false);
      },
    },
  );

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm<SignupSubmitData>();

  const onValid = (data: SignupSubmitData) => {
    const { password, email, name, nickname, phone } = data;
    if (emailCert === userCert) {
      signupMutation.mutate({ email, name, nickname, password, phone });
    } else {
      alert('코드가 일치하지 않습니다.');
    }
  };

  const onSubmit = handleSubmit((data) => onValid(data));
  const onClickButton = () => {
    const emailValue = getValues('email');
    const passwordValue = getValues('password');
    const passwordCheckValue = getValues('password_check');
    if (passwordValue !== passwordCheckValue) {
      setError(
        'password_check',
        { message: '비밀번호가 일치하지 않습니다' },
        { shouldFocus: true },
      );
    } else {
      setModalState(true);
      emailCertificateMutation.mutate(emailValue);
    }
  };

  useEffect(() => {
    setModalState(false), resetEmailCert(), setUserCert('');
  }, []);
  return (
    <form onSubmit={onSubmit}>
      <SignupWrapper>
        <SignupTitle>회원가입</SignupTitle>
        <InputWrapper>
          <LabelStyled htmlFor="email">이메일</LabelStyled>
          <SignupInput
            placeholder={'이메일을 입력 해 주세요.'}
            id={'email'}
            type={'email'}
            {...register('email', {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: '올바른 이메일 형식을 입력 해 주세요',
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <LabelStyled htmlFor="nickname">닉네임</LabelStyled>
          <SignupInput
            placeholder={'3자 이상, 사용할 닉네임을 입력 해 주세요.'}
            id={'nickname'}
            type={'text'}
            maxLength={20}
            {...register('nickname', {
              minLength: {
                value: 3,
                message: '닉네임을 3자 이상 입력 해 주세요.',
              },
            })}
          />
          {errors.nickname && (
            <ErrorMessage>{errors.nickname.message}</ErrorMessage>
          )}
        </InputWrapper>
        <InputWrapper>
          <LabelStyled htmlFor="name">이름</LabelStyled>
          <SignupInput
            placeholder={'2자 이상 이름을 입력 해 주세요.'}
            id={'name'}
            type={'text'}
            minLength={2}
            {...register('name', {
              minLength: {
                value: 2,
                message: '이름을 2자 이상 입력 해 주세요.',
              },
            })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </InputWrapper>

        <InputWrapper>
          <LabelStyled htmlFor="password">비밀번호</LabelStyled>
          <SignupInput
            placeholder={'8자 이상, 영문/숫자/특수문자 중 2가지 이상 입력'}
            id={'password'}
            type={'password'}
            {...register('password', {
              required: true,
              pattern: {
                value:
                  /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,}$/,
                message:
                  '8자 이상, 영문/숫자/특수문자 중 2가지 이상 입력해주세요',
              },
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </InputWrapper>
        <InputWrapper>
          <LabelStyled htmlFor="password_check">비밀번호 확인</LabelStyled>
          <SignupInput
            placeholder={'동일한 비밀번호를 입력 해 주세요.'}
            id={'password_check'}
            type={'password'}
            {...register('password_check', {
              required: true,
            })}
          />
          {errors.password_check && (
            <ErrorMessage>{errors.password_check.message}</ErrorMessage>
          )}
        </InputWrapper>
        <InputWrapper>
          <LabelStyled htmlFor="phone">휴대폰 번호</LabelStyled>
          <SignupInput
            placeholder={'- 자를 제외한 휴대폰 번호를 입력 해 주세요'}
            id={'phone'}
            type={'string'}
            {...register('phone', {
              required: true,
              pattern: {
                value: /01[016789]\d{7,8}/,
                message: '올바론 형식의 전화번호를 입력 해 주세요',
              },
            })}
          />
        </InputWrapper>
        <AuthButton
          disabled={!isDirty || !isValid}
          type={'button'}
          onClick={onClickButton}
        >
          이메일 인증하기
        </AuthButton>
        <GotoLogin>
          이미 계정이 있으신가요?
          <LoginLink href={'/auth/login'}>로그인</LoginLink>
        </GotoLogin>
      </SignupWrapper>
      <AuthModal />
    </form>
  );
};

export default Signup;
