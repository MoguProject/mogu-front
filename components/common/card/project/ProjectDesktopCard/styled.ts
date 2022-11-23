import styled from 'styled-components';

export const ProjectDesktopCardWrapper = styled.div`
  width: 240px;
  height: 330px;
  padding: 10px;
  position: relative;
`;

export const TagsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  div {
    margin-right: 12px;
    margin-top: 8px;
  }
`;

export const ProjectDesktopCardTitle = styled.h2`
  font-size: 14px;
  letter-spacing: 0.25px;
  line-height: 1.25;
  margin-top: 8px;
  color: ${(props) => props.theme.colors.primary};
`;

export const ProjectDesktopCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  position: absolute;
  padding: 10px;
  width: 100%;
  bottom: 0;
  left: 0;
`;
export const TotalUser = styled.div`
  font-size: 12px;
  letter-spacing: 0.25px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const ProjectDesktopCardLike = styled.div`
  display: flex;
  align-items: center;
`;

export const ProjectDesktopCardLikeText = styled.span`
  font-size: 14px;
  letter-spacing: 0.25;
  padding: 5px;
`;
