import SearchInput from 'components/common/input/SearchInput';
import SelectInput from 'components/common/input/SelectInput';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import {
  CommunityHeaderFilter,
  CommunityHeaderSelect,
  CommunityHeaderSelectContent,
} from '../styled';
import { CommunityHeaderTopWrapper, CommunityHeaderWrite } from './styled';

const CommunityHeaderTop = ({
  currentCategory,
  setCurrentCategory,
}: {
  currentCategory: number;
  setCurrentCategory: Dispatch<SetStateAction<number>>;
}) => {
  const onClickCategory = (categoryId: number) => {
    if (currentCategory === categoryId) {
      return;
    }
    setCurrentCategory(categoryId);
  };
  return (
    <CommunityHeaderTopWrapper>
      <CommunityHeaderFilter>
        <CommunityHeaderSelect>
          <CommunityHeaderSelectContent active={currentCategory === 1}>
            <span onClick={() => onClickCategory(1)}>팀 프로젝트</span>
          </CommunityHeaderSelectContent>
          <CommunityHeaderSelectContent active={currentCategory === 2}>
            <span onClick={() => onClickCategory(2)}>개인 프로젝트</span>
          </CommunityHeaderSelectContent>
          <CommunityHeaderSelectContent active={currentCategory === 3}>
            <span onClick={() => onClickCategory(3)}>자유로운 글</span>
          </CommunityHeaderSelectContent>
        </CommunityHeaderSelect>
      </CommunityHeaderFilter>
      <CommunityHeaderWrite>
        <Link href="/registration/community">글쓰기</Link>
      </CommunityHeaderWrite>
    </CommunityHeaderTopWrapper>
  );
};

export default CommunityHeaderTop;
