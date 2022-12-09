import styled from 'styled-components';
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

const CommunityHeader = () => {
  return (
    <CommunityHeaderWrapper>
      <CommunityHeaderTop />
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
