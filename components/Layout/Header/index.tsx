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
import Image from 'next/image';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { loadMyInfo } from 'utils/apis/user';
const ProfileCardImage = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  img {
    border-radius: 50%;
  }
`;

const Header = () => {
  const { data } = useQuery(['user'], loadMyInfo, {
    retry: false,
    refetchOnWindowFocus: false,
  });
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
                <Link href="/community/category/1">커뮤니티</Link>
              </li>
            </HeaderNavList>
          </HeaderNav>
        </HeaderLeft>
        <HeaderRight>
          {data ? (
            <div>로그아웃</div>
          ) : (
            <AuthNavWrapper>
              <li>
                <Link href={'/auth/signup'}>회원가입</Link>
              </li>
              <li>
                <Link href={'/auth/login'}>로그인</Link>
              </li>
            </AuthNavWrapper>
          )}
        </HeaderRight>
      </HeaderStyled>
    </HeaderWrapper>
  );
};

export default Header;
