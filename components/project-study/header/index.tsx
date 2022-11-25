import RegisterButton from '../../common/button/register';
import { HeaderWrapper, HeaderStyled, HeaderNavList } from './styled';
import Link from 'next/link';

const ProjectStudyHeader = () => {
  return (
    <HeaderWrapper>
      <HeaderStyled>
        <nav>
          <HeaderNavList>
            <li>
              <Link href="/projects">전체 프로젝트</Link>
            </li>
            <li>
              <Link href="/study">전체 스터디</Link>
            </li>
          </HeaderNavList>
        </nav>
        <RegisterButton>모집하기</RegisterButton>
      </HeaderStyled>
    </HeaderWrapper>
  );
};

export default ProjectStudyHeader;
