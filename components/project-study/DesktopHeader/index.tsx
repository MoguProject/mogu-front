import {
  HeaderWrapper,
  HeaderStyled,
  HeaderNavList,
  RecruitButtonWrapper,
} from './styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ProjectStudyDesktopHeader = () => {
  const router = useRouter();
  return (
    <HeaderWrapper>
      <HeaderStyled>
        <nav>
          <HeaderNavList>
            <li className={router.pathname === '/projects' ? 'active' : ''}>
              <Link href="/projects">프로젝트</Link>
            </li>
            <li className={router.pathname === '/study' ? 'active' : ''}>
              <Link href="/study">스터디</Link>
            </li>
          </HeaderNavList>
        </nav>
        <RecruitButtonWrapper>
          <Link href="/registration">모집하기</Link>
        </RecruitButtonWrapper>
      </HeaderStyled>
    </HeaderWrapper>
  );
};

export default ProjectStudyDesktopHeader;
