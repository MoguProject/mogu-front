import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import SelectInput from '../input/SelectInput';
import { ProjectsFilter } from './styled';

interface FilterBoxPropsInterface {
  currentSort: 'recent' | 'liked' | 'opened';
  setCurrentSort: Dispatch<SetStateAction<'recent' | 'liked' | 'opened'>>;
}

const FilteredBox = ({
  currentSort,
  setCurrentSort,
}: FilterBoxPropsInterface) => {
  const onChangeSelectSort = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === 'recent') {
      setCurrentSort('recent');
      return;
    }
    setCurrentSort('liked');
  };

  const onChangeOpened = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    if (checked) {
      return setCurrentSort('opened');
    } else {
      return setCurrentSort('recent');
    }
  };
  return (
    <ProjectsFilter>
      <SelectInput width="200px">
        <select onChange={onChangeSelectSort}>
          <option value="recent">최신순</option>
          <option value="liked">인기순</option>
        </select>
      </SelectInput>
      <input
        onChange={onChangeOpened}
        id="projectState"
        type="checkbox"
        name="state"
        value="opened"
      />
      <label htmlFor="projectState">모집중</label>
    </ProjectsFilter>
  );
};
export default FilteredBox;
