import { MyPageData } from 'pages/mypage';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import useEditProfile from 'utils/hooks/useEditProfile';
import { MyPageWrapper } from '../styled';

const ProfileEditWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const ProfileEditLabel = styled.label`
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.25px;
`;

const ProfileEditInputWrapper = styled.div`
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
`;

const ProfileEditInput = styled.input<{ active: boolean }>`
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 8px;
  color: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.secondary};
  background-color: ${(props) =>
    props.active ? props.theme.colors.white : props.theme.colors.border};
  border-radius: 4px;
  flex: 1;
  cursor: ${(props) => (props.active ? null : 'default')};

  :focus {
    outline: 1px solid
      ${(props) => (props.active ? props.theme.colors.green : 'none')};
  }
`;

const ProfileEditButton = styled.button`
  margin-left: 16px;
  background-color: ${(props) => props.theme.colors.green};
  color: white;
  border-radius: 4px;
  padding: 0 8px;
  transition: all 0.2s ease-in-out;
  :hover {
    opacity: 70%;
  }
`;

const ProfileUserInfoWrapper = styled.div`
  width: 90%;
`;

const ProfileUserInfo = styled.textarea`
  width: 100%;
  margin: 1rem 0;
  height: 200px;
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 8px;
  resize: none;
  color: ${(props) => props.theme.colors.tertiary};
  border-radius: 4px;

  :focus {
    outline: 1px solid ${(props) => props.theme.colors.green};
  }
`;

const ProfileUserInfoEditButton = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.green};
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const MyPageEditProfile = ({ data }: { data: MyPageData }) => {
  console.log(data);
  const [editNickname, onClickEditNickname] = useEditProfile(false);
  const [editName, onClickEditName] = useEditProfile(false);
  const [editPhone, onClickEditPhone] = useEditProfile(false);

  return (
    <MyPageWrapper>
      <ProfileEditWrapper>
        <ProfileEditLabel htmlFor="mypage_nickname">닉네임</ProfileEditLabel>
        <ProfileEditInputWrapper>
          <ProfileEditInput
            type="text"
            id="mypage_nickname"
            value={data.nickname}
            onChange={() => {}}
            readOnly={!editNickname}
            active={editNickname}
          />
          <ProfileEditButton onClick={onClickEditNickname}>
            {editNickname ? '저장하기' : '수정하기'}
          </ProfileEditButton>
        </ProfileEditInputWrapper>
      </ProfileEditWrapper>
      <ProfileEditWrapper>
        <ProfileEditLabel htmlFor="mypage_name">이름</ProfileEditLabel>
        <ProfileEditInputWrapper>
          <ProfileEditInput
            type="text"
            id="mypage_name"
            value={data.name}
            onChange={() => {}}
            readOnly={!editName}
            active={editName}
          />
          <ProfileEditButton onClick={onClickEditName}>
            {editName ? '저장하기' : '수정하기'}
          </ProfileEditButton>
        </ProfileEditInputWrapper>
      </ProfileEditWrapper>
      <ProfileEditWrapper>
        <ProfileEditLabel htmlFor="mypage_phone">핸드폰 번호</ProfileEditLabel>
        <ProfileEditInputWrapper>
          <ProfileEditInput
            type="text"
            id="mypage_phone"
            value={data.phone}
            onChange={() => {}}
            readOnly={!editPhone}
            active={editPhone}
          />
          <ProfileEditButton onClick={onClickEditPhone}>
            {editPhone ? '저장하기' : '수정하기'}
          </ProfileEditButton>
        </ProfileEditInputWrapper>
      </ProfileEditWrapper>
      <ProfileUserInfoWrapper>
        <ProfileUserInfo
          readOnly
          value={
            data.information === 'NOTENTERED'
              ? '작성된 자기소개가 없습니다.'
              : data.information
          }
        />
        <ProfileUserInfoEditButton>자기소개 수정</ProfileUserInfoEditButton>
      </ProfileUserInfoWrapper>
    </MyPageWrapper>
  );
};

export default MyPageEditProfile;
