import styled from 'styled-components';

export const StudyPostWrapper = styled.div`
  width: 465px;
  height: 140px;
  padding: 10px;
  position: relative;
`;

export const StudyPostCategory = styled.p`
  font-size: 14px;
  letter-spacing: 0.25px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const StudyPostTitle = styled.h2`
  font-size: 19px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  padding: 10px 0;
`;

export const StudyPostSummary = styled.p`
  font-size: 14px;
  letter-spacing: 0.25px;
  color: ${(props) => props.theme.colors.secondary};
  line-height: 1.125;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const StudyPostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const StudyPostUser = styled.span`
  font-size: 12px;
  letter-spacing: 0.25px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const StudyPostLike = styled.div`
  display: flex;
  align-items: center;
  span {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 14px;
    letter-spacing: 0.25px;
    padding: 0 5px;
  }
`;
