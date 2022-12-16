import { useForm } from 'react-hook-form';
import AuthButton from '../../common/button/AuthButton';
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
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';
import { createNewPasswordApi, loginApi } from '../../../utils/apis/user';
import type { LoginSubmitData, UserLoginReturnData } from '../../../types';
import Modal from 'components/common/Modal';
import { ChangeEvent, useCallback, useState } from 'react';
import styled from 'styled-components';

const NewPasswordWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    padding: 8px;
    width: 90%;
    height: 38px;
    border: 2px solid ${(props) => props.theme.colors.border};
    border-radius: 4px;
    margin: 6px 0;
    color: ${(props) => props.theme.colors.primary};

    :focus {
      border: 2px solid ${(props) => props.theme.colors.green};
      outline: none;
    }
  }

  button {
    width: 90%;
    padding: 8px;
    color: white;
    background-color: ${(props) => props.theme.colors.green};
    border-radius: 4px;
    margin-top: 8px;
    transition: all 0.2s ease-in-out;
    :hover {
      opacity: 0.7;
    }
  }
`;

const NewPasswordTitle = styled.h2`
  font-size: 18px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
  margin-bottom: 12px;
`;

const NewPasswordErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.red};
  font-weight: 400;
  font-size: 12px;
`;

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
    register: loginRegister,
    handleSubmit: loginHandleSubmit,
    formState: { isDirty, isValid },
  } = useForm<LoginSubmitData>();
  const onSubmit = loginHandleSubmit((data) =>
    loginMutation.mutate({ email: data.email, password: data.password }),
  );

  const [modalState, setModalState] = useState(false);
  const [newPassworEmail, setNewPasswordEmail] = useState('');
  const [newPasswordName, setNewPasswordName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeNewPasswordEamil = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setNewPasswordEmail(e.target.value);
    },
    [],
  );

  const onChangeNewPasswordName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setNewPasswordName(e.target.value);
    },
    [],
  );

  const newPasswordMutation = useMutation(createNewPasswordApi);

  const onClickNewPassword = () => {
    setErrorMessage('');
    if (newPassworEmail === '' || newPasswordName === '') {
      return setErrorMessage('이메일 혹은 이름을 입력해주세요.');
    }
    newPasswordMutation.mutate(
      { email: newPassworEmail, name: newPasswordName },
      {
        onSuccess: () => {
          alert(
            '가입하신 이메일로 임시비밀번호가 발급 되었습니다. 로그인 후 비밀번호를 변경해 주세요.',
          );
          setModalState(false);
        },
        onError: (err: any) => {
          setErrorMessage(err.response.data);
        },
      },
    );
  };

  return (
    <>
      <LoginWrapper onSubmit={onSubmit}>
        <LoginTitle>로그인</LoginTitle>
        <InputWrapper>
          <LabelStyled htmlFor="email">이메일</LabelStyled>
          <LoginInput
            placeholder={'이메일을 입력 해 주세요.'}
            id={'email'}
            type={'email'}
            {...loginRegister('email', {
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
            {...loginRegister('password', {
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
      <Modal state={modalState} setState={setModalState}>
        <NewPasswordWrapper>
          <NewPasswordTitle>새로운 비밀번호 발급하기</NewPasswordTitle>
          <input
            type={'email'}
            placeholder="이메일을 입력해 주세요."
            value={newPassworEmail}
            onChange={onChangeNewPasswordEamil}
          />
          <input
            placeholder="이름을 입력해 주세요."
            value={newPasswordName}
            onChange={onChangeNewPasswordName}
          />
          {errorMessage !== '' && (
            <NewPasswordErrorMessage>{errorMessage}</NewPasswordErrorMessage>
          )}
          <button type="button" onClick={onClickNewPassword}>
            발급하기
          </button>
        </NewPasswordWrapper>
      </Modal>
    </>
  );
};

export default Login;
