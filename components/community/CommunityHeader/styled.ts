import styled from 'styled-components';

export const CommunityHeaderWrapper = styled.section`
  width: 100%;
  padding: 10px;
`;

export const CommunityHeaderFilter = styled.div`
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
    props.active ? `2px solid ${props.theme.colors.green}` : 'none'};
`;

export const CommunityHeaderSearch = styled.div`
  display: flex;
  align-items: center;
`;
