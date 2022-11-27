import styled from 'styled-components';

export const ProjectPostWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 140px;
  padding: 10px;
`;

export const ProjectPostLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectPostRight = styled.div`
  position: relative;
  margin-left: 10px;
`;

export const ProjectPostTags = styled.span`
  display: block;
  font-size: 14px;
  letter-spacing: 0.25px;
  color: ${(props) => props.theme.colors.green};
  padding: 5px 0;
`;

export const ProjectPostTitle = styled.h2`
  width: 335px;
  font-size: 19px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px 0;
`;

export const ProjectPostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px 0;
`;

export const ProjectPostUser = styled.span`
  font-size: 12px;
  letter-spacing: 0.25px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const ProjectPostIconWrapper = styled.div`
  display: flex;
`;

export const ProjectPostIcon = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 14px;
    letter-spacing: 0.25px;
    padding: 0 5px;
  }
`;
