import styled from 'styled-components';


export const CardStateWrapper = styled.div<{state: boolean}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${(props) =>
    props.state ? props.theme.colors.green : props.theme.colors.red};
`;

export const CardStateText = styled.p`
  color: #ffffff;
  font-size: 12px;
  letter-spacing: 0.75px;
  padding: 2px 8px;
`;