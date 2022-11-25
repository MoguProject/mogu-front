import { NextPage } from 'next';
import RegisterButton from '../../components/common/button/register';
import FilteredBox from '../../components/common/FilteredBox';
import Layout from '../../components/Layout';
import { HeaderWrapper, HeaderStyled, HeaderNavList } from './styled';

const ProjectsPage: NextPage = () => {
  return (
    <Layout>
      <HeaderWrapper>
        <HeaderStyled>
          <nav>
            <HeaderNavList>
              <li>전체 프로젝트</li>
              <li>전체 스터디</li>
            </HeaderNavList>
          </nav>
          <RegisterButton>모집하기</RegisterButton>
        </HeaderStyled>
      </HeaderWrapper>
      <div>
        <FilteredBox></FilteredBox>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
