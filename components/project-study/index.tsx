import { useIsMobile } from '../../hooks/useIsMobile';
import ProjectStudyDesktopHeader from './DesktopHeader';
import styled from 'styled-components';

export const MobileTitle = styled.div`
  width: 100%;
  height: 50px;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  font-weight: 700;
`;
const ProjectStudyHeader = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <MobileTitle>전체 프로젝트 / 스터디</MobileTitle>
      ) : (
        <ProjectStudyDesktopHeader />
      )}
    </>
  );
};

export default ProjectStudyHeader;
