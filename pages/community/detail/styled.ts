import styled from 'styled-components';

export const CommunityHeaderWrapper = styled.section`
  width: 100%;
  padding: 10px;
`;
export const CommunityPostWrapper = styled.div``;
export const CommunityBtnWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: flex-end;
`;

export const CommnityPostEditDeleteButton = styled.button`
  padding: 6px 24px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.blue};
  border: none;
  border-radius: 4px;
  font-weight: 700;
  margin-left: 20px;
  :hover {
    background-color: ${(props) => props.theme.colors.blueDark};
  }
`;

export const CommunityReviewText = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  border: 1px solid ${(props) => props.theme.colors.border};
  :focus {
    outline: none;
  }
`;

export const CommunityPostReviewButton = styled.input`
  padding: 6px 24px;
  color: ${(props) => props.theme.colors.secondary};
  border: none;
  border-radius: 4px;
  font-weight: 700;
  margin-left: 20px;
  :hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
