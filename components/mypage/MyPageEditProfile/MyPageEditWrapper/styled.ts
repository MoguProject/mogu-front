import styled from 'styled-components';

export const MyPageEditWrapperStyled = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const MyPageEditLabel = styled.label`
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.25px;
`;

export const MyPageEditInputWrapper = styled.div`
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
`;

export const MyPageEditInput = styled.input<{ active: boolean }>`
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 8px 16px;
  color: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.secondary};
  background-color: ${(props) =>
    props.active ? props.theme.colors.white : props.theme.colors.border};
  border-radius: 4px;
  flex: 1;
  cursor: ${(props) => (props.active ? null : 'default')};

  :focus {
    outline: 1px solid
      ${(props) => (props.active ? props.theme.colors.green : 'none')};
  }
`;

export const MyPageEditButton = styled.button<{ active: boolean }>`
  margin-left: 16px;
  background-color: ${(props) =>
    props.active ? props.theme.colors.red : props.theme.colors.green};
  color: white;
  border-radius: 4px;
  padding: 0 8px;
  transition: all 0.2s ease-in-out;
  :hover {
    opacity: 70%;
  }
`;
