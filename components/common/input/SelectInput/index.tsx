import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const SelectInputWrapper = styled.div<{ width: string; readOnly?: boolean }>`
  display: inline-flex;
  align-items: center;
  width: ${(props) => `${props.width}`};
  height: 48px;
  position: relative;
  select {
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: relative;
    padding: 4px 14px;
    width: inherit;
    height: inherit;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 4px;
    outline: none;
    font-size: 14px;
    letter-spacing: -1%;
    color: ${(props) => props.theme.colors.primary};
    background: url('/images/icon/caret.svg') no-repeat calc(100% - 20px) 50%/10px
      auto;
    background-color: ${(props) =>
      props.readOnly ? props.theme.colors.border : props.theme.colors.white};

    :focus {
      outline: 1px solid ${(props) => props.theme.colors.green};
    }
  }
`;
const SelectInput = ({
  children,
  width,
  readOnly,
}: {
  children: React.ReactNode;
  width: string;
  readOnly?: boolean;
}) => {
  return (
    <SelectInputWrapper width={width} readOnly={readOnly}>
      {children}
    </SelectInputWrapper>
  );
};

export default SelectInput;
