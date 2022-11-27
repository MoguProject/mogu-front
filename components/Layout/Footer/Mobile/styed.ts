import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 180px;
  background-color: ${(props) => props.theme.colors.white};
  border-top: 2px solid ${(props) => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  padding-left: 10px;

  li {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: ${(props) => props.theme.colors.primary};
    display: flex;
    align-items: center;
    padding: 5px 0;
    :first-child {
      margin-top: 10px;
    }
  }
  p {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 5px;
    margin-top: 15px;
  }
`;
