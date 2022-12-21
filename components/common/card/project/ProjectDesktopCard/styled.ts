import styled from 'styled-components';

export const ProjectDesktopCardWrapper = styled.div<{ main: boolean }>`
  width: 240px;
  height: 330px;
  position: relative;
  border-radius: 8px;
  cursor: pointer;
  background-color: white;

  ${(props) =>
    props.main
      ? `
        border: 1px solid ${props.theme.colors.border}
      `
      : `
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

      :hover {
        transform: translateY(-4px);
        transition: all 0.3s ease-in-out;
      }
  `}
`;

export const TagsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0 10px;
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
  padding: 0 10px;
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
  border-top: 1px solid ${(props) => props.theme.colors.border};
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
