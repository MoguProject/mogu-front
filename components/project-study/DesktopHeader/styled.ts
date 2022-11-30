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

  li {
    padding: 0 24px;
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;

    :hover {
      color: ${(props) => props.theme.colors.red};
    }
  }
  li.active {
    color: ${(props) => props.theme.colors.red};
  }
`;