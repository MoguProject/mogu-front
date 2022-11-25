import React, { Children } from 'react';
import styled from 'styled-components';

const RegisterBtn = styled.button`
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  padding: 4px 40px;
`;

type ButtonProps = {
  children: string;
  onClick?: () => void;
};

const RegisterButton = ({ children, onClick }: ButtonProps) => {
  return <RegisterBtn onClick={onClick}>{children}</RegisterBtn>;
};

export default RegisterButton;
