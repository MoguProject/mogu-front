import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div<{ isOpened: boolean }>`
  position: fixed;
  display: ${(props) => (props.isOpened ? 'block' : 'none')};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalContent = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 400px;
  max-width: 520px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 40px 40px 40px;
`;

interface ModalProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

const Modal = ({ state, setState, children }: ModalProps) => {
  return (
    <ModalWrapper isOpened={state}>
      <ModalContent>{children}</ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
