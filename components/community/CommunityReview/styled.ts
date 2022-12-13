import styled from 'styled-components';

export const CommunityPostReviewList = styled.div`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
`;

export const CommunityPostReviewHeader = styled.div`
  margin-bottom: 10px;
  span {
    font-weight: 500;
  }
`;

export const CommunityPostReviewBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;

  span {
    padding: 2px;
    color: ${(props) => props.theme.colors.secondary};
  }

  button {
    background-color: ${(props) => props.theme.colors.blueLight};
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 4px;
    padding: 5px;
  }
`;
