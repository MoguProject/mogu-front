import { MyPageData } from 'pages/mypage';
import { useEffect, useState } from 'react';
import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetFocus,
} from 'react-hook-form';
import { MyPageEditSubmitData } from 'types';
import {
  MyPageEditButton,
  MyPageEditInput,
  MyPageEditInputWrapper,
  MyPageEditLabel,
  MyPageEditWrapperStyled,
} from './styled';

interface MyPageEditProps {
  label: string;
  id: string;
  value: string;
  register: UseFormRegister<any>;
  onSubmit: UseFormHandleSubmit<any>;
  setFocus: UseFormSetFocus<any>;
}

const MyPageEditWrapper = ({
  label,
  id,
  value,
  register,
  onSubmit,
  setFocus,
}: MyPageEditProps) => {
  const [inputValue, setInputValue] = useState(value);
  const [editProfile, setEditProfile] = useState(false);
  const submitHandler = (data: MyPageEditSubmitData) => {
    if (!editProfile) {
      setEditProfile((prev) => !prev);
      setFocus(id);
      return;
    } else {
      if (data['isActivated'] === 'true') {
        data['isActivated'] = true;
      }
      if (data['isActivated'] === 'false') {
        data['isActivated'] = false;
      }
      console.log('수정완료!');
      console.log(data);
      setEditProfile((prev) => !prev);
    }
  };
  return (
    <MyPageEditWrapperStyled onSubmit={onSubmit(submitHandler)}>
      <MyPageEditLabel htmlFor={id}>{label}</MyPageEditLabel>
      <MyPageEditInputWrapper>
        <MyPageEditInput
          type="text"
          id={id}
          defaultValue={inputValue}
          readOnly={!editProfile}
          active={editProfile}
          {...register(id, { required: true })}
        />
        <MyPageEditButton type={'submit'} active={editProfile}>
          {editProfile ? '저장하기' : '수정하기'}
        </MyPageEditButton>
      </MyPageEditInputWrapper>
    </MyPageEditWrapperStyled>
  );
};

export default MyPageEditWrapper;
