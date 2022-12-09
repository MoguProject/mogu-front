import styled from 'styled-components';
import { useQuery } from 'react-query';
import { getMyPageLikedApi } from 'utils/apis/user';

const MyPageLikedWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 2rem 0;
`;

const MyPageLikedTitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
`;

const MyPageLikedPostWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const MyPageLikedPostCard = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 2rem 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  border-radius: 4px;

  :hover {
    transform: translateY(-6px);
    transition: all 0.2s ease-in-out;
  }
`;

const MyPageLikedCategoryName = styled.p`
  width: 100%;
  font-size: 14px;
  color: ${(props) => props.theme.colors.green};
  padding: 12px;
  border-bottom: 2px solid ${(props) => props.theme.colors.border};
`;

const MyPageLikedTitleStyled = styled.h2`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
  padding: 12px;
`;

const MyPageLiked = () => {
  const { data } = useQuery(['myPageProjectLiked'], getMyPageLikedApi);
  const dummyData = {
    categoryName: '팀 프로젝트',
    createdAt: '2022-12-02T18:50:34',
    id: 100,
    likeCount: 1,
    liked: true,
    nickname: '모구테스트1',
    title: '제목76',
    view: 0,
  };
  console.log(data);
  return (
    <MyPageLikedWrapper>
      <MyPageLikedTitle>내가 좋아요 누른 게시글</MyPageLikedTitle>
      <MyPageLikedPostWrapper>
        <MyPageLikedPostCard>
          <MyPageLikedCategoryName>
            {dummyData.categoryName}
          </MyPageLikedCategoryName>
          <MyPageLikedTitleStyled>{dummyData.title}</MyPageLikedTitleStyled>
        </MyPageLikedPostCard>
        <MyPageLikedPostCard>
          <p>{dummyData.categoryName}</p>
          <h1>{dummyData.title}</h1>
        </MyPageLikedPostCard>
        <MyPageLikedPostCard>
          <p>{dummyData.categoryName}</p>
          <h1>{dummyData.title}</h1>
        </MyPageLikedPostCard>
        <MyPageLikedPostCard>
          <p>{dummyData.categoryName}</p>
          <h1>{dummyData.title}</h1>
        </MyPageLikedPostCard>
      </MyPageLikedPostWrapper>
    </MyPageLikedWrapper>
  );
};

export default MyPageLiked;
