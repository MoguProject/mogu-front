import RegisterButton from '../../common/button/register';
import { HeaderWrapper, HeaderStyled, HeaderNavList } from './styled';
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
        <RegisterButton>모집하기</RegisterButton>
      </HeaderStyled>
    </HeaderWrapper>
  );
};

export default ProjectStudyDesktopHeader;
