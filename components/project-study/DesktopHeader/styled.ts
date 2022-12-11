import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 68px;
  color: ${(props) => props.theme.colors.primary};
`;

export const HeaderStyled = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 10px;
`;

export const HeaderNavList = styled.ul`
  display: flex;
`;

export const HeaderNavItem = styled.span<{ active: boolean }>`
  padding: 16px 24px;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) =>
    props.active ? props.theme.colors.green : props.theme.colors.primary};
  cursor: pointer;
  border-bottom: ${(props) =>
    props.active ? `2px solid ${props.theme.colors.green}` : null};
  transition: all 0.2s ease-in;
  :hover {
    color: ${(props) => props.theme.colors.green};
  }
`;

export const RecruitButtonWrapper = styled.button`
  padding: 8px 30px;
  color: ${(props) => props.theme.colors.secondary};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  :hover {
    background-color: ${(props) => props.theme.colors.green};
    color: ${(props) => props.theme.colors.white};
  }
`;
