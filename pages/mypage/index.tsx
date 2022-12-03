import axios from 'axios';
import Layout from 'components/Layout';
import MyPageComment from 'components/mypage/MyPageComment';
import MyPageEditProfile from 'components/mypage/MyPageEditProfile';
import MyPageLiked from 'components/mypage/MyPageLiked';
import MyPageProjectStudy from 'components/mypage/MyPageProjectStudy';
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import cookies from 'next-cookies';
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { myPageUserState } from 'recoil/atom';
import styled from 'styled-components';
import { getMyPageUserDataApi } from 'utils/apis/user';

export interface MyPageData {
  profileImageUrl: string;
  email: string;
  name: string;
  nickname: string;
  phone: string;
  preferredMethod: string;
  region: string;
  information: string;
  skills: string[];
  activated: boolean;
}

const MyPageWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 10px;
`;

const MyPageTopSection = styled.section`
  padding: 2rem 0 4rem 0;
  border-bottom: 3px solid ${(props) => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const MyPageNav = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const MyPageNavItem = styled.li<{ active?: boolean }>`
  padding: 8px 12px;
  color: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.secondary};
  border-bottom: ${(props) =>
    props.active ? `2px solid ${props.theme.colors.green}` : 'none'};
`;

const ProfileImageWrapper = styled.div`
  img {
    border-radius: 50%;
  }
`;

const ProfileNickname = styled.h2`
  font-size: 18px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  margin: 1rem 0;
`;

const ProfileImageEditButton = styled.button`
  font-size: 16px;
  font-weight: 700;
  background-color: ${(props) => props.theme.colors.green};
  color: #ffffff;
  padding: 6px 16px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  :hover {
    opacity: 70%;
  }
`;

const MyPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [activeEditProfile, setActiveEditProfile] = useState(true);
  const [activeProjectStudy, setActiveProjectStudy] = useState(false);
  const [activeLiked, setActiveLiked] = useState(false);
  const [activeComment, setActiveComment] = useState(false);

  const onClickEditProfile = useCallback(() => {
    setActiveEditProfile(true);
    setActiveProjectStudy(false);
    setActiveLiked(false);
    setActiveComment(false);
  }, []);

  const onClickProjectStudy = useCallback(() => {
    setActiveEditProfile(false);
    setActiveProjectStudy(true);
    setActiveLiked(false);
    setActiveComment(false);
  }, []);

  const onClickLiked = useCallback(() => {
    setActiveEditProfile(false);
    setActiveProjectStudy(false);
    setActiveLiked(true);
    setActiveComment(false);
  }, []);

  const onClickComment = useCallback(() => {
    setActiveEditProfile(false);
    setActiveProjectStudy(false);
    setActiveLiked(false);
    setActiveComment(true);
  }, []);
  return (
    <Layout>
      <MyPageWrapper>
        <MyPageTopSection>
          <ProfileImageWrapper>
            <Image
              src={data.profileImageUrl}
              alt={'프로필사진'}
              width={100}
              height={100}
            />
          </ProfileImageWrapper>
          <ProfileNickname>{data.nickname}</ProfileNickname>
          <ProfileImageEditButton>프로필 이미지 수정</ProfileImageEditButton>
          <MyPageNav>
            <MyPageNavItem
              active={activeEditProfile}
              onClick={onClickEditProfile}
            >
              정보 수정
            </MyPageNavItem>
            <MyPageNavItem
              active={activeProjectStudy}
              onClick={onClickProjectStudy}
            >
              프로젝트/스터디
            </MyPageNavItem>
            <MyPageNavItem active={activeLiked} onClick={onClickLiked}>
              좋아요
            </MyPageNavItem>
            <MyPageNavItem active={activeComment} onClick={onClickComment}>
              댓글
            </MyPageNavItem>
          </MyPageNav>
        </MyPageTopSection>
        {activeEditProfile && <MyPageEditProfile data={data} />}
        {activeProjectStudy && <MyPageProjectStudy />}
        {activeLiked && <MyPageLiked />}
        {activeComment && <MyPageComment />}
      </MyPageWrapper>
    </Layout>
  );
};

export default MyPage;

export const getServerSideProps: GetServerSideProps<{
  data: MyPageData;
}> = async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.common['Authorization'] = '';
  if (context.req && cookie) {
    const allCookies = cookies(context);
    const token = allCookies['access_token'];
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const res: MyPageData = await getMyPageUserDataApi();

    return {
      props: {
        data: res,
      },
    };
  } else {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }
};
