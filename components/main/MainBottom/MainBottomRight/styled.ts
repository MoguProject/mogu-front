import styled from 'styled-components';

export const MainBottomRightWrapper = styled.div`
  width: calc(45% - 36px);
  padding: 36px 0;
  margin-left: 36px;
`;

export const RecommendedTitle = styled.div`
  font-size: 19px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 36px;
`;

export const RecommendedWrapper = styled.div`
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    margin-top: 32px;
  }
`;
