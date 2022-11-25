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
              <li>커뮤니티</li>
            </HeaderNavList>
          </HeaderNav>
        </HeaderLeft>
        <HeaderRight>
          <AuthNavWrapper>
            <li>회원가입</li>
            <li>로그인</li>
          </AuthNavWrapper>
        </HeaderRight>
      </HeaderStyled>
    </HeaderWrapper>
  );
};

export default Header;
