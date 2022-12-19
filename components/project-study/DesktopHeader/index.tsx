import {
  HeaderWrapper,
  HeaderStyled,
  HeaderNavList,
  RecruitButtonWrapper,
  HeaderNavItem,
} from './styled';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
const ProjectStudyDesktopHeader = ({
  currentCategory,
  setCurrentCategory,
}: {
  currentCategory: number;
  setCurrentCategory: Dispatch<SetStateAction<number>>;
}) => {
  const onClickCategoryProjects = () => {
    setCurrentCategory(4);
  };

  const onClickCategoryStudys = () => {
    setCurrentCategory(5);
  };
  return (
    <HeaderWrapper>
      <HeaderStyled>
        <nav>
          <HeaderNavList>
            <HeaderNavItem
              onClick={onClickCategoryProjects}
              active={currentCategory === 4}
            >
              <span>프로젝트</span>
            </HeaderNavItem>
            <HeaderNavItem
              onClick={onClickCategoryStudys}
              active={currentCategory === 5}
            >
              <span>스터디</span>
            </HeaderNavItem>
          </HeaderNavList>
        </nav>
        <RecruitButtonWrapper>
          <Link href="/registration">모집하기</Link>
        </RecruitButtonWrapper>
      </HeaderStyled>
    </HeaderWrapper>
  );
};

export default ProjectStudyDesktopHeader;
