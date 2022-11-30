import styled from 'styled-components';
import SearchInput from '../../common/input/SearchInput';
import SelectInput from '../../common/input/SelectInput';
import {
  CommunityHeaderFilter,
  CommunityHeaderSearch,
  CommunityHeaderSelect,
  CommunityHeaderSelectContent,
  CommunityHeaderTitle,
  CommunityHeaderTop,
  CommunityHeaderWrapper,
  CommunityHeaderWrite,
} from './styled';

const CommunityHeader = () => {
  return (
    <CommunityHeaderWrapper>
      <CommunityHeaderTop>
        <CommunityHeaderTitle>커뮤니티 페이지 🕹</CommunityHeaderTitle>
        <CommunityHeaderWrite>글쓰기</CommunityHeaderWrite>
      </CommunityHeaderTop>
      <CommunityHeaderFilter>
        <CommunityHeaderSelect>
          <CommunityHeaderSelectContent active={true}>
            팀 프로젝트
          </CommunityHeaderSelectContent>
          <CommunityHeaderSelectContent>
            개인 프로젝트
          </CommunityHeaderSelectContent>
          <CommunityHeaderSelectContent>
            자유로운 글
          </CommunityHeaderSelectContent>
        </CommunityHeaderSelect>
        <CommunityHeaderSearch>
          <SelectInput>
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
