import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 200px;
  background-color: ${(props) => props.theme.colors.white};
  border-top: 2px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.primary};
`;

export const FooterStyled = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px 0;
  padding-left: 10px;
`;

export const FooterLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 5px;
  p {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 5px;
  }
`;
export const FooterRight = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
`;
export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 10px;
`;

export const FooterTitle = styled.span`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  color: ${(props) => props.theme.colors.primary};
`;

export const FooterSubTitle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 6px;

  li {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.secondary};
  }
`;
