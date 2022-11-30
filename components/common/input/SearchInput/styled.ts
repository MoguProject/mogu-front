import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
  padding: 4px 12px;
  display: inline-flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  height: 36px;
  margin-left: 12px;
`;

export const SearchIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInputStyled = styled.input`
  margin-left: 10px;
  font-size: 16px;
  letter-spacing: -1%;
  color: ${(props) => props.theme.colors.primary};
  border: none;
  outline: none;
  padding: 0;

  ::placeholder {
    color: #b2b3b9;
  }
`;
