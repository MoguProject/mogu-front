import styled from 'styled-components';

interface AuthButtonType {
  children: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean | undefined;
  onClick?: () => void;
}

const AuthButtonWrapper = styled.button`
  width: 100%;
  height: 40px;
  letter-spacing: -1%;
  color: #ffffff;
  font-weight: 700;
  background-color: ${(props) => props.theme.colors.green};
  border-radius: 4px;
  border: none;
  outline: none;
  margin: 24px 0;
  transition: all 0.2s ease-in;
  :hover {
    opacity: 80%;
  }

  :disabled {
    opacity: 40%;
    cursor: default;
  }
`;

const AuthButton = ({ children, type, disabled, onClick }: AuthButtonType) => {
  return (
    <AuthButtonWrapper disabled={disabled} type={type} onClick={onClick}>
      {children}
    </AuthButtonWrapper>
  );
};

export default AuthButton;
