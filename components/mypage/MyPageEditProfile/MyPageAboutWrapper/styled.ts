import styled from 'styled-components';

export const MyPageAboutEditWrapper = styled.div`
  width: 90%;
`;

export const MyPageAboutEditTitle = styled.h3`
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
`;

export const MyPageAboutEditInput = styled.textarea<{ active: boolean }>`
  width: 100%;
  margin: 1rem 0;
  height: 200px;
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 8px;
  resize: none;
  color: ${(props) => props.theme.colors.tertiary};
  border-radius: 4px;
  outline: none;
  cursor: ${(props) => (props.active ? null : 'default')};

  :focus {
    outline: ${(props) =>
      props.active ? `1px solid ${props.theme.colors.green};` : 'none'};
  }
`;

export const MyPageAboutEditButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MyPageAboutEditButton = styled.button`
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.green};
  cursor: pointer;
`;
