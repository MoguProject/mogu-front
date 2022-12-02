import styled from 'styled-components';

export const AuthModalWrapper = styled.div<{ open: boolean }>`
  box-sizing: border-box;
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

export const AuthModalStyled = styled.div<{ open: boolean }>`
  box-sizing: border-box;
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export const AuthModalContent = styled.div`
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
  padding: 80px 40px 40px 40px;
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  font-size: 16px;
  letter-spacing: -1px;
  line-height: 24px;
  border: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  outline: none;

  ::placeholder {
    color: ${(props) => props.theme.colors.tertiary};
  }

  :focus {
    outline: 1px solid ${(props) => props.theme.colors.green};
  }
`;

export const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`;
