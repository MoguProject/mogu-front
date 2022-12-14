import { ChangeEvent, useCallback, useState } from 'react';
import { ChangeHandler, useForm } from 'react-hook-form';
import { QueryClient, useMutation, useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';
import { onEditProfileState } from 'recoil/atom';
import styled from 'styled-components';
import { myPageChangePasswordApi } from 'utils/apis/user';

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
  const queryClient = useQueryClient();
  const [editActive, setEditActive] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [onEdit, setOnEdit] = useRecoilState(onEditProfileState);
  const updatePasswordMutation = useMutation(myPageChangePasswordApi, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(['mypageData']);
    },
    onError: (error) => {
      console.log(error);
      alert(error);
    },
  });

  const onClickEditButton = useCallback(() => {
    setEditActive(true);
  }, [editActive]);

  const onClickCancelButton = useCallback(() => {
    setCurrentPassword('');
    setNewPassword('');
    setEditActive(false);
  }, [editActive]);

  const onChangeCurrentPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(e.target.value);
  };

  const onChangeNewPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const onClickEditPassword = () => {
    updatePasswordMutation.mutate({ currentPassword, newPassword });
  };

  return (
    <MyPagePasswordForm>
      <MyPagePasswordEditWrapper>
        <MyPageEditLabel>???????????? ??????</MyPageEditLabel>
        <MyPageEditInputWrapper>
          <MyPagePasswordDefalt>********</MyPagePasswordDefalt>
          {!editActive && (
            <MyPageEditButton active={false} onClick={onClickEditButton}>
              ????????????
            </MyPageEditButton>
          )}
        </MyPageEditInputWrapper>
        {editActive && (
          <>
            <MyPagePasswordInput
              placeholder="?????? ???????????? ??????????????? ????????? ?????????."
              type={'password'}
              value={currentPassword}
              onChange={onChangeCurrentPassword}
            />
            <MyPagePasswordInput
              placeholder="????????? ??????????????? ????????? ?????????"
              type={'password'}
              value={newPassword}
              onChange={onChangeNewPassword}
            />
            {/* <ErrorMessage>
            8??? ??????, ??????/??????/???????????? ??? 2?????? ?????? ??????????????????
          </ErrorMessage> */}
            <MyPagePasswordEditButtonWrapper>
              <MyPagePasswordEditButton
                cancle={true}
                onClick={onClickCancelButton}
              >
                ????????????
              </MyPagePasswordEditButton>
              <MyPagePasswordEditButton
                type={'button'}
                onClick={onClickEditPassword}
              >
                ????????????
              </MyPagePasswordEditButton>
            </MyPagePasswordEditButtonWrapper>
          </>
        )}
      </MyPagePasswordEditWrapper>
    </MyPagePasswordForm>
  );
};

export default MyPagePasswordWrapper;
