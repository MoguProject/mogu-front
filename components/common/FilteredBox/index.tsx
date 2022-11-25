import React from 'react';
import { ProjectsFilter } from './styled';

const FilteredBox = () => {
  return (
    <ProjectsFilter>
      <select>
        <option value="온라인">온라인</option>
        <option value="오프라인">오프라인</option>
      </select>
      <select>
        <option value="기술스택">기술스택</option>
      </select>
      <select>
        <option value="최신순">최신순</option>
        <option value="인기순">인기순</option>
      </select>
      <input id="projectState" type="checkbox" name="state" value="모집중" />{' '}
      <label htmlFor="projectState">모집중</label>
    </ProjectsFilter>
  );
};
// 기술 스택에 대한 종류와 선택 방식에 대해서 논의 후 코드 추가 예정
export default FilteredBox;
