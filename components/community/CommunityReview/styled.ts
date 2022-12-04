import styled from 'styled-components';

export const CommunityPostReviewList = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
`;

export const CommunityPostReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const CommunityPostReviewHeaderInfo = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    padding: 2px;
    :last-child {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;
