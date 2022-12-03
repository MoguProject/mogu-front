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
import { useEffect, useState } from 'react';
import { axiosInstance, getJWTHeader } from 'axiosInstance';
import { useRouter } from 'next/router';
import { clearToken } from 'utils/setToken';
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
  const router = useRouter();
  const [nickname, setNickname] = useState('');
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [isNotLoggedIn, setIsNotLoggedIn] = useState(false);
  const onClickLogout = () => {
    clearToken();
    localStorage.removeItem('access_token');
    setIsNotLoggedIn(true);
  };
  useEffect(() => {
    const storeageToken = localStorage.getItem('access_token');
    if (storeageToken && !isNotLoggedIn) {
      axiosInstance
        .get('/user/login/info', {
          headers: getJWTHeader(storeageToken),
        })
        .then((response) => {
          setNickname(response.data.nickname);
          setProfileImageUrl(response.data.profileImageUrl);
        });
    } else {
      setIsNotLoggedIn(true);
    }
  }, []);
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
          {nickname && profileImageUrl && !isNotLoggedIn ? (
            <div onClick={onClickLogout}>로그아웃</div>
          ) : null}
          {isNotLoggedIn ? (
            <AuthNavWrapper>
              <li>
                <Link href={'/auth/signup'}>회원가입</Link>
              </li>
              <li>
                <Link href={'/auth/login'}>로그인</Link>
              </li>
            </AuthNavWrapper>
          ) : null}
        </HeaderRight>
      </HeaderStyled>
    </HeaderWrapper>
  );
};

export default Header;
