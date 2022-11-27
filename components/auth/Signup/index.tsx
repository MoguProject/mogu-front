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

const Signup = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<SignupSubmitData>();

  const onValid = (data: SignupSubmitData) => {
    if (data.password !== data.password_check) {
      setError(
        'password_check',
        { message: '비밀번호가 일치하지 않습니다' },
        { shouldFocus: true },
      );
    } else {
      console.log('회원가입 성공');
    }
  };

  const onSubmit = handleSubmit((data) => onValid(data));
  return (
    <SignupWrapper onSubmit={onSubmit}>
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
        <LabelStyled htmlFor="phone_number">휴대폰 번호</LabelStyled>
        <SignupInput
          placeholder={'- 자를 제외한 휴대폰 번호를 입력 해 주세요'}
          id={'phone_number'}
          type={'number'}
          {...register('phone_number', {
            required: true,
            pattern: {
              value: /01[016789]\d{7,8}/,
              message: '올바론 형식의 전화번호를 입력 해 주세요',
            },
          })}
        />
      </InputWrapper>
      <AuthButton disabled={!isDirty || !isValid} type={'submit'}>
        회원가입
      </AuthButton>
      <GotoLogin>
        이미 계정이 있으신가요?
        <LoginLink href={'/auth/login'}>로그인</LoginLink>
      </GotoLogin>
    </SignupWrapper>
  );
};

export default Signup;
