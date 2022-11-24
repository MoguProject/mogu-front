import styled from 'styled-components';

export const StudyCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0;
  gap: 10px;
  width: 253px;
  height: 193px;
  padding: 10px;
`;

export const StudyCardTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StudyCardBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.25px;
`;

export const StudyCardSubTitle = styled.h3`
  color: ${(props) => props.theme.colors.green};
  font-size: 12px;
`;

export const StudyCardTitle = styled.h2`
  color: ${(props) => props.theme.colors.dark};
  font-weight: 700;
  font-size: 14px;
`;

export const StudyCardContents = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 12px;
  line-height: 15px;
`;

export const StudyCardMemberNum = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 12px;
`;
