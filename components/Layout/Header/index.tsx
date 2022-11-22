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

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderStyled>
        <HeaderLeft>
          <Logo>Mogu</Logo>
          <HeaderNav>
            <HeaderNavList>
              <li>프로젝트 / 스터디</li>
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
