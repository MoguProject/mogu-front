import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { onEditProfileState } from 'recoil/atom';
import styled from 'styled-components';

import {
  MyPageEditButton,
  MyPageEditInputWrapper,
  MyPageEditLabel,
  MyPageEditWrapperStyled,
} from '../MyPageEditWrapper/styled';

const MyPagePasswordForm = styled.div`
  width: 90%;
  margin-top: 8px;
`;

const MyPagePasswordEditWrapper = styled(MyPageEditWrapperStyled)`
  width: 100%;
`;

const MyPagePasswordDefalt = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 10px 16px;
  flex: 1;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.border};
  border-radius: 4px;
`;

const MyPagePasswordInput = styled.input`
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 10px 16px;
  flex: 1;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.white};
  margin-bottom: 12px;
  border-radius: 4px;
`;

const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.red};
  font-size: 12px;
`;

const MyPagePasswordEditButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MyPagePasswordEditButton = styled.button<{ cancle?: boolean }>`
  margin-top: 8px;
  padding: 8px 12px;
  border-radius: 4px;
  color: ${(props) =>
    props.cancle ? props.theme.colors.red : props.theme.colors.green};
  transition: all 0.2s ease-in;

  :hover {
    background-color: ${(props) => props.theme.colors.border};
  }

  :last-child {
    margin-left: 8px;
  }
`;

const MyPagePasswordWrapper = () => {
  const [editActive, setEditActive] = useState(false);
  const [onEdit, setOnEdit] = useRecoilState(onEditProfileState);

  const onClickEditButton = useCallback(() => {
    setEditActive(true);
  }, [editActive]);

  const onClickCancelButton = useCallback(() => {
    setEditActive(false);
  }, [editActive]);

  const { register, handleSubmit } = useForm();

  return (
    <MyPagePasswordForm>
      <MyPagePasswordEditWrapper>
        <MyPageEditLabel>비밀번호 변경</MyPageEditLabel>
        <MyPageEditInputWrapper>
          <MyPagePasswordDefalt>********</MyPagePasswordDefalt>
          {!editActive && (
            <MyPageEditButton active={false} onClick={onClickEditButton}>
              변경하기
            </MyPageEditButton>
          )}
        </MyPageEditInputWrapper>
        {editActive && (
          <>
            <MyPagePasswordInput
              placeholder="현재 사용중인 비밀번호를 입력해 주세요."
              type={'password'}
              {...register('currentPassword', {
                required: true,
              })}
            />
            <MyPagePasswordInput
              placeholder="변경할 비밀번호를 입력해 주세요"
              type={'password'}
              {...register('newPassword', {
                required: true,
              })}
            />
            {/* <ErrorMessage>
            8자 이상, 영문/숫자/특수문자 중 2가지 이상 입력해주세요
          </ErrorMessage> */}
            <MyPagePasswordEditButtonWrapper>
              <MyPagePasswordEditButton
                cancle={true}
                onClick={onClickCancelButton}
              >
                변경취소
              </MyPagePasswordEditButton>
              <MyPagePasswordEditButton>저장하기</MyPagePasswordEditButton>
            </MyPagePasswordEditButtonWrapper>
          </>
        )}
      </MyPagePasswordEditWrapper>
    </MyPagePasswordForm>
  );
};

export default MyPagePasswordWrapper;
