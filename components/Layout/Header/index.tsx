import {
  HeaderWrapper,
  HeaderStyled,
  HeaderLeft,
  Logo,
  HeaderNav,
  HeaderNavList,
  HeaderRight,
  AuthNavWrapper,
} from './styled';
import Link from 'next/link';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderStyled>
        <HeaderLeft>
          <Logo>
            <Link href="/">Mogu</Link>
          </Logo>
          <HeaderNav>
            <HeaderNavList>
              <li>
                <Link href="/projects">프로젝트 / 스터디</Link>
              </li>
              <li>
                <Link href="/community">커뮤니티</Link>
              </li>
            </HeaderNavList>
          </HeaderNav>
        </HeaderLeft>
        <HeaderRight>
          <AuthNavWrapper>
            <li>
              <Link href={'/auth/signup'}>회원가입</Link>
            </li>
            <li>
              <Link href={'/auth/login'}>로그인</Link>
            </li>
          </AuthNavWrapper>
        </HeaderRight>
      </HeaderStyled>
    </HeaderWrapper>
  );
};

export default Header;
