import styled from 'styled-components';

export const ProjectMobilCardWrapper = styled.div`
  width: 253px;
  height: 336px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  cursor: pointer;
`;

export const ProjectMobileCardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProjectMobileCardImageWrapper = styled.div`
  margin: 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectMobileCardTitle = styled.h2`
  font-size: 14px;
  letter-spacing: 0.25px;
  line-height: 1.25;
  color: ${(props) => props.theme.colors.primary};
  padding: 10px 5px;
`;

export const TagsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  div {
    margin-right: 12px;
  }
`;

export const TotalUser = styled.div`
  font-size: 12px;
  letter-spacing: 0.25px;
  color: ${(props) => props.theme.colors.secondary};
  position: absolute;
  bottom: 20px;
  left: 10px;
`;
