import styled from 'styled-components';
import Link from 'next/link';

export const LoginWrapper = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 471px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  @media screen and (min-width: 768px) {
    width: 472px;
  }
`;

export const LoginTitle = styled.h1`
  font-size: 32px;
  letter-spacing: 0.25px;
  font-weight: 700;
  padding: 10px;
  margin-bottom: 16px;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const LabelStyled = styled.label`
  display: inline-block;
  margin: 8px 0;
  font-size: 12px;
  letter-spacing: 0.25px;
  color: ${(props) => props.theme.colors.secondary};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin: 12px 0;
  }
`;

export const GotoSignup = styled.div`
  font-size: 14px;
  letter-spacing: 0.25%;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const SignupLink = styled(Link)`
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;

export const ForgotUser = styled(Link)`
  font-size: 12px;
  letter-spacing: 0.25%;
  color: ${(props) => props.theme.colors.secondary};
  padding: 5px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const LoginInput = styled.input`
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
    outline: 1px solid ${(props) => props.theme.colors.blue};
  }
`;
