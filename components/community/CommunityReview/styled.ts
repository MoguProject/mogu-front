import styled from 'styled-components';

export const CommunityPostReviewList = styled.div`
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
  padding: 10px;
  margin-bottom: 8px;
`;

export const CommunityPostReviewHeader = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: flex-end;

  span {
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
    margin-right: 6px;
  }

  div {
    font-size: 12px;
    color: ${(props) => props.theme.colors.tertiary};
  }
`;

export const CommunityPostReviewBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;

  span {
    padding: 2px;
    font-size: 14px;
    color: ${(props) => props.theme.colors.primary};
  }

  button {
    color: ${(props) => props.theme.colors.primary};
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
    :hover {
      color: ${(props) => props.theme.colors.green};
    }
  }
`;
