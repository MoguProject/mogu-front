import { useState, useCallback, useEffect, useRef, ChangeEvent } from 'react';
import { UseFormRegister, UseFormSetFocus } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { onEditProfileState } from 'recoil/atom';
import { MyPageEditSubmitData } from 'types';

import {
  MyPageAboutEditButton,
  MyPageAboutEditButtonWrapper,
  MyPageAboutEditInput,
  MyPageAboutEditTitle,
  MyPageAboutEditWrapper,
} from './styled';

interface MyPageAboutProps {
  information: string;
  register: UseFormRegister<any>;
}

const MyPageAboutWrapper = ({ information, register }: MyPageAboutProps) => {
  const [onEdit, setOnEdit] = useRecoilState(onEditProfileState);
  return (
    <MyPageAboutEditWrapper>
      <MyPageAboutEditTitle>자기소개</MyPageAboutEditTitle>
      <MyPageAboutEditInput
        readOnly={!onEdit}
        active={onEdit}
        {...register('information', { required: true })}
      />
      <MyPageAboutEditButtonWrapper></MyPageAboutEditButtonWrapper>
    </MyPageAboutEditWrapper>
  );
};

export default MyPageAboutWrapper;
