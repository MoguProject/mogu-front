import AuthButton from 'components/common/button/AuthButton';
import { ChangeEvent, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { authModalState, userCertValue } from 'recoil/atom';
import CloseButton from 'public/images/icon/close.svg';

import {
  AuthModalContent,
  AuthModalStyled,
  AuthModalWrapper,
  CloseButtonWrapper,
  InputStyled,
} from './styled';

const AuthModal = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const [inputValue, setInputValue] = useRecoilState(userCertValue);
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const onClickCloseButton = () => {
    setModalState(false);
  };

  useEffect(() => {
    setInputValue('');
  }, [modalState]);
  return (
    <>
      <AuthModalStyled open={modalState} />
      <AuthModalWrapper open={modalState} tabIndex={-1}>
        <AuthModalContent>
          <CloseButtonWrapper onClick={onClickCloseButton}>
            <CloseButton width={24} height={24} />
          </CloseButtonWrapper>
          <InputStyled
            placeholder="이메일로 발송된 확인코드를 입력 해 주세요."
            onChange={onChangeInput}
            value={inputValue}
          />
          <AuthButton type="submit" disabled={inputValue === ''}>
            가입하기
          </AuthButton>
        </AuthModalContent>
      </AuthModalWrapper>
    </>
  );
};

export default AuthModal;
