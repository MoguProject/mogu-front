import styled from 'styled-components';

export const CardTagsWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.border};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const CardTagsText = styled.p`
  font-size: 12px;
  letter-spacing: 0.25px;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.colors.primary};
  padding: 4px 5px;
`;
