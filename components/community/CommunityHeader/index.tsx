import SearchInput from '../../common/input/SearchInput';
import SelectInput from '../../common/input/SelectInput';
import {
  CommunityHeaderFilter,
  CommunityHeaderSearch,
  CommunityHeaderSelect,
  CommunityHeaderSelectContent,
  CommunityHeaderWrapper,
} from './styled';
import CommunityHeaderTop from './top';
import Link from 'next/link';
import { useState } from 'react';

const CommunityHeader = () => {
  const [isActiveFirst, setActiveFirst] = useState(false);
  const [isActiveSecond, setIsActiveSecond] = useState(false);
  const [isActiveThird, setIsActiveThird] = useState(false);

  const toggleClassFirst = () => {
    setActiveFirst(true);
    setIsActiveSecond(false);
    setIsActiveThird(false);
  };
  const toggleClassSecond = () => {
    setActiveFirst(false);
    setIsActiveSecond(true);
    setIsActiveThird(false);
  };
  const toggleClassThird = () => {
    setActiveFirst(false);
    setIsActiveSecond(false);
    setIsActiveThird(true);
  };

  return (
    <CommunityHeaderWrapper>
      <CommunityHeaderTop />
      <CommunityHeaderFilter>
        <CommunityHeaderSelect>
          <CommunityHeaderSelectContent
            active={isActiveFirst}
            onClick={() => toggleClassFirst()}
          >
            <Link href="/community/category/1">팀 프로젝트</Link>
          </CommunityHeaderSelectContent>
          <CommunityHeaderSelectContent
            active={isActiveSecond}
            onClick={() => toggleClassSecond()}
          >
            <Link href="/community/category/2">개인 프로젝트</Link>
          </CommunityHeaderSelectContent>
          <CommunityHeaderSelectContent
            active={isActiveThird}
            onClick={() => toggleClassThird()}
          >
            <Link href="/community/category/3">자유로운 글</Link>
          </CommunityHeaderSelectContent>
        </CommunityHeaderSelect>
        <CommunityHeaderSearch>
          <SelectInput width={'107px'}>
            <select name="" id="">
              <option value="">제목</option>
              <option value="">내용</option>
            </select>
          </SelectInput>
          <SearchInput />
        </CommunityHeaderSearch>
      </CommunityHeaderFilter>
    </CommunityHeaderWrapper>
  );
};

export default CommunityHeader;
