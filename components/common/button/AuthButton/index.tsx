import styled from 'styled-components';

interface AuthButtonType {
  children: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean | undefined;
}

const AuthButtonWrapper = styled.button`
  width: 100%;
  height: 40px;
  letter-spacing: -1%;
  color: #ffffff;
  font-weight: 700;
  background-color: ${(props) => props.theme.colors.blue};
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

const AuthButton = ({ children, type, disabled }: AuthButtonType) => {
  return (
    <AuthButtonWrapper disabled={disabled} type={type}>
      {children}
    </AuthButtonWrapper>
  );
};

export default AuthButton;
