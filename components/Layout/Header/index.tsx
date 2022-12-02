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
import useIsLoggedIn from 'hooks/useIsLoggedIn';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

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
  const isLoggedIn = useIsLoggedIn();
  const [userNickname, setUserNickname] = useState('');
  const [userProfileImageUrl, setUserProfileImageUrl] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      const user = localStorage.getItem('user');
      const { nickname, profileImageUrl } = JSON.parse(user || '{}');
      console.log(nickname, profileImageUrl);
      setUserNickname(nickname);
      setUserProfileImageUrl(profileImageUrl);
    }
  }, [userNickname, userProfileImageUrl, isLoggedIn]);

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
          {isLoggedIn ? (
            <ProfileCardImage>
              <Image
                src={userProfileImageUrl}
                alt={'프로필사진'}
                width={32}
                height={32}
              />
            </ProfileCardImage>
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
