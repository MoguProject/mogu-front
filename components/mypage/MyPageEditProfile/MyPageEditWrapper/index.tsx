import { MyPageData } from 'pages/mypage';
import { useEffect, useState } from 'react';
import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetFocus,
} from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { onEditProfileState } from 'recoil/atom';
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
}

const MyPageEditWrapper = ({ label, id, value, register }: MyPageEditProps) => {
  const [inputValue, setInputValue] = useState(value);
  const [onEdit, setOnEdit] = useRecoilState(onEditProfileState);
  return (
    <MyPageEditWrapperStyled>
      <MyPageEditLabel htmlFor={id}>{label}</MyPageEditLabel>
      <MyPageEditInputWrapper>
        <MyPageEditInput
          type="text"
          id={id}
          defaultValue={inputValue}
          readOnly={!onEdit}
          active={onEdit}
          {...register(id, { required: true })}
        />
      </MyPageEditInputWrapper>
    </MyPageEditWrapperStyled>
  );
};

export default MyPageEditWrapper;
