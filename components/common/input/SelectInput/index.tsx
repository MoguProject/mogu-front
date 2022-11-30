import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const SelectInputWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  width: 107px;
  height: 36px;
  position: relative;
  select {
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: relative;
    z-index: 3;
    padding: 4px 16px;
    width: inherit;
    height: inherit;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 4px;
    outline: none;
    font-size: 16px;
    letter-spacing: -1%;
    color: ${(props) => props.theme.colors.primary};
    background: url('/images/icon/caret.svg') no-repeat 90% 50%/10px auto;

    :focus {
      outline: none;
    }
  }
`;
const SelectInput = ({ children }: { children: React.ReactNode }) => {
  return <SelectInputWrapper>{children}</SelectInputWrapper>;
};

export default SelectInput;
