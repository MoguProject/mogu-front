import styled from 'styled-components';

export const CommunityHeaderWrapper = styled.section`
  width: 100%;
  padding: 10px;
`;

export const CommunityHeaderTop = styled.div`
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

export const CommunityHeaderFilter = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommunityHeaderSelect = styled.ul`
  display: flex;
`;

export const CommunityHeaderSelectContent = styled.li<{ active?: boolean }>`
  padding: 10px;
  color: ${(props) => props.theme.colors.primary};
  letter-spacing: 0.5%;
  cursor: pointer;

  border-bottom: ${(props) =>
    props.active ? `2px solid ${props.theme.colors.red}` : 'none'};
`;

export const CommunityHeaderSearch = styled.div`
  display: flex;
  align-items: center;
`;
