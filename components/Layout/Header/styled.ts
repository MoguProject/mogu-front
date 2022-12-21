import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 68px;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: 2px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.primary};
`;
// 상단 고정 필요

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

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderRight = styled.div``;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

export const HeaderNav = styled.nav`
  margin-left: 20px;
`;

export const HeaderNavList = styled.ul`
  display: flex;

  li {
    padding: 0 24px;
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;

    :nth-child(1) {
      color: ${(props) => props.theme.colors.red};
    } // 나중에 Active시 색상변경으로 업데이트 예정
  }
`;

export const AuthNavWrapper = styled.ul`
  display: flex;

  li {
    padding: 0 14px;
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;

    :hover {
      color: ${(props) => props.theme.colors.green};
    }
  }
`;
