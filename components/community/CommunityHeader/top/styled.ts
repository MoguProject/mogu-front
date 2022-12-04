import styled from 'styled-components';

export const CommunityHeaderTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const CommunityHeaderWrite = styled.button`
  padding: 6px 24px;
  color: ${(props) => props.theme.colors.white};
  border: none;
  background-color: ${(props) => props.theme.colors.green};
  border-radius: 4px;
  font-weight: 700;
`;

export const CommunityHeaderTitle = styled.h1`
  font-size: 21px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;
