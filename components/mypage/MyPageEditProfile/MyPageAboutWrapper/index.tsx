import { useState, useCallback, useEffect, useRef, ChangeEvent } from 'react';
import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetFocus,
} from 'react-hook-form';
import { MyPageEditSubmitData } from 'types';

import {
  MyPageAboutEditButton,
  MyPageAboutEditButtonWrapper,
  MyPageAboutEditInput,
  MyPageAboutEditWrapper,
} from './styled';

interface MyPageAboutProps {
  information: string;
  register: UseFormRegister<any>;
  onSubmit: UseFormHandleSubmit<any>;
  setFocus: UseFormSetFocus<any>;
}

const MyPageAboutWrapper = ({
  information,
  register,
  onSubmit,
  setFocus,
}: MyPageAboutProps) => {
  const [activeAbout, setAciveAbout] = useState(false);
  const submitHandler = (data: MyPageEditSubmitData) => {
    if (!activeAbout) {
      setAciveAbout(true);
      setFocus('information');
    } else {
      if (data['isActivated'] === 'true') {
        data['isActivated'] = true;
      }
      if (data['isActivated'] === 'false') {
        data['isActivated'] = false;
      }
      console.log('수정완료');
      console.log(data);
    }
  };
  return (
    <MyPageAboutEditWrapper onSubmit={onSubmit(submitHandler)}>
      <MyPageAboutEditInput
        readOnly={!activeAbout}
        active={activeAbout}
        {...register('information', { required: true })}
      />
      <MyPageAboutEditButtonWrapper>
        <MyPageAboutEditButton type={'submit'}>
          {activeAbout ? '자기소개 저장' : '자기소개 수정'}
        </MyPageAboutEditButton>
      </MyPageAboutEditButtonWrapper>
    </MyPageAboutEditWrapper>
  );
};

export default MyPageAboutWrapper;
