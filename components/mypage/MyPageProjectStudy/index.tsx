import ProjectDesktopCard from 'components/common/card/project/ProjectDesktopCard';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import {
  getMyPageProjectPostsApi,
  getMyPageStudyPostsApi,
} from 'utils/apis/user';

const MyPageProjectStudyWrapper = styled.div`
  padding: 2rem 0;
  width: 90%;
  margin: 0 auto;
`;

const MyPageProjectStudyTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
`;

const MyPageProjectWrapper = styled.div``;

const MyPageProjectStudy = () => {
  const { data: projects } = useQuery(
    ['myPageProjectPosts'],
    getMyPageProjectPostsApi,
  );
  const { data: studys } = useQuery(
    ['myPageStudyPosts'],
    getMyPageStudyPostsApi,
  );
  console.log(projects);
  console.log(studys);
  return (
    <MyPageProjectStudyWrapper>
      <MyPageProjectStudyTitle>내 프로젝트</MyPageProjectStudyTitle>
      <MyPageProjectStudyWrapper></MyPageProjectStudyWrapper>
    </MyPageProjectStudyWrapper>
  );
};

export default MyPageProjectStudy;
