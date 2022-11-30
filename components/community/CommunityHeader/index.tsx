import styled from 'styled-components';
import SearchInput from '../../common/input/SearchInput';
import SelectInput from '../../common/input/SelectInput';

const CommunityHeaderWrapper = styled.section`
  width: 100%;
  padding: 10px;
`;

const CommunityHeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const CommunityHeaderWrite = styled.button`
  padding: 6px 24px;
  color: ${(props) => props.theme.colors.white};
  border: none;
  background-color: ${(props) => props.theme.colors.green};
  border-radius: 4px;
  font-weight: 700;
`;

const CommunityHeaderTitle = styled.h1`
  font-size: 21px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

const CommunityHeaderFilter = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommunityHeaderSelect = styled.ul`
  display: flex;
`;

const CommunityHeaderSelectContent = styled.li<{ active?: boolean }>`
  padding: 10px;
  color: ${(props) => props.theme.colors.primary};
  letter-spacing: 0.5%;
  cursor: pointer;

  border-bottom: ${(props) =>
    props.active ? `2px solid ${props.theme.colors.red}` : 'none'};
`;

const CommunityHeaderSearch = styled.div`
  display: flex;
  align-items: center;
`;

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
